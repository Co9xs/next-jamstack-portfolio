import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta, WorksList } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, SectionTitleText } from '@/styles';
import { works } from '@/utils';
import { Layout } from '@/types';

type Props = {
  layout: Layout
}

const Works: NextPage<Props> = () => {
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <PageBase>
      <Meta
        title={'Works'}
        description={'Ryo Fujishima - Web Dev'}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'}>
        <ContentSectionInner>
          <SectionTitle>
            <Twemoji tag="div">💻</Twemoji>
            <SectionTitleText>主な制作物</SectionTitleText>
          </SectionTitle>
          <WorksList works={ works }/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props>  = async () => {
  return {
    props: {
      layout: 'Basic'
    }
  }
}

export default Works
