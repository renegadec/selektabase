import { useState } from 'react'
import type { FormEvent } from 'react'
import { FORM_ENDPOINT, FORM_RECIPIENT } from '../data/site'

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  placeholder?: string
  options?: readonly string[]
  /** Renders the control across the full grid width. */
  wide?: boolean
}

type EnquiryFormProps = {
  id: string
  /** Email subject line, also used as the form heading context. */
  subject: string
  fields: readonly FormField[]
  submitLabel?: string
  note?: string
}

/**
 * Reusable enquiry form.
 *
 * With no backend configured (`FORM_ENDPOINT === null`) it composes the answers
 * into a pre-filled mail draft, which works today with no infrastructure. Once
 * an endpoint is set it POSTs JSON instead and reports success inline.
 */
export default function EnquiryForm({
  id,
  subject,
  fields,
  submitLabel = 'Send enquiry',
  note,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const entries = fields.map((field) => ({
      field,
      value: String(data.get(field.name) ?? '').trim(),
    }))

    if (!FORM_ENDPOINT) {
      const body = entries
        .filter(({ value }) => value)
        .map(({ field, value }) => `${field.label}: ${value}`)
        .join('\n')
      const mailto = `mailto:${FORM_RECIPIENT}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          subject,
          ...Object.fromEntries(entries.map(({ field, value }) => [field.name, value])),
        }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" id={id} onSubmit={handleSubmit} noValidate={false}>
      <div className="form__grid">
        {fields.map((field) => (
          <div
            className={field.wide ? 'field field--wide' : 'field'}
            key={field.name}
          >
            <label className="field__label" htmlFor={`${id}-${field.name}`}>
              {field.label}
              {field.required ? <span aria-hidden="true"> *</span> : null}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                className="field__control"
                id={`${id}-${field.name}`}
                name={field.name}
                rows={4}
                required={field.required}
                placeholder={field.placeholder}
              />
            ) : field.type === 'select' ? (
              <select
                className="field__control"
                id={`${id}-${field.name}`}
                name={field.name}
                required={field.required}
                defaultValue=""
              >
                <option value="" disabled>
                  Please choose…
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="field__control"
                id={`${id}-${field.name}`}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>

      <div className="form__actions">
        <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        {note ? <p className="form__note">{note}</p> : null}
      </div>

      <p className="form__status" role="status">
        {status === 'sent'
          ? 'Thanks — your enquiry is on its way. We will be in touch shortly.'
          : null}
        {status === 'error'
          ? 'Something went wrong sending that. Please email us directly instead.'
          : null}
      </p>
    </form>
  )
}
