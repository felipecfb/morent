import { Switch } from '../Switch'
import { SchedulingItem } from './components/SchedulingItem'

export function Scheduling() {
  return (
    <div className="flex items-center justify-center gap-11">
      <SchedulingItem type="pick-up" />
      <Switch />
      <SchedulingItem type="drop-off" />
    </div>
  )
}
