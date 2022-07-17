import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import client from '@/lib/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
