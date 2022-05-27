import Navigator from '../components/navigator'
import Home from '../pages/home'
import About from '../pages/about'

export default () => {
  const screens = [
    { name: 'Home', component: Home },
    { name: 'About', component: About }
  ]

  return <Navigator screens={screens} />
}
