import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  disabled?: boolean
}

export function Input({
  placeholder = 'Placeholder',
  disabled = false,
  ...rest
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className="text-secondary-300 bg-primary-0 rounded-lg px-8 py-4 disabled:bg-secondary-100 disabled:text-secondary-200 disabled:cursor-not-allowed"
      disabled={disabled}
      {...rest}
    />
  )
}
