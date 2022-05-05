import React, { useState } from "react";

const Section = ({title, children, img, span, orderText, orderImg, imgW}) => {
return (
    <div className="items-center py-10">
    
        <div className="md:flex justify-between items-center">
            <div className={` md:w-2/4 w-full  ${orderText}`}>
               <h1 className="text-secondary capitalize font-extrabold text-xl">{title} <span class="text-paracolor">{span}</span> </h1>
               <p className="font-sm text-md pt-4 text-paracolor leading-8 break-all ">{children}</p>
            </div>
            <div className={`${imgW} ${orderImg} pt-10 md:pt-0`}>
                <img className="object-fit h-80" src={img} alt="" />
            </div>
        </div>
        
       
    </div>
)

}

export default Section;