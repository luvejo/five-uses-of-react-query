import { Button, Group, Text, TextInput } from '@mantine/core'
import { useState } from 'react'
import { useMutation } from 'react-query'

const multiplyNumbers = async (args: { a: number; b: number }) => {
  return new Promise((resolve) => {
    const worker = new Worker(new URL('../worker.js', import.meta.url))
    worker.postMessage(args)
    worker.onmessage = (message) => {
      if (message.data.type === 'result') {
        resolve(message.data.result)
      }
      worker.terminate()
    }
  })
}

type Props = {}

function WebWorker({}: Props) {
  const { data: value, mutate: multiplyNumbersMutation } = useMutation(
    'multiply-numbers',
    multiplyNumbers,
  )
  const [valueA, setValueA] = useState('10')
  const [valueB, setValueB] = useState('20')

  return (
    <Group>
      <TextInput value={valueA} onChange={(e) => setValueA(e.target.value)} />
      <TextInput value={valueB} onChange={(e) => setValueB(e.target.value)} />
      <Button
        onClick={() => multiplyNumbersMutation({ a: +valueA, b: +valueB })}
      >
        Multiply
      </Button>

      <Text>{value}</Text>
    </Group>
  )
}

export default WebWorker
