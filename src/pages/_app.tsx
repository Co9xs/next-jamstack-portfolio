import { createContext, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { BasicLayout, SideBarLayout } from '@/components'
import { GlobalStyle, darkTheme, lightTheme } from '@/styles';

export const DarkModeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }
  console.log(pageProps.layout)
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
                // <SideBarLayout categories={categories} poplarArticles={poplarArticles}>
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
