import React, { CSSProperties, FC, useEffect, useState  } from 'react';
import { Article, Issue, LANGUAGES } from '../models';
import { IssueTeaser } from '../widgets/IssueTeaser'
import { getIssue , getArchive} from '../api/firebase';






export const FavoritesPage: FC = () => {
    
  // The navBar is 3rem in height
  const windowHeight = window.screen.height - convertRemToPixels(3);
  function convertRemToPixels(rem: number) {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  const style: CSSProperties = {
      height: windowHeight + 'px'
    }


    const [issues, setIssues] = useState<(any)> ( {data : [{ 
        image: "", 
        headline: "", 
        title: "", 
        teaser: "", 
        imageCredit: "",
        language: LANGUAGES.EN,
        publishedAt: new Date(),
        issueURL: "",
        showDonation: false,
        donationTitle: "",
        donationText: "",
        donationUrl: "",
        articles: []
}] });
  
     useEffect(() => {
        getArchive( LANGUAGES.EN, null, 10, (data) => {
            setIssues({data});
        });
      }, []);
    
      
    
    return(
        <div className='_favourites overflow-y-scroll' style={style}>
        
        { issues.data.map((item: any, idx: any) =>
          <IssueTeaser key={idx}  date={item.title} headline={item.headline} image={item.image} link={item.issueURL} issueNum={idx}/>
        )}

        
        
        </div>
    )
}