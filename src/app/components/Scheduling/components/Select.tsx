type Option = {
  label: string
  value: string
}

interface SelectProps {
  label: string
  options: Option[]
  placeholder: string
  onChange: (value: string) => void
}

export function Select({ label, options, placeholder, onChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="font-bold text-base text-secondary-500">{label}</label>
      <select className="text-xs font-medium text-secondary-300 pr-2">
        <option>{placeholder}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
