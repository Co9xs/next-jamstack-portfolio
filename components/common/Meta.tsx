import React from 'react';
import Head from 'next/head';

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image_src?: string;
  type?: string;
};

export const Meta: React.FC<Props> = (props) => { 
  const { title, description, image_src, type, children } = props;
  return (
    <Head>
      <title>{title ? `${title} - fujishima.dev` : `fujishima.dev`}</title>
      <meta
        name="description"
        content={description ? `${description}` : "藤嶋稜のポートフォリオサイトです"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          image_src
          ? image_src
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
          image_src
          ? image_src
          : "/logo.png"
        }
      />
      {children}
    </Head>
  )
}