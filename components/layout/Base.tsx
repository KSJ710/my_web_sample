import Head from './Head'
import styles from './Base.module.scss'

export default function Base(props: any): JSX.Element {
  return (
    <div className="">
      <Head />
      <main>{props.children}</main>
    </div>
  )
}
