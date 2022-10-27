import { ReactNode } from 'react'
import Head from './Head'

type Props = {
  children: ReactNode
}

export default function Base(props: Props): JSX.Element {
  return (
    <>
      <Head className="mb-[32px]" />
      <main className="container">{props.children}</main>
    </>
  )
}
