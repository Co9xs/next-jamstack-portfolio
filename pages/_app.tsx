import { createContext, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { BasicLayout } from '@/components'
import { GlobalStyle, darkTheme, lightTheme } from '@/styles';

export const DarkModeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </DarkModeContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
