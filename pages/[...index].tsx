import { useRouter } from 'next/router';
import Home from '../components/Home'
import Component404 from '../components/Component404';

export default function App(): JSX.Element {
  const { index } = useRouter().query;

  if (index?.[0] === 'home') {
    return <Home />;
  } else {
    return <Component404 />;
  }
}

App.props = {
  layout: 'main',
};