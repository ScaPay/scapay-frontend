import Scapay from "../assets/Scapay.png"
import Button from "../components/button";
import Posiedon from "../assets/posiedon.jpg"

import React from 'react'

const CompletePayment = () => {
    return (
    <div>
        <div className="md:h-1/5 md:w-1/5 mx-auto">
            <img src={Scapay} alt="logo"/>
        </div>
        <div className="w-full max-w-screen-md mx-auto h-screen">
            <div className="flex flex-col rounded-2xl bg-white shadow-lg text-sm text-slate-700 px-20">
                <p className="text-3xl flex-row font-bold my-10 text-center">Complete payment</p>
                <div className="flex-row md:text-2xl sm:text-xl pb-10">
                    <img src={Posiedon} alt="logo" className="rounded-full inline-block h-1/4 w-1/4 border-2 border-slate-700 mr-10"/>
                    <span className="">Posiedon Greek</span>
                </div>
                <div className="grid grid-cols-1 divide-y">

                    <div></div>
                    <div className="flex-row text-lg my-5">
                        <span className="float-left">Price</span>
                        <span className="float-right">$300</span>
                    </div>

                    <div className="flex-row text-lg my-5">
                        <span className="float-left">Charges</span>
                        <span className="float-right">$3</span>
                    </div>

                </div>
                <div className="grid grid-cols-1 divide-y divide-black">
                    <div></div>
                    <div className="flex-row text-lg font-bold text-blue-900 my-5">
                        <span className="float-left">Total</span>
                        <span className="float-right">$303</span>
                    </div>
                </div>
                <div className="my-10">
                <Button styles="bg-primary text-white" to="/complete-payment">
                Pay
                </Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CompletePayment