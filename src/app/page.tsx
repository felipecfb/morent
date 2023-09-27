'use client'

import { Ads } from './components/Ads'

export default function Home() {
  return (
    <div className="w-full flex items-center gap-8 py-8 px-16">
      <Ads
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        background="information"
        backgroundImage="bg-ads.svg"
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Ads
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
