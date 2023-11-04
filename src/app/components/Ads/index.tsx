import { Item } from './components/Item'

export function Ads() {
  return (
    <div className="w-full flex items-center gap-8">
      <Item
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        background="information"
        backgroundImage="bg-ads.svg"
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Item
        title="Easy way to rent a car at a low price"
        description="Providing cheap car rental services and safe and comfortable facilities."
        background="primary"
        backgroundImage="bg-ads-2.svg"
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}
