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
  hasNotification?: boolean
}

export function Icon({ type, href = '', hasNotification = false }: IconProps) {
  return (
    <div
      className={`w-10 h-10 rounded-full bg-primary-0 flex items-center justify-center border-[1px] border-[#C3D4E966] relative ${
        hasNotification &&
        "after:content-[''] after:absolute after:w-2 after:h-2 after:bg-[#FF4423] after:rounded-full after:top-0 after:right-0"
      }`}
    >
      <a href={href}>
        {type === IconType.Like && (
          <Heart size={24} className="fill-secondary-400" weight="fill" />
        )}
        {type === IconType.Notification && (
          <Bell size={24} className="fill-secondary-400" weight="fill" />
        )}
        {type === IconType.Settings && (
          <GearSix size={24} className="fill-secondary-400" weight="fill" />
        )}
      </a>
    </div>
  )
}
