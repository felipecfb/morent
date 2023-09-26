'use client'

import { Icon } from './Icon'
import { Profile } from './Profile'

export function Utilities() {
  return (
    <div className="flex items-center gap-5">
      <Icon type="Like" />
      <Icon type="Notification" hasNotification />
      <Icon type="Settings" />
      <Profile />
    </div>
  )
}
