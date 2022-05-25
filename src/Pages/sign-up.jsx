import { useState } from "react";
import DropDown from "../components/dropdown";

const SignUp = () => {

    const options = [
        { label: 'Fruit', value: 'fruit' },
        { label: 'Vegetable', value: 'vegetable' },
        { label: 'Meat', value: 'meat' },
      ];
    
      const [value, setValue] = useState('fruit');
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
  return (
    <div className="rounded-xl p-6 bg-white shadow-md text-sm max-w-screen-md mx-auto md:flex">
        <div className=""> 
            <form>

            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block">Full name</span>
            <input type="text" id="fullname" className="rounded-xl w-100 h-10 placeholde-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="Firstname Lastname" />
            </div>
            
            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700">Email</span>
            <input type="email" id="email" className="rounded-xl w-100 h-10 placeholder-text-slate-400 pl-[14px] border-zinc-600 border-2" placeholder="name@example.com" />
            </div>

            <div className="text-slate-700">
            <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block text-slate-700">Country/Region</span>
            <DropDown options={options} value={value} onChange={handleChange} />
            </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp