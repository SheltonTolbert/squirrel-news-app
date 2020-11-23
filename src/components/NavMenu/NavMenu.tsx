import React from "react";

// SVG imports 
import { ReactComponent as SqIconLogo } from '../../assets/icon/sn-logo.svg'; // Wrap the svg logo in a component container


// TODO: Animate the menui sliding in from the side




interface Props{
    // Prop declariation in the interface
    // variable_name: type
}

const style: string = "_menu_item w-full h-16 text-2xl text-center align-bottom"

export const NavMenu: React.FC<Props> = () => {


    return(
        <div>
            
            {/* Nav-Menu */} 
            <div className="_menu flex flex-col absolute h-screen w-11/12 bg-white shadow z-20">
                <div className="_spacer w-full h-40">
                    <SqIconLogo className="_icon_logo h-32 w-auto m-auto"/>
                </div>

                <div className={style}>
                    German Version
                </div>

                <div className={style}>
                    All Issues
                </div>

                <div className={style}>
                    Favourites
                </div>
  
                <div className={style}>
                    About Us
                </div>

                <div className={style}>
                    Support Us
                </div>

                <div className={style}>
                    Imprint
                </div>

                <div className={style}>
                    Privacy Policy
                </div>

            </div>
           
        </div>
    )

}
