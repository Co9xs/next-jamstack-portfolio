import Head from 'next/head';

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  favicon?: string
};

export const Meta: React.VFC<Props> = (props) => { 
  const { title, description, image, type, favicon, children } = props;
  return (
    <Head>
      <title>{title ? `${title} - fujishima.dev` : `Ryo Fujishima's Portfolio`}</title>
      <meta
        name="description"
        content={description ? `${description}` : "藤嶋稜のポートフォリオサイトです"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          image
          ? image
          : "/logo.png"
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta
        name="og:image"
        content={
          image
          ? image
          : "/logo.png"
        }
      />
      <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>${favicon}</text></svg>`}/>
      <link rel="icon alternate" type="image/png" href="https://twemoji.maxcdn.com/v/13.0.2/72x72/ae.png" />
      {children}
    </Head>
  )
}