import { Divisor } from '../../Divisor'
import { Select } from './Select'

type SchedulingType = 'pick-up' | 'drop-off'

interface SchedulingItemProps {
  type: SchedulingType
}

export function SchedulingItem({ type }: SchedulingItemProps) {
  function handleSelectChange(value: string): void {
    console.log('value', value)
  }

  const locationOptions = [
    {
      label: 'São Paulo',
      value: 'sao-paulo',
    },
    {
      label: 'Rio de Janeiro',
      value: 'rio-de-janeiro',
    },
  ]

  const dateOptions = [
    {
      label: 'Today',
      value: 'today',
    },
    {
      label: 'Tomorrow',
      value: 'tomorrow',
    },
  ]

  const timeOptions = [
    {
      label: '9:00',
      value: '9:00',
    },
    {
      label: '10:00',
      value: '10:00',
    },
  ]

  return (
    <div className="bg-primary-0 rounded-[10px] pt-6 pb-7 px-12 flex flex-col gap-4 flex-1">
      <header className="flex items-center gap-2 w-full">
        <div className="bg-[#3563E94D] p-1 flex items-center justify-center rounded-full">
          <div
            className={`w-2 h-2 ${
              type === 'pick-up' ? 'bg-primary-500' : 'bg-information-500'
            } rounded-full`}
          ></div>
        </div>

        <h1 className="text-base font-semibold text-secondary-500 font-primary capitalize">
          {type}
        </h1>
      </header>

      <div className="flex items-center gap-6">
        <Select
          label="Locations"
          options={locationOptions}
          placeholder="Select your city"
          onChange={handleSelectChange}
        />
        <Divisor />
        <Select
          label="Date"
          options={dateOptions}
          placeholder="Select your date"
          onChange={handleSelectChange}
        />
        <Divisor />
        <Select
          label="Time"
          options={timeOptions}
          placeholder="Select your time"
          onChange={handleSelectChange}
        />
      </div>
    </div>
  )
}
