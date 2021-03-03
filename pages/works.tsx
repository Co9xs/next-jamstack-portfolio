import Twemoji from 'react-twemoji';
import { Meta } from '../components/common/Meta';
import { WorksList } from '../components/WorksList';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../styles/utils/common';
import { works } from '../utils';

export default function Works() {
  return (
    <PageBase>
      <Meta
        title={'Works'}
        description={'主な制作物'}
      />
      <ContentSection style={{ background: '#F1F5F9' }}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">💻</Twemoji>主な制作物</SectionTitle>
          <WorksList works={ works }/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}
