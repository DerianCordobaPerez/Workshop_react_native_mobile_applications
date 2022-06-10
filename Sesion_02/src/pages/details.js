import { useNavigation } from '@react-navigation/native'
import Wrapper from '../components/wrapper'
import { Text } from 'react-native'

export default ({ route }) => {
  const { name, email, phone } = route.params
  return (
    <Wrapper>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </Wrapper>
  )
}
