import {existsGaId, GA_ID} from '@/lib'

type Props = {
};

export const GoogleAnalyticsScript: React.VFC<Props> = (props) => { 
  return existsGaId ? (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });`,
        }}
      />
    </>
  ) : null
}