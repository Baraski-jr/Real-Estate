import EditListingCard from "../../components/cards/editListing";

const Profile = () => {
    return ( 
        <section className="bg-gray-200 min-h-screen flex items-center space-y-5">
            <div className="w-[95%] max-w-[30rem] mx-auto space-y-5">
                <div className="w-fit mx-auto">
                    <img src="/Profile/Baraski.png" alt="Profile" className="object-cover object-top h-[5rem] w-[5rem] rounded-full hover:shadow-2xl hover:scale-105 hover:transition-all duration-500"/>
                </div>
                <form action="/" method="post"  className=" space-y-5">
                    <input type="text" placeholder="Username" className="shadow-md py-3 px-4 rounded-xl w-full focus:outline-transparent focus:shadow-xl" />
                    <input type="email" placeholder="Email" className="shadow-md py-3 px-4 rounded-xl w-full focus:outline-transparent focus:shadow-xl"/>
                    <input type="password" placeholder="Password" className="shadow-md py-3 px-4 rounded-xl w-full focus:outline-transparent focus:shadow-xl"/>
                    <button type="submit" className="w-full text-center py-3 bg-slate-700 text-slate-100 rounded-xl text-base uppercase hover:bg-opacity-95 transition-all duration-300 ">update</button>
                    <button type="submit" className="w-full text-center py-3 bg-green-700 text-slate-100 rounded-xl text-base uppercase hover:bg-opacity-95 transition-all duration-300 ">Create Listing</button>
                </form>
                <div className="flex justify-between">
                    <button className="text-red-700 font-semibold hover:opacity-80 transition-all duration-200">Delete Account</button>
                    <button className="text-red-700 font-semibold hover:opacity-80 transition-all duration-200">Sign ut</button>
                </div>
                <div className="text-center space-y-3">
                    <button className="text-green-700 font-semibold hover:opacity-80 transition-all duration-200">Show listings</button>
                    <div className="">
                        <h1 className="text-2xl font-semibold">Your listings</h1>
                        <EditListingCard />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Profile;