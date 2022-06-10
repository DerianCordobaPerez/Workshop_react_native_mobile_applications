import HomeNavigation from './home.routes'
import AuthNavigation from './auth.routes'
import { useEffect, useContext } from 'react'
import { UserContext } from '../hooks/useUser'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default () => {
  const { user, handleLogout } = useContext(UserContext)

  useEffect(() => {
    return () => async () => {
      if (!user) {
        handleLogout()
      }
    }
  }, [user])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          animationTypeForReplace: 'push'
        }}
      >
        {!user ? (
          <Stack.Screen name="SignIn" component={AuthNavigation} />
        ) : (
          <Stack.Screen name="Home" component={HomeNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
