'use client'

import { Icon, IconType } from './Icon'
import { Profile } from './Profile'

export function Utilities() {
  return (
    <div className="flex items-center gap-5">
      <Icon type={IconType.Like} />
      <Icon type={IconType.Notification} />
      <Icon type={IconType.Settings} />
      <Profile />
    </div>
  )
}
