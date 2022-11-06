import Login from 'components/main/Login'

export default function Page(): JSX.Element {
  return <Login />
}

Page.props = {
  authStatus: 'noAuthenticated'
}
