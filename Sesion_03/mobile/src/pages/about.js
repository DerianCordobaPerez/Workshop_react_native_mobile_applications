import { Text } from 'react-native'
import Button from '../components/button'
import Wrapper from '../components/wrapper'

export default function About({ navigation }) {
  const goBack = () => navigation.goBack()

  return (
    <Wrapper>
      <Text>About Screen</Text>
      <Button title="Go Back" onPress={goBack} />
    </Wrapper>
  )
}
