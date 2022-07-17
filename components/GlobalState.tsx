import { Text, TextInput, Stack } from '@mantine/core'
import { useQuery } from 'react-query'

import client from '@/lib/client'

const StateEditor = () => {
  const { data: value } = useQuery('shared-text', {
    enabled: false,
    initialData: '',
  })
  return (
    <TextInput
      value={value}
      onChange={(e) => client.setQueryData('shared-text', e.target.value)}
    />
  )
}

const StateViewer = () => {
  const { data: value } = useQuery('shared-text', {
    enabled: false,
    initialData: '',
  })
  return <Text>{value}</Text>
}

type Props = {}

function GlobalState({}: Props) {
  return (
    <Stack>
      <StateEditor />
      <StateViewer />
    </Stack>
  )
}

export default GlobalState
