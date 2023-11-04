'use client'

import { Ads } from './components/Ads'
import { Scheduling } from './components/Scheduling'

export default function Home() {
  return (
    <div className="bg-[#F6F7F9] py-8 px-16 flex flex-col gap-8">
      <Ads />

      <Scheduling />
    </div>
  )
}
