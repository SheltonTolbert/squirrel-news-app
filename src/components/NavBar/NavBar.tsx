import React, { CSSProperties, useState, useEffect } from "react";
import {NavMenu} from "../NavMenu/NavMenu";

// SVG imports 
import { ReactComponent as Logo } from '../../assets/icon/sn-logo-name-black.svg'; 
import { ReactComponent as BurgerMenu } from '../../assets/icon/burger-menu.svg';
//import { ReactComponent as HeartFull } from '../../assets/icon/heart.svg';
import { ReactComponent as HeartEmpty } from '../../assets/icon/heart-empty.svg';
import { ReactComponent as PaperPlane } from '../../assets/icon/paper-plane.svg';

var menu = false;

interface Props{
    // Prop declariation in the interface
    // variable_name: type
    navTransparent: boolean
}



export const NavBar: React.FC<Props> = ({navTransparent}) => {

    const [style, setStyle] = useState<CSSProperties>({display: 'none'});
    const [navStyle, setNavStyle] = useState<CSSProperties>({backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.35),rgba(0,0,0,0))"});
    const [svgColor, setSvgColor] = useState<string>("white");

    useEffect(() =>{
        if (navTransparent)
        {
            setNavStyle({});
            setSvgColor("black");
        }
        else 
        {
            setNavStyle({backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.35),rgba(0,0,0,0))"});
            setSvgColor("white");
        }
    },[navTransparent]);
    
    function toggleMenu(){
        menu = !menu;
        if (menu){        
            setStyle({}); 
        }
        else{
            setStyle({display: 'none'});
        }
    }
    

    return(
        <div>
            
            {/* Nav-Menu */} 
            <div style={style}>
            <NavMenu/>
            <div className="_menu_transparent absolute h-screen w-full semi z-20 " onClick={toggleMenu}></div>
            </div>
            
            <div className="_container absolute flex flex-row w-full h-16 z-10" style={navStyle}>

                {/* Logo div */} 
                <div className="w-1/2 h-full">
                    <Logo className={"_squirrel_news_logo h-12 w-auto mt-auto mb-auto ml-1 mr-auto p-0 fill-current svg-col-" + svgColor}  />
                </div>
                {/* Spacer div 
                    <div className="_spacer w-1/3 p-0 m-0"/> 
                */ } 

                {/* Menu div */}
                <div className="w-1/2 flex flex-row-reverse ml-auto mt-0">
                    <BurgerMenu className="_burger_menu h-12 w-auto mr-1 ml-0 mt-auto mb-auto p-0" fill={svgColor} onClick={toggleMenu}/>
                    
                    {/*
                    
                    <HeartEmpty className="_favorite_button stroke-current stroke-1 h-8 w-auto mr-1 ml-0 mt-auto mb-auto p-0 " />
                    <PaperPlane className="_share_button h-10 w-auto mr-1 ml-0 mt-auto mb-auto p-0" />
                    
                    */}

                </div>
            </div>

            
        </div>
    )

}
