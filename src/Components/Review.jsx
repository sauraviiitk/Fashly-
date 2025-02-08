import Comments from "./Comments";

function Review() {
    const starpercentage = [30, 30, 10, 10, 20];

    return (
        <div className="mt-5 w-full h-auto p-4">
            <div className="flex flex-col md:flex-row border-t-2">
                
                {/* Left - Star Ratings */}
                <div className="md:w-1/3 w-full p-4">
                    <p className="text-2xl md:text-3xl font-bold mb-4">Customer Reviews</p>
                    {starpercentage.map((val, index) => (
                        <div key={index} className="flex items-center mb-3">
                            <p className="w-6 text-lg">{5 - index}★</p>
                            <div className="w-40 bg-gray-200 h-5 rounded-full overflow-hidden ml-3">
                                <div 
                                    style={{ width: `${val}%` }} 
                                    className="h-full bg-yellow-400 rounded-md"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right - Comments Section */}
                <div className="md:w-2/3 w-full p-4">
                    <div className="mb-4">
                        <select className="w-40 p-2 border bg-slate-600 text-white rounded-md">
                            <option>Most Recent</option>
                            <option>Top Reviews</option>
                        </select>
                    </div>
                    <Comments />
                </div>

            </div>
        </div>
    );
}

export default Review;
