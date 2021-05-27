import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  // colors
  --colors-navy: #202233;
  --colors-purple: #C594C5;
  --colors-yellow: #FAC863;

  // font-weights
  --font-weight-normal: 300;
  --font-weight-heading: 500;
  --font-weight-bold: 700;

  //sizes
  --spacing-0: 0px;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 16px;
  --spacing-4: 32px;
  --spacing-5: 64px;
  --spacing-6: 128px;
}

html,
body {
  // background: var(--colors-navy);
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
