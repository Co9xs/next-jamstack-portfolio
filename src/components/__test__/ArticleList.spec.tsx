import React from 'react'
import { Article } from '@/types';
import renderer,  { act } from 'react-test-renderer'
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

jest.mock("next/link", () => {
  return ({children}) => {
    return children;
  }
});

test('ArticleList', () => {
  let component: renderer.ReactTestRenderer
  act(() => {
    component = renderer.create(<ArticleList articles={mockArticles} />)
  })
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})