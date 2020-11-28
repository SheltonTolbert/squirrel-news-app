import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { Pageview } from '../Pageview/Pageview'
import { getIssue } from '../../api/firebase';
import { Article, Donate, LANGUAGES, } from '../../models';
import { DonationPage } from '../DonationPage/DonationPage'
import { RouteComponentProps } from 'react-router-dom';

// calculate window height based on the screen size, subtract the height of the nav bar (3 rem)
// This places the scroll bar at the bottom of the page
const windowHeight = window.screen.height - convertRemToPixels(3);


const style: CSSProperties = {
  height: windowHeight + 'px'
}

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}











interface Props extends RouteComponentProps<{id: string}> {}


export const Scrollview: FC<Props> = ({ match }) => {

  const [issue, setIssue] = useState<{ donate: { title: string, text: string, url: string }, date: string, articles: Article[] }>({ donate: { title: "", text: "", url: "" }, date: "", articles: [] });
  
  useEffect(() => {
    getIssue( Number(match.params.id + 1) , LANGUAGES.EN, (data) => {
      setIssue({ donate: { title: data.donationTitle, text: data.donationText, url: data.donationUrl }, date: data.title, articles: data.articles });
    });
  }, []);

console.log(issue)


  return (
    <div className="flex flex-row overflow-x-scroll overflow-y-hidden w-auto h-full scroll-snap" style={style}>


      { issue.articles.map((item, idx) =>
        <Pageview key={idx} article={{
          id: item.position,
          date: issue.date,
          image: item.imageUrl,
          image_credit: item.credit,
          link: item.url,
          headline: item.title,
          provider: item.source,
          description: item.teaser
        }} />
      )}

      <DonationPage info={{
        id: 1000,
        headline: issue.donate.title,
        body: issue.donate.text
      }} />

    </div>
  );
}