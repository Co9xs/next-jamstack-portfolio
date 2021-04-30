import { NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { BasicLayout, Meta, WorksList } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';
import { works } from '@/utils';

type Props = {}

const Works: NextPage<Props> = () => {
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
  <BasicLayout>
    <PageBase>
      <Meta
        title={'Works'}
        description={'Ryo Fujishima - Web Dev'}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">💻</Twemoji>主な制作物</SectionTitle>
          <WorksList works={ works }/>
        </ContentSectionInner>
      </ContentSection>
      </PageBase>
    </BasicLayout>
  )
}

export default Works
