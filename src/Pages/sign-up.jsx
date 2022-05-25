import { useState } from "react";
import DropDown from "../components/dropdown";

const SignUp = () => {

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
    <div className="w-full max-w-screen-md mx-auto h-screen">

        <div className="flex justify-center rounded-xl bg-white shadow-md text-sm text-slate-700"> 
            <form className="w-9/12">
            <div className="text-slate-700 mt-4">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold">Full name</span>
            <input type="text" id="fullname" className="w-full rounded-xl h-10 placeholde-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="Firstname Lastname" />
            </div>
            
            <div className="text-slate-700 mt-4">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block  font-bold">Email</span>
            <input type="email" id="email" className="w-full rounded-xl h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="name@example.com" />
            </div>

            <div className="text-slate-700 mt-4">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold">Country/Region</span>
            <DropDown options={options} value={value} onChange={handleChange} />
            </div>

            <div className="text-slate-700 mt-4">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold">Password</span>
            <input type="password" id="password" className="w-full rounded-xl h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="Password" />
            </div>

            <div className="text-slate-700 mt-4">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block font-bold">Phone number</span>
            <input type="phone" id="phone" className="w-full rounded-xl h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="+" />
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
                <input type="radio" className="md:mr-2" name="contact" value="message"/>
                <span className="md:mr-10">Text message</span>
                </label>


                <label>
                <input type="radio" className="md:mr-2" name="contact" value="email"/>
                <span className="md:mr-10">Email</span>
                </label>
                
            </div>
            

        </form>
        </div>
    </div>
  )
}

export default SignUp