'use client'

import { ButtonHTMLAttributes } from 'react'
import { CaretDown } from '@phosphor-icons/react'

export type ButtonVariation = 'primary' | 'secondary' | 'minimal'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  title?: string
  rightIcon?: boolean
  variation?: ButtonVariation
}

export function Button({
  disabled,
  title,
  rightIcon = false,
  variation = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-1 rounded-md font-semibold flex items-center gap-2 group border-[inset] cursor-pointer z-10 ${
        variation === 'primary'
          ? 'bg-primary-500 text-primary-0 focus:border-2 focus:border-[#CEBEFE] focus:bg-primary-700'
          : variation === 'secondary'
          ? 'bg-primary-0 border-2 border-secondary-300 text-secondary-400 hover:border-secondary-400 hover:text-secondary-500 focus:bg-primary-100 focus:text-secondary-500'
          : 'text-secondary-200 hover:bg-primary-0 hover:text-secondary-500 hover:fill-secondary-500 focus:border-2 focus:border-secondary-200 focus:bg-primary-100 focus:text-secondary-500 disabled:text-secondary-400'
      }
      ${disabled && 'opacity-40'}
      `}
      {...rest}
    >
      {title && title}
      {rightIcon && (
        <CaretDown
          size={12}
          weight="fill"
          className={`${
            variation === 'primary'
              ? 'fill-primary-0'
              : variation === 'secondary'
              ? 'fill-primary-400 group-hover:fill-secondary-500 group-focus:fill-secondary-500'
              : 'fill-primary-200 group-hover:fill-secondary-500 group-focus:fill-secondary-500'
          }`}
        />
      )}
    </button>
  )
}
