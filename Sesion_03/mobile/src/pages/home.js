import { Text } from 'react-native'
import Button from '../components/button'
import { useNavigation } from '@react-navigation/native'
import Wrapper from '../components/wrapper'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../hooks/useUser'

export default function Home() {
  const navigation = useNavigation()
  const [movies, setMovies] = useState([])
  const { user, handleLogout } = useContext(UserContext)

  useEffect(() => {
    fetch('http://localhost:4000/api/movie/find', {
      headers: {
        'x-auth-token': user.token
      }
    })
      .then((res) => res.json())
      .then((data) => setMovies(data))
  }, [])

  return (
    <Wrapper>
      <Text>{JSON.stringify(movies)}</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />

      <Button title="Logout" onPress={() => handleLogout()} />
    </Wrapper>
  )
}
