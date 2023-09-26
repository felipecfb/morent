'use client'

import { Bell, GearSix, Heart } from '@phosphor-icons/react'

export enum IconType {
  Like = 'Heart',
  Notification = 'Bell',
  Settings = 'GearSix',
}

interface IconProps {
  type: IconType
  href?: string
}

export function Icon({ type, href = '' }: IconProps) {
  return (
    <div className="w-10 h-10 rounded-full bg-primary-0 flex items-center justify-center  border-[1px] border-[#C3D4E966]">
      {type === IconType.Like && (
        <a href={href}>
          <Heart size={24} className="fill-secondary-400" weight="fill" />
        </a>
      )}
      {type === IconType.Notification && (
        <a href={href}>
          <Bell size={24} className="fill-secondary-400" weight="fill" />
        </a>
      )}
      {type === IconType.Settings && (
        <a href={href}>
          <GearSix size={24} className="fill-secondary-400" weight="fill" />
        </a>
      )}
    </div>
  )
}
