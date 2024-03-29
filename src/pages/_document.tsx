import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { GoogleAnalyticsScript } from "@/components/GoogleAnalyticsScript";
import { ServerStyleSheet } from 'styled-components';

type Props = {};
export default class MyDocument extends Document<Props> {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;
    
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          <GoogleAnalyticsScript/>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}