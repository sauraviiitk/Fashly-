function Home() {
    return (
        <div className="mx-auto bg-transparent w-[80%]  flex flex-col lg:flex-row items-center justify-center overflow-hidden">
            {/* Left Section */}
            <div className="left w-full lg:w-[55%] h-auto lg:h-screen lg:pl-10 text-center lg:text-left flex flex-col justify-center lg:justify-start  lg:pt-24">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4  font-serif">
                    Redefining Fashion, One Piece at a Time
                </h1>
                <p className="text-base md:text-lg lg:text-xl w-[90%] mx-auto lg:mx-0 font-extralight">
                    "Discover the perfect blend of style and comfort at <b>URBANEMPRESS</b>. From casual chic to statement pieces, we have something for everyone. 
                    Step up your fashion game with us today!"
                </p>
            </div>
            {/* Right Section */}
            <div className="right w-full lg:w-[40%]  lg:h-[80%] flex items-center justify-center">
                <img 
                    src="/image/mode1.jpeg" 
                    className="w-[90%] md:w-full h-[90%] md:h-full rounded-lg shadow-md object-cover"
                />
            </div>
        </div>
    );
}

export default Home;
