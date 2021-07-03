This is my portfolio site made by [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This application uses the Jamstack architecture by Nextjs, microCMS, Vercel.

## Getting Started

First, fork this repository and install packages.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see local development sample.

## Directory Structure
All application code is contained under `./src` directory.
./src<br>
├─ apis<br>
├─ builder<br>
├─ components<br>
├─ hooks<br>
├─ lib<br>
├─ pages<br>
├─ styles<br>
├─ types<br>
└─ utils<br>

### apis
Type definition file for aspida.
All content types via external APIs is defined here.

### builder
Update RSS of external platforms at build time and export to static files.

### components
UI components list of this application.

### hooks
Custom hooks isolated reusable logic.

### lib
Methods of API access for microCMS and Google Analitics Tags, and so on.

### pages
Pages of routing by nextjs contains custom _document.tsx, 404.tsx, _app.tsx.

### styles
Global CSS variables, or common styled-components and media queries.

### types
Type definitions for non-content obtained via external APIs.

### utils
General purpose functions, constants, etc.
