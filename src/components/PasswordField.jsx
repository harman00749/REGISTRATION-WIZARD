import { useState } from 'react'
import FieldError from './FieldError'

function EyeIcon({ hidden }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d={
          hidden
            ? 'M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.2A9.8 9.8 0 0112 5c5.3 0 8.5 4.6 9.5 7a12.6 12.6 0 01-2.4 3.5M6.5 6.5A12.9 12.9 0 002.5 12c1 2.4 4.2 7 9.5 7 1.3 0 2.5-.3 3.5-.8'
            : 'M2.5 12c1-2.4 4.2-7 9.5-7s8.5 4.6 9.5 7c-1 2.4-4.2 7-9.5 7S3.5 14.4 2.5 12zM12 15a3 3 0 100-6 3 3 0 000 6z'
        }
      />
    </svg>
  )
}

function PasswordField({ error, label, name, register }) {
  const [isVisible, setIsVisible] = useState(false)
  const inputId = `${name}-input`

  return (
    <label className="field-group" htmlFor={inputId}>
      <span>{label}</span>
      <div className="password-control">
        <input
          id={inputId}
          type={isVisible ? 'text' : 'password'}
          {...register(name)}
        />
        <button
          className="icon-toggle"
          type="button"
          aria-label={isVisible ? `Hide ${label}` : `Show ${label}`}
          onClick={() => setIsVisible((currentValue) => !currentValue)}
        >
          <EyeIcon hidden={!isVisible} />
          <span>{isVisible ? 'Hide' : 'Show'}</span>
        </button>
      </div>
      <FieldError message={error?.message} />
    </label>
  )
}

export default PasswordField
