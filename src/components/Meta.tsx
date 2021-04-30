import Head from 'next/head';

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
};

export const Meta: React.VFC<Props> = (props) => { 
  const { title, description, image, type, children } = props;
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
      {children}
    </Head>
  )
}