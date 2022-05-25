import { useState } from "react";
import DropDown from "../components/dropdown";
import Scapay from "../assets/Scapay.png"
import Button from "../components/button";

const SignUp = () => {

    const textDivStyles = "text-slate-700 mt-4"
    const textSpanStyles = "p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold"
    const textInputStyles = "w-full rounded-xl h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2"

    const options = [
        { label: 'Nigeria', value: 'ng' },
        { label: 'United States', value: 'us' },
        { label: 'Algeria', value: 'dz' },
      ];
    
      const [value, setValue] = useState('us');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
  return (
    <div>
         <div className="md:h-1/5 md:w-1/5 mx-auto">
            <img src={Scapay} alt="logo"/>
        </div>
    <div className="w-full max-w-screen-md mx-auto h-screen">
        <div className="flex justify-center rounded-2xl bg-white shadow-lg text-sm text-slate-700"> 
            
            <form className="w-9/12">

            <p className="text-3xl font-bold my-10 text-center ">Let's get you started with <br/> your free Scapay Account</p>

            <div className={textDivStyles}>
            <span className={textSpanStyles}>Full name</span>
            <input type="text" id="fullname" className={textInputStyles} placeholder="Firstname Lastname" />
            </div>
            
            <div className={textDivStyles}>
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block  font-bold">Email</span>
            <input type="email" id="email" className={textInputStyles} placeholder="name@example.com" />
            </div>

            <div className={textDivStyles}>
            <span className={textSpanStyles}>Country/Region</span>
            <DropDown options={options} value={value} onChange={handleChange} />
            </div>

            <div className={textDivStyles}>
            <span className={textSpanStyles}>Password</span>
            <input type="password" id="password" className={textInputStyles} placeholder="Password" />
            </div>

            <div className={textDivStyles}>
            <span className={textSpanStyles}>Phone number</span>
            <input type="phone" id="phone" className={textInputStyles} placeholder="+" />
            </div>

            <div className="my-4 block">
            <span>
                Be sure to enter a phone number you can always access. It will be used to verify your identity any time 
                you sign on a new device or web browser. Messaging or data rates may apply.
            </span>
            </div>

            <div className="my-7">
                <span className="font-bold md:mr-10">Verify with:</span>

                <label className="">                
                <input type="radio" className="md:mr-2 h-4 w-4" name="contact" value="message"/>
                <span className="md:mr-10">Text message</span>
                </label>


                <label>
                <input type="radio" className="md:mr-2 h-4 w-4" name="contact" value="email"/>
                <span className="md:mr-10">Email</span>
                </label>
            </div>

            <div className="block">
            <label>
                <input type="checkbox" className="md:mr-2 h-4 w-4" name="acknowledgment" value=""/>
                <span>Send me marketing and promotional emails</span>
            </label>
            </div>


            <div className="mt-5">
                <input type="checkbox" className="md:mr-2 h-4 w-4" name="acknowledgment" value=""/>
                <span>I acknowledge that I have read and hereby accept the terms and conditions in Scapay's and its third  
                    <a href="" className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
                        &nbsp; party partner's, Terms of Use, Merchant Agreement and Privacy Policy.
                    </a>
                </span>
            </div>

            <div className="my-10">
            <Button styles="bg-primary text-white" to="/sign-up">
                Get Started
            </Button>
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default SignUp