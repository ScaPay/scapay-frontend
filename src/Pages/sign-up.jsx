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
    <div className="justify-center rounded-xl bg-white shadow-md text-sm max-w-screen-md mx-auto md:flex">
        <div className=""> 
            <form>

            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block">Full name</span>
            <input type="text" id="fullname" className="rounded-xl h-10 placeholde-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="Firstname Lastname" />
            </div>
            
            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700">Email</span>
            <input type="email" id="email" className="rounded-xl w-100 h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="name@example.com" />
            </div>

            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700">Country/Region</span>
            <DropDown options={options} value={value} onChange={handleChange} />
            </div>

            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700">Password</span>
            <input type="password" id="password" className="rounded-xl w-100 h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="Password" />
            </div>

            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700">Phone number</span>
            <input type="phone" id="phone" className="rounded-xl w-100 h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="+" />
            </div>

        </form>
        </div>
    </div>
  )
}

export default SignUp