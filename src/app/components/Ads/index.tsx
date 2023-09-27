import Image from 'next/image'
import { BackgroundColors, Button } from '../Button'

type Background = 'primary' | 'information'

interface AdsProps {
  title: string
  description: string
  background: Background
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
      className={`w-full flex flex-col items-start gap-5 p-6 pb-28 relative ${
        background === 'primary' ? 'bg-primary-500' : 'bg-information-500'
      } rounded-[10px]`}
    >
      <div className="title flex flex-col gap-4 max-w-[284px]">
        <h1 className="font-semibold text-3xl z-10 text-primary-0">{title}</h1>
        <p className="z-10 text-primary-0">{description}</p>
      </div>
      <Button
        title="Rental car"
        onClick={onClick}
        background={
          background === 'primary'
            ? BackgroundColors.Information
            : BackgroundColors.Primary
        }
      />
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
