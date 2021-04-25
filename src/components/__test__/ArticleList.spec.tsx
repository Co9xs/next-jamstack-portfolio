import { Article } from '@/types';
import React from 'react'
import renderer from 'react-test-renderer'
import { ArticleList } from '../ArticleList';

const mockArticles: Article[] = [
  {
    id: 'job-hunting-entry',
    publishedAt: '2021-04-21T08:07:07.339Z',
    title: '【テスト記事】テスト記事です',
    body: '<h2 id="h8d027c8ed3">テスト記事</h2>',
    category: {
      id: 'tech',
      name: 'Tech'
    }
  },
  {
  id: 'react-reconciliation',
  publishedAt: '2021-04-21T08:07:07.339Z',
  title: '【テスト記事2】テスト記事2です',
  body: '<h2 id="h8d027c8ed3">テスト記事2</h2>',
  category: {
    id: 'poem',
    name: 'Poem'
  }
  }
]

test('ArticleCard', () => {
  const component = renderer.create(<ArticleList articles={mockArticles}/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})