import { Suspense } from 'react'
import Adm from './Adm'
import Categories from 'components/dynamics/Categories'
import Posts from 'components/dynamics/Posts'

export default function Page() {
  return (
    <Adm
      categories={
        <Suspense fallback={<p>Loading...1</p>}>
          <Categories />
        </Suspense>
      }
      posts={
        <Suspense fallback={<p>Loading...2</p>}>
          <Posts />
        </Suspense>
      }
    />
  )
}

Page.props = {
  authStatus: 'authenticated'
}
