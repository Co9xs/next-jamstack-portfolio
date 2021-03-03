import Twemoji from 'react-twemoji';
import { Meta } from '../components/common/Meta';
import { WorksList } from '../components/WorksList';
import { PageBase, ContentSection, ContentSectionInner, Heading2 } from '../styles/utils/common';


export default function Works() {
  return (
    <PageBase>
      <Meta
        title={'Works'}
        description={'主な制作物'}
      />
      <ContentSection style={{ background: '#F1F5F9' }}>
        <ContentSectionInner>
          <Heading2><Twemoji tag="span">💻</Twemoji>主な制作物</Heading2>
          <WorksList></WorksList>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}
