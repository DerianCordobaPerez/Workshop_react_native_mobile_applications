import Navigator from '../components/navigator'
import Home from '../pages/home'
import About from '../pages/about'
import Details from '../pages/details'

export default () => {
  const screens = [
    { name: 'Home', component: Home },
    { name: 'About', component: About },
    { name: 'Details', component: Details }
  ]

  return <Navigator screens={screens} initialRoute="Home" />
}
