import { Link } from "react-router-dom";

const SignIn = () => {

    return ( 
        <section className="bg-gray-200 min-h-[90vh] flex pt-[3rem] space-y-5">
            <div className="w-[95%] max-w-lg mx-auto space-y-5">
                <h1 className="text-center font-bold text-2xl"> Sign In </h1>
                <form action="/" method="post"  className=" space-y-5">
                    <input type="email" id="email" placeholder="Email" className="shadow-md py-3 px-4 rounded-lg w-full focus:outline-transparent focus:shadow-xl"/>
                    <input type="password" id="password" placeholder="Password" className="shadow-md py-3 px-4 rounded-lg w-full focus:outline-transparent focus:shadow-xl"/>
                    <button type="submit" className="disabled:opacity-80 w-full text-center py-3 bg-slate-700 text-slate-100 rounded-lg text-base uppercase hover:bg-opacity-95 transition-all duration-300 "> Sign Up </button>
                    <button type="submit" className="disabled:opacity-80 w-full text-center py-3 bg-red-700 text-slate-100 rounded-lg text-base uppercase hover:bg-opacity-95 transition-all duration-300 "> Continue with google </button>
                </form>
                <div className="flex gap-3">
                    <p className="text-slate-700 font-semibold hover:opacity-80 transition-all duration-200">Don't Have an account? </p>
                    <Link to="/sign-up" className="text-blue-700 font-semibold hover:opacity-80 transition-all duration-200">Sign Up</Link>
                </div>

            </div>
        </section>
     );
}
 
export default SignIn;