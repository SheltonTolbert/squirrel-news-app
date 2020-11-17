import React from "react";

// Imports for testing
import headline from "../../assets/headline.jpg";

interface Article{
    id: number;
    date: string;
    image: string;
    image_credit: string;
    link: string;
    headline: string;
    provider: string;
    description: string;
}

interface Props{
    // Prop declariation in the interface
    // variable_name: type


    /* This component should take in an article object with the following attributes; 
        Article
        {
            id: 
            date: 
            article image: 
            article link: 
            article headline: 
            article provider: 
            article description: 
        }
    */

    article: Article

}

export const Pageview: React.FC<Props> = ({article}) => {

    return(
        <div className="_image_container flex flex-col w-full h-full">
            {/* Image container div */}
            <div className="relative">            
                
                <div className="_image_container h-screen/2 w-full m-0 p-0" >
                    <img className="w-full h-screen/2 object-cover p-0 m-0 overflow-hidden" src={headline} alt="article"/>
                </div>
                
                <div className="_date absolute ml-l bottom-0 left-0 text-left text-white">{article.date}</div>
                <div className="_image_credit absolute mr-1 bottom-0 right-0 text-right text-white">{article.image_credit}</div>
            
            </div>

            {/* Article information div */}

            <div className="_article_info h-auto w-full m-0 p-0">
                <div className="_article_headline text-lg font-medium ml-3 mt-2 ">{article.headline}</div>
                <div className="_article_provider ml-3 my-2">{article.provider}</div>
                <div className="_article_description text-sm ml-3">{article.description}</div>   
            </div> 
        
        </div>
    );

}
