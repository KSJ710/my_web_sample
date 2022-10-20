import { ReactNode } from 'react'
import Head from './Head'

type Props = {
  children: ReactNode
}

export default function Base(props: Props): JSX.Element {
  return (
    <div>
      <Head marginBottom="mb-[32px]" />
      <main className="flex justify-center">{props.children}</main>
    </div>
  )
}
