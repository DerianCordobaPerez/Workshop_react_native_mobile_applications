import AppNavigation from './src/routes/index'
import UserProvider from './src/hooks/useUser'

export default function App() {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  )
}
