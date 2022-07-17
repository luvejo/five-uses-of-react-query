import type { NextPage } from 'next'
import { Container, Stack, Title } from '@mantine/core'
import Login from '@/components/Login'
import Stopwatch from '@/components/Stopwatch'
import Logger from '@/components/Logger'
import GPS from '@/components/GPS'
import WebWorker from '@/components/WebWorker'
import GlobalState from '@/components/GlobalState'

const Home: NextPage = () => {
  return (
    <Container>
      <Stack>
        <Title>Login</Title>
        <Login />

        <Title>Stopwatch</Title>
        <Stopwatch />

        <Title>Logger</Title>
        <Logger />

        <Title>GPS</Title>
        <GPS />

        <Title>WebWorker</Title>
        <WebWorker />

        <Title>GlobalState</Title>
        <GlobalState />
      </Stack>
    </Container>
  )
}

export default Home
