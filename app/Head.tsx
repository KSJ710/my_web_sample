/* eslint-disable tailwindcss/no-custom-classname */
import MenuButton from './svg/MenuButton'
import React from 'react'

type Props = {
  className: string
}

export default function Head(props: Props): JSX.Element {
  return (
    <header className={`${props.className}`}>
      <h1 className="text-center font-lusi text-[32px] leading-[48px] text-accent">My Web Sample</h1>
      <div className="contents_center h-[48px] bg-main">
        <MenuButton />
      </div>
    </header>
  )
}
