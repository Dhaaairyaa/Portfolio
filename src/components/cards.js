import React, { useState } from "react";
import '../App.css';

export function Cards({ data }) {
    const { Degree, university, Description } = data;

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`relative w-[350px] max-[400px]:w-auto h-auto bg-[#8d6e6e] pt-4 pl-4 pr-4 rounded-lg transition-transform ${isHovered ? 'transform scale-110' : ''
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className={` text-center text-[25px] pb-2 underline max-[1002px]:text-[20px] ${isHovered ? 'text-white' : 'text-[#000000]'}`}>
                {Degree}
            </h1>
            <p className="text-center text-[20px] max-[1002px]:text-[15px]">{university}</p>
            <p className="mt-2 text-grey text-center max-[1002px]:text-[13px]">{Description}</p>
            <div className="h-[30px]"></div>
        </div>
    );
}


