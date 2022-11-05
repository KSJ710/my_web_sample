import MenuButton from 'components/svg/Menu'

type Props = {
  className: string
}

export default function Head(props: Props): JSX.Element {
  return (
    <header className={`font-lusi text-accent ${props.className}`}>
      <h1 className="text-center text-[32px] leading-[48px]">My Web Sample</h1>
      <div className="flex h-[48px] items-center justify-center bg-main">
        <MenuButton />
      </div>
    </header>
  )
}
