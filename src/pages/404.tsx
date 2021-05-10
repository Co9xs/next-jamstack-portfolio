import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText, SectionTitleText } from '@/styles';
import { Layout } from '@/types';

type Props = {
  layout: Layout
}

const Page404: NextPage<Props> = () => {
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI('404 - Page Not Found')},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  return (
    <PageBase>
      <Meta
        title={'404 Not Found'}
        description={'404 Not Found'}
        image={encodeURI(defaultOgp)}
      />
      <ContentSection>
        <ContentSectionInner>
          <SectionTitle>
            <Twemoji tag="div">🙇‍♂️</Twemoji>
            <SectionTitleText>404 - Not Found</SectionTitleText>
          </SectionTitle>
          <PlainText>Sorry, The page you are looking for was not found.</PlainText>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  );
}

export const getStaticProps: GetStaticProps<Props>  = async () => {
  return {
    props: {
      layout: 'Basic'
    }
  }
}

export default Page404