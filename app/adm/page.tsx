import { Suspense } from 'react'
import Adm from './Adm'
import Category from './Category'
import Post from './Post'

export default function Page(): JSX.Element {
  return (
    <Adm
      categories={
        <Suspense fallback={<p>Loading...1</p>}>
          {/* @ts-expect-error Server Component */}
          <Category />
        </Suspense>
      }
      posts={
        <Suspense fallback={<p>Loading...2</p>}>
          {/* @ts-expect-error Server Component */}
          <Post />
        </Suspense>
      }
    />
  )
}

Page.props = {
  authStatus: 'authenticated'
}
