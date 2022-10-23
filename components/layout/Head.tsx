type Props = {
  className: string
}

export default function Head(props: Props): JSX.Element {
  return (
    <header className={`font-lusi text-[32px] leading-[48px] text-accent ${props.className}`}>
      <h1 className="text-center text-[32px]">My Web Sample</h1>
      <div className="h-[48px] bg-main"></div>
    </header>
  )
}
