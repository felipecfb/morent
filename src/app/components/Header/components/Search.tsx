'use client'

import { MagnifyingGlass, SlidersHorizontal } from '@phosphor-icons/react'

export function Search() {
  return (
    <div className="relative w-full max-w-[492px]">
      <MagnifyingGlass
        size={24}
        className="absolute top-3 left-5 fill-secondary-400"
      />
      <input
        type="text"
        placeholder="Search something here"
        className="w-full text-secondary-400 pl-16 py-3 rounded-[70px] bg-primary-0 border-solid border-[1px] border-[#C3D4E966]"
      />
      <SlidersHorizontal
        size={24}
        className="absolute top-3 right-5 fill-secondary-400 cursor-pointer"
      />
    </div>
  )
}
