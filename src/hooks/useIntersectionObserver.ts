import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

export const useIntersectionObserver = (setActiveId: Dispatch<SetStateAction<string>>): void => {
  const headingElementsRef = useRef({});

  useEffect(() => {
    // 引数headingsはIntersectionObserverEntryのインスタンスの配列
    // 見出しのidをキーに値を引数のインスタンスにしたmapを作成してRefに保存しておく
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);
      
      // 現在可視状態の見出しのリストを作成
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      // idから配列中のindexを返す関数
      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id);
      
      // 可視状態の見出しの中で、一番先頭にあるものをactiveとみなす
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id) ? 1 : -1
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    }
    
    const observer = new IntersectionObserver(callback, {
      rootMargin: '-110px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};