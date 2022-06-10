import SignIn from '../pages/auth/signin'
import SignUp from '../pages/auth/signup'
import Navigator from '../components/navigator'

export default () => {
  const screens = [
    { name: 'SignIn', component: SignIn },
    { name: 'SignUp', component: SignUp }
  ]

  return <Navigator screens={screens} initialRoute="SignIn" />
}
