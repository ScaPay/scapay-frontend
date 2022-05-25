import Scapay from "../assets/Scapay.png"
import Button from "../components/button";
import { textDivStyles, textSpanStyles, textInputStyles } from "./sign-up"


const SignIn = () => {

    return (
        <div>
         <div className="md:h-1/5 md:w-1/5 mx-auto">
            <img src={Scapay} alt="logo"/>
        </div>
        <div className="w-full max-w-screen-md mx-auto h-screen">
        <div className="flex justify-center rounded-2xl bg-white shadow-lg text-sm text-slate-700"> 
        
            <form className="w-9/12">

                <p className="text-3xl font-bold my-10 text-center ">Sign in to your dashboard</p>

                <div className={textDivStyles}>
                <span className="p-2 after:content-['*'] after:ml-0.5 after:text-red-500 block  font-bold">Email</span>
                <input type="email" id="email" className={textInputStyles} placeholder="name@example.com" />
                </div>

                <div className={textDivStyles}>
                <span className={textSpanStyles}>Password</span>
                <input type="password" id="password" className={textInputStyles} placeholder="Password" />
                </div>

                <div className="my-10">
                <Button styles="bg-primary text-white" to="/sign-up">
                    Sign in to your dashboard
                </Button>
                </div>
            </form>

        </div>
        </div>
        </div>
    )
  }
  
  export default SignIn