import { Text, View } from 'react-native'
import Button from '../components/button'
import { useNavigation } from '@react-navigation/native'
import Wrapper from '../components/wrapper'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../hooks/useUser'

export default function Home() {
  const navigation = useNavigation()
  const [persons, setPersons] = useState([])
  const { handleLogout } = useContext(UserContext)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => setPersons(data.results))
  }, [])

  return (
    <Wrapper>
      <Text>Home Screen</Text>

      {persons.map((person) => (
        <View key={person.email}>
          <Text>
            {person.name.first} {person.name.last} - {person.email} -{' '}
            {person.phone}
          </Text>

          <Button
            title="Go to Details"
            onPress={() =>
              navigation.navigate('Details', {
                name: person.name.first,
                email: person.email,
                phone: person.phone
              })
            }
          />
        </View>
      ))}

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />

      <Button title="Logout" onPress={() => handleLogout()} />
    </Wrapper>
  )
}
