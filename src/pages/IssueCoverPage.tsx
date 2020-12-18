import React, { CSSProperties } from "react";
import { Plugins } from '@capacitor/core';
// set the width of the page to the width of the screen


const pageWidth: number = window.screen.width;
const style: CSSProperties = {
    width: pageWidth + 'px',
  }

  const {Browser} = Plugins; 



interface Props{
    headline: string;
    image: string; 
    date: string;
    imageCredit: string;
}




export const IssueCoverPage: React.FC<Props> = ({headline, image, date, imageCredit}) => {

    return(
        <div className="flex flex-col h-full snap-child" style={style} >

            {/* Article information div */}

            <div className="_article_info h-auto  mb-4 p-0" style={style}>
                <div className="_article_headline text-lg font-medium mx-3 mt-2 ">{headline}</div>
                <div className="_article_provider ml-3 my-2">{imageCredit}</div>
                <div className="_article_description text-sm ml-3 text-gray-700">ISSUE: {date}</div>   
            </div> 
        
            {/* Image container div */}
            <div className="relative h-full w-auto">            
                
              <div className="_image_container h-full m-0 p-0" style={style}>
                  <img className=" h-full object-cover p-0 m-0 overflow-hidden" src={image} alt="article" style={style}/>
              </div>
              
              <div className="_date absolute ml-1 bottom-0 left-0 text-left text-white"></div>
              <div className="_image_credit absolute mr-1 bottom-0 right-0 text-right text-white">{imageCredit}</div>
          
            </div>


        </div>
    );

}
