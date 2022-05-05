import React, { useState } from "react";

const Solution = ({text, icon}) => {
return (
    <div className="items-center lg:w-3/4 w-full pb-10 md:pb-0">
        <p className="text-center"> <i class={` fa-3x items-center text-primary ${icon}`} > </i> </p>
        <p className="pt-3 font-medium text-lg text-center">{text}</p>
    </div>
)

}

export default Solution;