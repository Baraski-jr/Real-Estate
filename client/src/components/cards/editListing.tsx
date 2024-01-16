const EditListingCard = () => {
    return ( 
        <figure className="flex gap-5 shadow-sm rounded-xl bg-slate-200">
            <img src="/Profile/Baraski.png" alt="" className="object-cover object-top h-[3.5rem] w-[5rem]" />
            <figcaption className="flex flex-col justify-center">
                <h1 className="font-semibold text-lg">Cottage in the Heart of Willow</h1>
                <div className="flex gap-3 text-base">
                    <button className="text-red-700 font-semibold uppercase hover:opacity-80 transition-all duration-200">Delete</button>
                    <button className="text-green-700 font-semibold uppercase hover:opacity-80 transition-all duration-200">Edit</button>
                </div>
            </figcaption>
        </figure>
     );
}
 
export default EditListingCard;