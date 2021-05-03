import Twemoji from 'react-twemoji';
import styled from 'styled-components';
import { CategoryItem } from '@/apis/categories';

type Props = {
  category: CategoryItem
}
export const CategoryMappedTwemoji: React.VFC<Props> = ({ category }) => {
    {
    switch (category.id) {
    case 'tech':
        return (
          <CategoryMappedTwemojiBase>
            <Twemoji tag="div">💻</Twemoji>
          </CategoryMappedTwemojiBase>
        )
    case 'poem':
        return (
          <CategoryMappedTwemojiBase>
            <Twemoji tag="span">💬</Twemoji>
          </CategoryMappedTwemojiBase>
        )
    case 'design':
        return (
          <CategoryMappedTwemojiBase>
            <Twemoji tag="span">🎨</Twemoji>
          </CategoryMappedTwemojiBase>
        )
    default:
        return (
          <CategoryMappedTwemojiBase>
            <Twemoji tag="span">🐱</Twemoji>
          </CategoryMappedTwemojiBase>
        )
      }
    }
}

const CategoryMappedTwemojiBase = styled.span`
  span {
    text-align:center;
    display: inline-block;
    img {
      height: 28px;
      vertical-align: bottom;
      margin-right: .5rem;
    }
  }
`

