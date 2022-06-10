import { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser()
  })

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user')
    setUser(JSON.parse(user))
  }

  const handleUser = async (user) => {
    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user')
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, handleUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
