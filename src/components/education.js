import React from "react";
import { Cards } from "./cards.js";
import { educationData } from "../assets/education_data";
import { WorkExperience } from "../assets/education_data"
import { WorkCards } from "./workCards.js"
const Education = () => {
    return (
        <div>
            <div className="bg-[#191919] h-auto flex flex-col items-center justify-center max-[1002px]:px-6 ">
                <h1 className="pt-10 max-[1002px]:pt-6 text-[40px] text-white max-[1002px]:text-[35px] max-[319px]:text-[30px]">Education</h1>
                <div className=" pt-[50px] max-[1002px]:pt-8 space-y-10 max-[319px]:mr-0">
                    {educationData.map((item, index) => (
                        <Cards key={index} data={item} />
                    ))}
                </div>
                <div className="h-[80px]"></div>

            </div>


            <div className="pt-10 bg-black h-auto flex flex-col items-center justify-center max-[1002px]:px-6">

                <h1 className="pt-15 text-center text-[40px] text-white max-[1002px]:text-[35px] max-[319px]:text-[30px]">
                    Work Experience
                </h1>

                <div className="flex max-[1002px]:flex-col max-[1002px]:items-center max-[1002px]:space-y-10 pt-[50px] justify-center min-[1002px]:space-x-40 max-[1002px]:pt-8 max-[1002px]:space-y-10">
                    {WorkExperience.map((item, index) => (
                        <WorkCards key={index} data={item} />
                    ))}
                </div>
                <div className="h-[100px]"></div>

            </div>
        </div>
    );
};

export default Education;
