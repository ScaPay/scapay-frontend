import React, { useState } from "react";
import Button from "../components/button";


const JoinUs = ({}) => {
return (
    <div className="items-center rounded-xl bg-white py-10 mt-20">

        <div className="bg-white md:px-16 px-6">
            <h1 className="text-primary md:text-5xl text-xl font-extrabold capitalize">Ready to Join Scapay?</h1>
            <p className="text-paracolor pt-10 font-lg ">Create a free account with Scapay and start spending your stable coins,</p>
            <p className="text-paracolor pt-2 font-lg mb-10">investing and swaping tokens and spending your money anyhow you want.</p>
          <div className="md:flex">
          <Button styles="bg-primary text-white" >
                Create a free account
            </Button>
            <div className="md:pl-10 pt-10 md:pt-0">
            <Button styles="bg-secondary2 text-primary" >
                Learn more
            </Button>
            </div>
          </div>
        </div>
        
       
    </div>
)

}

export default JoinUs;