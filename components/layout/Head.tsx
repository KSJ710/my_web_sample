type Props = {
  marginBottom: string
}

export default function Head(props: Props): JSX.Element {
  return (
    <header className={`text-center font-lusi text-[32px] leading-[48px] text-accent ${props.marginBottom}`}>
      My Web Sample
      <div className="h-[48px] bg-main"></div>
    </header>
  )
}
