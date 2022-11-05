/* eslint-disable tailwindcss/no-custom-classname */
import MenuButton from 'components/svg/Menu'

type Props = {
  className: string
}

export default function Head(props: Props): JSX.Element {
  return (
    <header className={`font-lusi text-accent ${props.className}`}>
      <h1 className="text-center text-[32px] leading-[48px]">My Web Sample</h1>
      <div className="contents_center h-[48px] bg-main">
        <MenuButton />
      </div>
    </header>
  )
}
