import { HeaderContainer } from './headerStyles'
import { Link } from 'react-router-native'
import { Text } from 'react-native'

const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

export default function Header() {
  return (
    <HeaderContainer>
      {links.map((link) => (
        <Link key={link.name} to={link.path}>
          <Text>{link.name}</Text>
        </Link>
      ))}
    </HeaderContainer>
  )
}
