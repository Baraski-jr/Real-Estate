import { Link } from "react-router-dom";

const Header = () => {

    // const navLinks = [
    //     {
    //         "label" : "Home",
    //         "ref": "/"
    //     },
    //     {
    //         "label" : "About",
    //         "ref": "/about"
    //     },
    //     {
    //         "label" : "Profile",
    //         "ref": "/profile"
    //     },
    //     {
    //         "label" : "Sign In",
    //         "ref": "/sign-in"
    //     },
    //     {
    //         "label" : "Sign Up",
    //         "ref": "/sign-up"
    //     },
    //     {
    //         "label" : "No Page",
    //         "ref": "*"
    //     },
    // ]

    return ( 
        <header className="bg-slate-300 flex items-center py-3 shadow-2xl">
            <div className="container mx-auto max-w-6xl w-[95%] sm:w-[90%]">
                <nav className="flex justify-between items-center">
                    <div className="font-tektur">
                        <Link to="/">
                            <h1 className="font-bold text-base md:text-xl text-slate-800 ">Buseler 
                                <span className="text-slate-400">Estate</span>
                            </h1>
                        </Link>
                    </div>
                    <form className="bg-slate-100 flex md:w-[25rem] rounded-full shadow-sm">
                        <input type="search"placeholder="Search..." className="bg-transparent py-2 pl-4 w-[100%] rounded-l-full focus-visible:outline-transparent focus:outline-slate-500 "/>
                        <i className="py-3 px-4 rounded-r-full cursor-pointer text-slate-700 font-bold text-base hover:bg-gray-300 active:bg-opacity-75 transition-all duration-200">
                            <p className="">Q</p>
                        </i>
                    </form>
                    <ul className="flex gap-x-4">
                        <li className="font-semibold text-slate-700 text-base hover:underline transition-all duration-300 hidden md:block">Home</li>
                        <li className="font-semibold text-slate-700 text-base hover:underline transition-all duration-300 hidden md:block">About</li>
                        <li className="font-semibold text-slate-700 text-base hover:underline transition-all duration-300 hidden md:block">Sign in</li>

                        {/* {
                            navLinks.map(({label, ref})=> {
                                if (ref === "*" || ref === "/sign-up" || ref === "/profile") return null
                                return (
                                    <Link  key={ref} to={ref}>
                                        <li className="font-semibold text-slate-700 text-base hover:underline transition-all duration-300">{label}</li>
                                    </Link>
                                )
                            })
                        } */}
                    </ul>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;