import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { Pageview } from '../Pageview/Pageview'
import { getIssue } from '../../api/firebase';
import { LANGUAGES } from '../../models';
import { IssuesPage } from '../../pages';
// Styling functions -------------


// calculate window height based on the screen size, subtract the height of the nav bar (3 rem)
// This places the scroll bar at the bottom of the page
const windowHeight = window.screen.height - convertRemToPixels(3);


const style: CSSProperties = {
    height: windowHeight + 'px'
  }

function convertRemToPixels(rem: number) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// ------------------


interface IState {
    issue?: any; 
  }




export const Scrollview: FC = () => {

    //useEffect(() => {},[]);

    let articles = null; 
    const [issue, setArticles] =  useState <any>();
  
    if (issue == undefined ){
      getIssue(1, LANGUAGES.EN, (data) => {
        //console.log('current', data)
        // set state ...
        setArticles(data);
      });
    }
    else{
        articles = issue.articles;
    }

    let render = [];
    if (articles == null){
        render.push('<div>splash</div>')//splash screen
    } 
    else{
        render = [];

        articles.forEach(function (value: object){
            console.log(value);
            render.push(
                value
            );
        });
    }

    return (
        <div className="flex flex-row overflow-x-scroll overflow-y-hidden w-auto h-full scroll-snap" style={style}>
            
            {/*</div>/{render.map( (value: object) => <div><div>)}
            
            <Pageview article={{
            id: 1, 
            date: '11/20/2020', 
            image: 'image_url', 
            image_credit: 'image.src.com', 
            link: 'href', 
            headline: 'The Squirrel News app is under development', 
            provider: 'The Dev Team', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }}/>
            <Pageview article={{
            id: 2, 
            date: '11/20/2020', 
            image: 'image_url', 
            image_credit: 'image.src.com', 
            link: 'href', 
            headline: 'The Squirrel News app is under development', 
            provider: 'The Dev Team', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }}/>

            <Pageview article={{
            id: 3, 
            date: '11/20/2020', 
            image: 'image_url', 
            image_credit: 'image.src.com', 
            link: 'href', 
            headline: 'The Squirrel News app is under development', 
            provider: 'The Dev Team', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }}/>
            */}

        </div>
  )
}