import { Article } from '@/types';
import React from 'react'
import renderer from 'react-test-renderer'
import { ArticleCard } from '../Article';

const mockArticle: Article = {
  id: 'job-hunting-entry',
  publishedAt: '2021-04-21T08:07:07.339Z',
  title: '【テスト記事】テスト記事です',
  body: '<h2 id="h8d027c8ed3">テスト記事</h2>',
  category: {
    id: 'tech',
    name: 'Tech'
  }
}

test('ArticleCard', () => {
  const component = renderer.create(<ArticleCard article={mockArticle}/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})