import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigation } from "react-router-dom";



const SignUp = () => {
    // const navigation = useNavigation();
    // console.log(navigation)
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const res = await fetch ("/api/auth/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false) {
                setError(data.message);
                setLoading(false)
                return;
            }
            setLoading(false);
            console.log(data)
        }
        catch(error) {
            setLoading(false)
            setError(error.message);
        }
    }
    return ( 
        <section className="bg-gray-200 min-h-[90vh] flex pt-[3rem] space-y-5">
            <div className="w-[95%] max-w-lg mx-auto space-y-5">
                <h1 className="text-center font-bold text-2xl"> Sign Up </h1>
                <form onSubmit={handleSubmit} className=" space-y-5">
                    <input type="text" id="username" placeholder="Username" className="disabled:opacity-80 shadow-md py-3 px-4 rounded-lg w-full focus:outline-transparent focus:shadow-xl"
                     onChange={handleChange} />
                    <input type="email" id="email" placeholder="Email" className="disabled:opacity-80 shadow-md py-3 px-4 rounded-lg w-full focus:outline-transparent focus:shadow-xl" 
                     onChange={handleChange} />
                    <input type="password" id="password" placeholder="Password" className="shadow-md py-3 px-4 rounded-lg w-full focus:outline-transparent focus:shadow-xl" 
                     onChange={handleChange} />
                    <button type="submit" disabled={loading} className="disabled:cursor-not-alloweds w-full text-center py-3 bg-slate-700 text-slate-100 rounded-lg text-base uppercase hover:bg-opacity-95 transition-all duration-300 "> 
                        { loading ? "loading..." : "Sign Up"}
                    </button>
                    <button type="submit" disabled={loading} className="disabled:cursor-not-alloweds w-full text-center py-3 bg-red-700 text-slate-100 rounded-lg text-base uppercase hover:bg-opacity-95 transition-all duration-300 ">
                        { loading ? "loading..." : "Continue with google"}
                    </button>
                </form>
                <div className="flex gap-3">
                    <p className="text-slate-700 font-semibold hover:opacity-80 transition-all duration-200"> Have an account? </p>
                    <Link to="/sign-in" className="text-blue-700 font-semibold hover:opacity-80 transition-all duration-200">Sign in</Link>
                </div>
                { error && <p className="text-red-500">{error}</p> }
            </div>
        </section>
     );
}
 
export default SignUp;