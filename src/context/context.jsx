import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
//import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

export default function AuthProvider(props) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = useCallback(
    (details) => {
      setLoading(true)
      console.log(details)
      setUser(details)
      setLoading(false)

      return details
    },
    [setUser]
  )

  const register = useCallback((details) => {
    return console.log(details)
  }, [])

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      loading,
    }),
    [login, user, register, loading]
  )

  return <AuthContext.Provider value={value} {...props} />
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}
