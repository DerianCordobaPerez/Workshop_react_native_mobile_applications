import Input from '../../components/input'
import Wrapper from '../../components/wrapper'
import Button from '../../components/button'
import { useState, useContext } from 'react'
import { UserContext } from '../../hooks/useUser'
import { useNavigation } from '@react-navigation/native'

export default function SignUn() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleUser } = useContext(UserContext)
  const navigation = useNavigation()

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      password
    }

    await fetch('http://localhost:4000/api/authentication/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        } else {
          handleUser(data)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Wrapper>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="#999"
        autoCapitalize="none"
      />

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <Button title="Signup" onPress={handleSubmit} />
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('SignIn')}
      />
    </Wrapper>
  )
}
