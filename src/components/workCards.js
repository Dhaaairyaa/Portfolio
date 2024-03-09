import React, { useState } from "react";
import '../App.css';

export function WorkCards({ data }) {
    const { Institution, Duration, Designation, role1, role2, role3 } = data;

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`relative w-[450px] max-[400px]:w-auto h-auto pb-4 bg-[#8d6e6e] pt-4 pl-4 pr-4 rounded-lg transition-transform shadow-[4px_5px_31px_8px_#8d6e6e] border-[#835f5f] border-2  ${isHovered ? 'transform scale-110' : ''
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className={` text-center text-[25px] pb-2 underline max-[1002px]:text-[20px] ${isHovered ? 'text-white' : 'text-[#000000]'}`}>
                {Institution}
            </p>
            <p className={`text-center text-[20px] max-[1002px]:text-[18px] ${isHovered ? 'text-white' : 'text-[#000000]'}`}>{Designation}</p>
            <p className={`mt-1 text-grey text-center  max-[1002px]:text-[13px]${isHovered ? 'text-white' : 'text-[#000000]'}`}>{Duration}</p>
            <ul className="hover:list-disc">
                <li className="m-[10px]  max-[1002px]:text-[13px]">{role1}</li>
                <li className="m-[10px]  max-[1002px]:text-[13px]">{role2}</li>
                <li className="m-[10px]  max-[1002px]:text-[13px]">{role3}</li>
            </ul>

        </div>
    );
}
