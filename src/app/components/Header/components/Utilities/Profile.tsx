import Image from 'next/image'

export function Profile() {
  return (
    <div className="w-10 h-10 rounded-full bg-primary-0 flex items-center justify-center  border-[1px] border-[#C3D4E966]">
      <a href="">
        <Image
          src="https://github.com/felipecfb.png"
          width={100}
          height={100}
          className="w-full h-full rounded-full"
          alt="Avatar"
        />
      </a>
    </div>
  )
}
