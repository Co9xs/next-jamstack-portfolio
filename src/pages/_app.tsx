import { createContext, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { darkTheme, lightTheme } from '@/styles/utils/theme';
import { GlobalStyle } from '@/styles/globals'
import usePageView from '@/hooks/usePageView';

export const DarkModeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }
  // usePageView()
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
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
      </DarkModeContext.Provider>
    </ThemeProvider>
  )
}


export default MyApp
