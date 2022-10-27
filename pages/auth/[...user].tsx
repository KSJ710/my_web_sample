import { useRouter } from 'next/router'
import Adm from 'components/main/Adm'
import Component404 from 'components/Component404'

export default function App(): JSX.Element {
  const { user } = useRouter().query

  if (user?.[0] === 'adm') {
    return <Adm />
  } else {
    return <Component404 />
  }
}

App.props = {
  authStatus: 'authenticated'
}
