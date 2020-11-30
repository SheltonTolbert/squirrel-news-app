import React, { FC } from 'react';
import logo from '../assets/squirrel-donate.jpg';





export const AboutUsPage: FC = () => {
    
    
    
      
    
    return(
        <div className="flex flex-col h-full w-screen snap-child">
            {/* <div className="relative"> */}
            <div className="_logo_container w-full h-auto">
                <img className=" h-48 w-48 mt-12 m-auto object-cover p-0 overflow-hidden rounded-full" src={logo} alt='donate' ></img>
            </div>
            
            <div className="_support_us w-10/12 h-auto mx-auto mt-24 mb-4 text-2xl ">About us</div>
            <div className="_support_us w-10/12 h-auto mx-auto text-lg">Squirrel News is a project dedicated to changing perspectives 
                through solutions-oriented journalism. <br/><br/>Within the framework of a small, non-profit association, we shine a light 
                on the news that exposes us to original solutions, approaches and ideas. Our aim is to offer counterbalance and respite 
                from the negativity of mainstream media, and the clickbait, doomsday and profit-driven journalism that often comes with it.
                <br/><br/>Of course, this means our newsletters, app and website are 100% free of charge. We strive to make our services 
                accessible to as many people as possible, and keep them free of advertisements and any corporate agenda.
            </div>
            
            <div className="_support_us w-10/12 h-auto mx-auto my-4 text-2xl">Why a squirrel?</div>
            <div className="_support_us w-10/12 h-auto mx-auto text-lg">Like a squirrel that handpicks the most nourishing nuts, we will 
            only be selecting the most productive and relevant news, which won’t have lost significance within a week. The result in each 
            issue will be an organic and sustainable selection by human editors – no algorithms – helping to make sense of the world, 
            without denying its challenges.
            <br/><br/>
            In times of relentless negativity, information overload and subversive echo chambers, we rely on carefully curated selections 
            that stem from no other agenda than drawing attention to the news we find most meaningful.
            </div>
            
            <div className="_support_us w-10/12 h-auto mx-auto my-4  text-2xl">Who are we?</div>
            <div className="_support_us w-10/12 h-auto mx-auto text-lg">We’re a fairly international team of volunteers who have made our 
            homes in Berlin. Our goal is for Squirrel News to grow and curate constructive news for the foreseeable future, reaching 
            increasingly diverse audiences and covering more far-reaching subjects.
            <br/><br/>
            In order to do this, we’re going to need your support. If every reader donates the cost of a cup of coffee (or two) each 
            month, then the future of Squirrel News is secure. We can then continue our passion for finding the most worthwhile news stories 
            to help brighten your day.
            </div>

            <div className="_support_us w-10/12 h-auto mx-auto my-4  text-2xl">Our Association</div>
            <div className="_support_us w-10/12 h-auto mx-auto mb-12 text-lg ">Squirrel News is run 100% by the non-profit organisation Constructive News e. V., which we founded in October 2019 in order to provide exposure for innovative, sustainable solutions concerning a variety of social challenges.

Our association has its headquarters in Berlin, is recognised by the tax office as a non-profit organisation, and is entered in the register of associations at the Charlottenburg district court under the number VR 37904 B. All donations to Squirrel News are managed by Constructive News e.V. and are tax deductible within Germany.
            </div>
            

            {/* </div> */}
        </div>
    )
}