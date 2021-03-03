import '../styles/globals.css'
import { AppProps } from 'next/app';
import { BasicLayout } from '../components/layouts/BasicLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
