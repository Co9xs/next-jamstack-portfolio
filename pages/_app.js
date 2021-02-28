import '../styles/globals.css'
import { BasicLayout } from '../layouts/BasicLayout'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

export default MyApp
