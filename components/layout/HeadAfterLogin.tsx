import Image from 'next/image'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <header className="text-center font-lusi text-[32px] leading-[48px] text-accent">
      My Web Sample
      <div className="h-[48px] bg-main"></div>
    </header>
  )
}
