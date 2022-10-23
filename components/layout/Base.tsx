import { ReactNode } from 'react'
import Head from './Head'

type Props = {
  children: ReactNode
}

export default function Base(props: Props): JSX.Element {
  return (
    <div>
      <Head className="mb-[8px]" />
      <main className="flex justify-center">{props.children}</main>
    </div>
  )
}
