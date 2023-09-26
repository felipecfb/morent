import Image from 'next/image'
import { Button } from '../Button'

type BackgroundColors = 'primary' | 'information'

interface AdsProps {
  title: string
  description: string
  background: BackgroundColors
  backgroundImage: string
  onClick: () => void
}

export function Ads({
  title,
  description,
  background,
  backgroundImage,
  onClick,
}: AdsProps) {
  return (
    <div
      className={`w-full flex flex-col items-start gap-4 p-6 pb-28 relative ${
        background === 'primary' ? 'bg-primary-500' : 'bg-information-500'
      } rounded-[10px]`}
    >
      <h1 className="font-semibold text-3xl z-10">{title}</h1>
      <p className="z-10">{description}</p>
      <Button title="Rental car" onClick={onClick} />
      <Image
        src={backgroundImage}
        width={100}
        height={100}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
    </div>
  )
}
