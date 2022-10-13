import Login from 'components/Login'

export default function App(): JSX.Element {
  return <Login />
}

App.props = {
  authStatus: 'noAuthenticated'
}
