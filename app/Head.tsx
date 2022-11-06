/* eslint-disable tailwindcss/no-custom-classname */
'use client'
import MenuButton from 'components/svg/Menu'
import React from 'react'

type Props = {
  className: string
}

export default function Head(props: Props): React.ReactNode {
  return (
    <header className={`font-lusi text-accent ${props.className}`}>
      <h1 className="text-center text-[32px] leading-[48px]">My Web Sample</h1>
      <div className="contents_center h-[48px] bg-main">
        <MenuButton />
      </div>
    </header>
  )
}
