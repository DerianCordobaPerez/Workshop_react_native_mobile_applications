import { Text, View } from 'react-native'
import Button from '../components/button'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}
