import Login from 'components/main/Login'

export default function App(): JSX.Element {
  return <Login />
}

App.props = {
  authStatus: 'noAuthenticated'
}
