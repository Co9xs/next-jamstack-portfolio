import {useState, useEffect} from 'react'

type H2Item = {
  id: string,
  title: string,
  items: H3Item[]
}

type H3Item = Omit<H2Item, 'items'>

const getNestedHeadings = (headingElements: HTMLHeadingElement[]): H2Item[] => {
  const nestedHeadings: H2Item[] = []
  headingElements.forEach(heading => {
    const { innerText: title, id } = heading

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

export const useHeadingsData = (articleBody: string) => {
  const [nestedHeadings, setNestedHeadings] = useState<H2Item[]>([]);

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