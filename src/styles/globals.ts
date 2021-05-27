import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  // colors
  --colors-navy: #202233;
  --colors-purple: #C594C5;
  --colors-yellow: #FAC863;
  --colors-white: #E3E3E3;
  --colors-gray: #A6ACC9;
  --colors-dark-gray: #616269;
  --colors-black: #161823;
  --colors-red: #FF6059;
  --colors-light-green: #29CA40;
  --colors-green: #99C794;
  --colors-blue-green: #5FB3B3;
  --colors-blue: #60A5FA;

  // font-weights
  --font-weight-normal: 300;
  --font-weight-heading: 500;
  --font-weight-bold: 700;

  // font-sizes
  --font-size-min: 14px;
  --font-size-1: 16px;
  --font-size-2: 18px;
  --font-size-3: 20px;
  --font-size-4: 22px;
  --font-size-5: 24px;
  --font-size-6: 26px;
  --font-size-7: 28px;
  --font-size-8: 30px;
  --font-size-9: 32px;
  --font-size-10: 34px;

  //sizes
  --spacing-0: 0px;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 16px;
  --spacing-4: 32px;
  --spacing-5: 64px;
  --spacing-6: 128px;

  // border
  --border-size-1: 1px;
  --border-size-2: 2px;
  --border-size-3: 3px;

  // width
  --width-1-colum: 800px;
  --width-2-colums-base: 1160px;
  --width-2-colums-main: 820px;
  --width-2-colums-sub: 260px;

  // animation
  --animation-duration: 0.4s;
  --animation-timing: ease;
}

html,
body {
  background: var(--colors-navy);
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
