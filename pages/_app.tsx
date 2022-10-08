import '../styles/globals.scss'
import Base from 'components/layout/Base'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  if (Component?.props?.authStatus === 'authenticated') {
    return (
      <Base>
        <Component {...pageProps} />
      </Base>
    )
  } else if (Component?.props?.authStatus === 'noAuthenticated') {
    return (
      <Base>
        b
        <Component {...pageProps} />
      </Base>
    )
  } else {
    return (
      <Base>
        <Component {...pageProps} />
      </Base>
    )
  }
}
