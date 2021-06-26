import { AppProps } from 'next/app';
import usePageView from '@/hooks/usePageView';
import { GlobalStyle } from '@/styles/globals'

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView()
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  )
}


export default MyApp
