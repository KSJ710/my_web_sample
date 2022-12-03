import { Suspense } from 'react'
import Adm from './Adm'
import Categories from './Categories'
import Posts from './Posts'

export default function Page(): JSX.Element {
  return (
    <Adm
      categories={
        <Suspense fallback={<p>Loading...1</p>}>
          {/* @ts-expect-error Server Component */}
          <Categories />
        </Suspense>
      }
      posts={
        <Suspense fallback={<p>Loading...2</p>}>
          {/* @ts-expect-error Server Component */}
          <Posts />
        </Suspense>
      }
    />
  )
}

Page.props = {
  authStatus: 'authenticated'
}
