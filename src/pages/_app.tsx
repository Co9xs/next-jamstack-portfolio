import { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/globals'
import usePageView from '@/hooks/usePageView';

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
