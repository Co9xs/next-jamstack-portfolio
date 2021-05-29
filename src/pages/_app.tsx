import { createContext } from 'react';
import { AppProps } from 'next/app';
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { GlobalStyle } from '@/styles/globals'
import usePageView from '@/hooks/usePageView';

export const DarkModeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView()
  return (
    <>
      <GlobalStyle/>
        {(() => {
          switch (pageProps.layout) {
            case 'Basic':
              return (
                <BasicLayout>
                  <Component {...pageProps}/>
                </BasicLayout>
              )
            case 'SideBar':
              return (
                // <SideBarLayout categories={categories} popularArticles={popularArticles}>
                  <Component {...pageProps}/>
                // </SideBarLayout>
              )
            default:
              return (
                <Component {...pageProps}/>
              )
          }
        })()}
    </>
  )
}


export default MyApp
