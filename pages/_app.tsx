import { GlobalStyle } from '../styles/globals';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { BasicLayout } from '../components/layouts/BasicLayout'
import { darkTheme, lightTheme } from '../styles/utils/theme';
import { createContext, useState } from 'react';
export const DarkModeContext = createContext(null);

function MyApp({ Component, pageProps }: AppProps) {
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
