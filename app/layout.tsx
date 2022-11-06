'use client'
import Head from './Head'
import './globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Head className="mb-[32px]" />
        <main>{children}</main>
      </body>
    </html>
  )
}
