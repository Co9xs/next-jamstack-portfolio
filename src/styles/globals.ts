import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
}
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Noto Sans JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a, a:visited {
  color: #0975e1;
}

#__next {
  min-height: 100%;
  height: 100vh;
}

* {
  box-sizing: border-box;
}
`
