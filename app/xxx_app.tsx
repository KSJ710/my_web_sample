import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  if (Component?.props?.authStatus === 'authenticated') {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  } else if (Component?.props?.authStatus === 'noAuthenticated') {
    return <Component {...pageProps} />
  } else {
    return <Component {...pageProps} />
  }
}
