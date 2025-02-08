import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Comments() {
    const [msg, setMsg] = useState("");
    const [reviews, setReviews] = useState([]);
    const prereviews = [
        { id: 1, name: "John Doe", comment: "This is an amazing product! I love the quality and design. Totally worth the price. 😍" },
        { id: 2, name: "Amit Garg", comment: "This is a good product. Delivery was quick, and the packaging was excellent. 🚚📦" },
        { id: 3, name: "Priya Sharma", comment: "The product is very durable and performs as advertised. Highly recommend it to others. 💪👍" },
        { id: 4, name: "Rahul Mehta", comment: "I'm very satisfied with this product. The customer service team was also very supportive. 👌📞" },
        { id: 5, name: "Sanjana Roy", comment: "The product exceeded my expectations. The build quality is fantastic, and it looks great! ✨🔥" },
        { id: 6, name: "Michael Brown", comment: "Good product overall, but I wish it came with a few more features for the price. 🤔💰" },
    ];

    useEffect(() => {
        const savedReviews = localStorage.getItem("reviews");
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        } else {
            localStorage.setItem("reviews", JSON.stringify(prereviews));
            setReviews(prereviews);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    const handleSubmit = () => {
        if (msg.trim() === "") return;
        setReviews([{ name: "saurav@77", comment: msg.trim() }, ...reviews]);
        setMsg("");
    };

    return (
        <div className="w-full p-4 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-md">
                <h2 className="font-bold text-xl sm:text-2xl mb-4">Write a Review:</h2>
                <textarea
                    name="comments"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                    rows="4"
                    placeholder="Write your review here..."
                ></textarea>
                <button
                    onClick={handleSubmit}
                    className="mt-3 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit Review
                </button>
            </div>

            <div className="w-full max-w-2xl mt-6 bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl sm:text-2xl mb-4">Customer Reviews:</h3>

                {[...prereviews, ...reviews].map((review, index) => (
                    <div key={index} className="p-3 w-full mb-4 border-b last:border-b-0">
                        <div className="flex items-start">
                            <FontAwesomeIcon icon={faUser} className="text-gray-500 text-xl sm:text-2xl mr-3" />
                            <div>
                                <p className="font-bold">{review.name}</p>
                                <p className="text-gray-700">{review.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
