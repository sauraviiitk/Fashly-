import { useState } from "react";
import Womenttshirt from "./Rendercomponent/Womenttshirt";
import Womentops from "./Rendercomponent/Womentops";
import Analogwatches from "./Rendercomponent/Analogwatches";
import Bangles from "./Rendercomponent/Bangles";
import Bedsheets from "./Rendercomponent/Bedsheet";
import BikeCovers from "./Rendercomponent/Bikecovers";
import { useSort } from "./Sortcontext";

const categoryoptions = [
    "Women-tshirt",
    "Women-Tops and Tunics",
    "Analog Watches",
    "Bangle and Braceletes",
    "Bedsheets",
    "Bike Covers"
];

function Hero() {
    const { sortoption, setsortoption } = useSort();
    const [selectedoption, setselectedoption] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Toggle for filters

    const selectoptionfunction = (option) => {
        setselectedoption(selectedoption === option ? null : option);
    };

    const handleDropdownChange = (e) => {
        setsortoption(e.target.value);
    };

    const rendercomponent = () => {
        switch (selectedoption) {
            case "Women-tshirt":
                return <Womenttshirt />;
            case "Women-Tops and Tunics":
                return <Womentops />;
            case "Analog Watches":
                return <Analogwatches />;
            case "Bangle and Braceletes":
                return <Bangles />;
            case "Bedsheets":
                return <Bedsheets />;
            case "Bike Covers":
                return <BikeCovers />;
            default:
                return <Womentops />;
        }
    };

    return (
        <div className="w-full p-4">
            <div className="w-full md:w-[80%] mx-auto border bg-black flex flex-col md:flex-row">
                
                {/* Left Section (Filters) */}
                <div className="w-full md:w-[30%] bg-white p-4">
                    <div className="flex justify-between items-center md:block">
                        <h1 className="text-black text-2xl text-center mb-4">Products For You</h1>

                        {/* Toggle Button for Mobile Filters */}
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="md:hidden bg-gray-300 px-4 py-2 rounded-md text-black"
                        >
                            {isFilterOpen ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    {/* Filter Options - Show Only When Open on Mobile */}
                    <div className={`mt-4 ${isFilterOpen ? "block" : "hidden"} md:block`}>
                        <div className="flex items-center gap-2 bg-white border shadow-sm p-2 rounded-md">
                            <p className="text-black">Sort by:</p>
                            <select
                                value={sortoption}
                                onChange={handleDropdownChange}
                                className="p-2 cursor-pointer rounded-md bg-white text-black border focus:outline-none"
                            >
                                <option value="price1">Price (Low to High)</option>
                                <option value="price2">Price (High to Low)</option>
                                <option value="rate">Ratings</option>
                            </select>
                        </div>

                        <div className="checkoptions w-full mt-4">
                            <div className="border-b-2 border-gray-500 pb-2">
                                <p className="text-black text-lg">Filter</p>
                                <p className="text-gray-600">1000+ options</p>
                            </div>

                            {/* Categories */}
                            <div className="category w-full mt-3 flex flex-wrap gap-2">
                                {categoryoptions.map((option, index) => (
                                    <label key={index} className="flex items-center gap-2 w-full sm:w-1/2">
                                        <input
                                            type="checkbox"
                                            checked={selectedoption === option}
                                            onChange={() => selectoptionfunction(option)}
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                        <span className="text-black text-sm">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section (Products) */}
                <div className="w-full md:w-[70%] bg-white">
                    {rendercomponent()}
                </div>
            </div>
        </div>
    );
}

export default Hero;
