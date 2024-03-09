import { useState } from "react";
const Skills = () => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <div className="h-auto bg-black text-black pb-20"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="p-[5px]">
                <h1 className="text-center text-white text-[40px] max-[1002px]:text[20px]">Skills</h1>
                <div className={`bg-[#8d6e6e] max-[1002px]:pt-5  max-[1002px]:flex max-[1002px]:flex-col max-[1002px]:items-center rounded-lg h-auto min-[1002px]:flex min-[1002px]:flex-row min-[1002px]:justify-around text-[17px] mt-[20px] min-[1002px]:items-center mx-10 p-5 ${isHovered ? 'font-bold mx-5' : ''
                    }`}>
                    <h2>Educational Technology <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Educational Leadership <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Student Counseling <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Educational Research <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Curriculum Development <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Lesson Planning <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Public Speaking <span className="max-[1002px]:hidden">|</span></h2>

                    <h2>Teamwork</h2>
                </div>
            </div>
        </div>

    )
}

export default Skills;