import Twemoji from 'react-twemoji';
import styled from 'styled-components';
import { Category } from '../types';

type Props = {
  category: Category
}
export const CategoryMappedTwemoji: React.VFC<Props> = ({ category }) => {
    {
    switch (category.name) {
    case 'Tech':
        return (
          <CategoryMappedTwemojiBase>
            <Twemoji tag="span">💻</Twemoji>
          </CategoryMappedTwemojiBase>
        )
    case 'Poem':
        return (
          <CategoryMappedTwemojiBase>
            <Twemoji tag="span">💬</Twemoji>
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

