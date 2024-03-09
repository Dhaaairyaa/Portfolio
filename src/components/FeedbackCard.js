// FeedbackCard.js

import React from "react";
import { useState } from "react";
const generateStars = (count) => {
    return Array.from({ length: count }, (_, index) => '⭐️').join('');
};

const FeedbackCard = ({ Name, communication_skills, student_engagement, feedback, memories }) => {
    // Convert student_engagement to an integer
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`w-full max-w-[800px] h-[400px] overflow-y-scroll max-h-[500px] bg-[#191919] p-8 rounded-lg shadow-lg text-white ml-[10px] mr-[10px] mb-[200px] transition-transform duration-300 ${isHovered ? 'transform scale-110' : ''
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                marginBottom: isHovered ? '-8px' : '0',
            }}
        >
            <h1 className="text-2xl font-semibold mb-4 text-center">{Name}</h1>
            <p className="text-base mb-4"><span>Teaching Skills:</span>{generateStars(communication_skills)}</p>
            <p className="text-base mb-4"><span>Feedbacks: </span>{feedback}</p>
            <p className="text-base"><span>Memories: </span>{memories}</p>
        </div>
    );
};

export default FeedbackCard;
