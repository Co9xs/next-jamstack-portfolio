import { useState, useEffect } from 'react'

export type ParentHeadingItem = {
  id: string,
  title: string,
  items: ChildHeadingItem[]
}

type ChildHeadingItem = Omit<ParentHeadingItem, 'items'>

const getNestedHeadings = (headingElements: HTMLHeadingElement[]): ParentHeadingItem[] => {
  const nestedHeadings: ParentHeadingItem[] = []
  headingElements.forEach(heading => {
    const { innerText: title, id } = heading

    // h2の時は配列に追加、h3の時は直近のh2のitemsの配列に追加
    if (heading.nodeName === "H2") {
      nestedHeadings.push({id, title, items: []})
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title
      })
    }
  })
  return nestedHeadings
}

// parse前のHTMLストリングをinputで受け取って、nestされた見出しのリストを返す
export const useHeadingsData = (articleBody: string) => {
  const [nestedHeadings, setNestedHeadings] = useState<ParentHeadingItem[]>([]);

  useEffect(() => {
    const parser = new DOMParser()
    const htmlBody = parser.parseFromString(articleBody, 'text/html')
    const headingElements = Array.from(
      htmlBody.querySelectorAll<HTMLHeadingElement>("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, [articleBody]);

  return { nestedHeadings };
};