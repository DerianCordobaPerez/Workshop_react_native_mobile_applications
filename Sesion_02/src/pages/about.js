import { Text, View } from 'react-native'
import Button from '../components/button'

export default function About({ navigation }) {
  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}
