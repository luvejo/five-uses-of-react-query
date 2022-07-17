import { Text } from '@mantine/core'
import { useQuery } from 'react-query'

const getGPSCoordinates = async () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (error) => {
        reject(error)
      },
    )
  })

type Props = {}

function GPS({}: Props) {
  const { data } = useQuery('gps', getGPSCoordinates)

  return <Text>Location: {JSON.stringify(data)}</Text>
}

export default GPS
