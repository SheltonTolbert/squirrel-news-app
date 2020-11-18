import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { Pageview } from '../Pageview/Pageview'
import { getIssue } from '../../api/firebase';
import { Article, LANGUAGES, } from '../../models';

// calculate window height based on the screen size, subtract the height of the nav bar (3 rem)
// This places the scroll bar at the bottom of the page
const windowHeight = window.screen.height - convertRemToPixels(3);


const style: CSSProperties = {
  height: windowHeight + 'px'
}

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const Scrollview: FC<{}> = () => {

  // let articles = null; 
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getIssue(1, LANGUAGES.EN, (data) => {
      console.log('current', data)
      // set state ...
      setArticles(data.articles);

    });

  }, []);

  return (
    <div className="flex flex-row overflow-x-scroll overflow-y-hidden w-auto h-full scroll-snap" style={style}>

      { articles.map(item =>
        <Pageview key={item.articleId} article={{
          id: item.position,
          date: `CONVERT DATE HERE`,
          image: item.imageUrl,
          image_credit: item.credit,
          link: item.url,
          headline: item.title,
          provider: item.source,
          description: item.teaser
        }} />
      )}

    </div>
  );
}