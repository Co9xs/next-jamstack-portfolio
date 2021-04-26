import React from 'react'
import { Category } from '@/types';
import renderer,  { act } from 'react-test-renderer'
import { CategoryList } from '../CategoryList';

const mockCategories: Category[] = [
  {
    id: 'tech',
    name: 'Tech'
  },
  {
    id: 'poem',
    name: 'Poem'
  }
]

jest.mock("next/link", () => {
  return ({children}) => {
    return children;
  }
});

jest.mock("react-twemoji", () => {
  return ({children}) => {
    return children;
  }
});

test('CategoryList', () => {
  let component: renderer.ReactTestRenderer
  act(() => {
    component = renderer.create(<CategoryList categories={mockCategories} />)
  })
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})