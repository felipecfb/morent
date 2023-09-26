import { Search } from './components/Search'
import { Utilities } from './components/Utilities'

export function Header() {
  return (
    <header className="w-full bg-primary-0 py-10 pl-14 pr-8 flex items-center gap-16 justify-between border-b-[1px] border-[#C3D4E966]">
      <div className="flex items-center gap-16 w-full">
        <h1 className="text-primary-500 font-bold font-primary text-3xl uppercase">
          Morent
        </h1>
        <Search />
      </div>
      <Utilities />
    </header>
  )
}
