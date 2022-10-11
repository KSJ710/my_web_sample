import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import Base from 'components/layout/Base'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  if (Component?.props?.authStatus === 'authenticated') {
    return (
      <SessionProvider session={session}>
        <Base>
          <Component {...pageProps} />
        </Base>
      </SessionProvider>
    )
  } else if (Component?.props?.authStatus === 'noAuthenticated') {
    return (
      <Base>
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
