import React, { CSSProperties } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../assets/icon/facebook.svg';
import { ReactComponent as Instagram } from '../assets/icon/instagram.svg';
import { ReactComponent as Twitter } from '../assets/icon/twitter.svg';

// set the width of the page to the width of the screen
const pageWidth: number = window.screen.width;
var style: CSSProperties = {
    width: pageWidth + 'px',
  }



export const LastPage: React.FC = () => {

    
    return(
        <div className="h-full w-screen snap-child" style={style}>
            <div className="flex flex-col mt-32 space-y-5 text-center font-normal text-2xl" style={style}>
                <Link to="/archive">All Issues</Link>
                <Link to="/archive">Previous Issue</Link>
                <Link to="/archive">Favourites</Link>
                <div className="_social_links flex flex-row mx-auto space-x-2">
                    <a href="https://www.facebook.com/SquirrelNewsNetwork/" target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>
                    <a href="https://mobile.twitter.com/squirrelnews_en/" target="_blank" rel="noopener noreferrer">
                        <Twitter/>
                    </a>
                    <a href="https://www.instagram.com/squirrelnews/" target="_blank" rel="noopener noreferrer">
                        <Instagram/>
                    </a>
                </div>
            </div>
        </div>
    );

}
