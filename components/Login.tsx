import { Text } from '@mantine/core'
import { useQuery } from 'react-query'

const login = async () => {
  const resp = await fetch('/api/login.json')
  const { id } = await resp.json()

  const userResp = await fetch(`/api/${id}.json`)
  const user = await userResp.json()
  return user
}

const Login = () => {
  const { data: user } = useQuery('login', login)

  return <Text>{JSON.stringify(user)}</Text>
}

export default Login
