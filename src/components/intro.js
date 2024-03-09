import React, { useEffect } from 'react';
import Typed from 'typed.js';
const Intro = () => {
    useEffect(() => {
        const typeData = new Typed('.role', {
            strings: [
                'Physics Educationalist',
                'Curriculum Developer',
                'Content Writter',
            ],
            loop: true,
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1000,
        });

        return () => {
            typeData.destroy();
        };
    }, []);
    const pfp = "https://firebasestorage.googleapis.com/v0/b/portfolio-17239.appspot.com/o/HomePage%2Fpfp.jpeg?alt=media&token=0ef103e1-9cb0-407c-a456-86e8f8ac22e7"
    return (
        <div className="bg-black h-auto pb-24 max-[1002px]:pb-12 ">


            <div className="flex lg:flex-row max-[1002px]:flex-col-reverse  pt-14">




                <div className="min-[1002px]:ml-[60px] min-[1002px]:w-[50%] max-[1002px]:w-auto text-white max-[1002px]:mt-[15px] max-[1002px]:p-4 ">
                    <div className="">

                        <div className=" text-[70px] text-[#8d6e6e] max-[1002px]:text-[35px] max-[1002px]:mb-2 max-[319px]:text-[30px] ">Nidhi Patel<span className="text-[20px]"> (M.Sc., M.Ed.)</span></div>

                        <div className="text-[40px] max-[1002px]:text-[20px]">
                            I am a <span className="role text-[#8d6e6e]"></span>
                        </div>

                        <div className="mt-[20px] text-[18px] max-[1002px]:text-[14px] max-[1002px]:mt-[15px]">
                            <p>
                                Dedicated and aspiring Physics teacher possessing adept classroom management skills, meticulous lesson planning,
                                and organizational proficiency. Fueled by a compassionate and caring attitude, I am dedicated to inspiring, motivating,
                                and cultivating imaginative and innovative thinking in each student. Demonstrated ability to handle multiple priorities and
                                achieve results by aligning cross-functional and multidivisional activities. Thrives in collaborative, multicultural,
                                team-oriented, and fast-paced environments. Eager to contribute my passion for physics education to foster a dynamic and
                                engaging learning environment.
                            </p>
                        </div>

                        <a href="https://www.youtube.com/@NidhiPatelClasses" target="blank" className=" mt-10 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#8d6e6e] border-2 border-[#8d6e6e] rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#8d6e6e] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Watch Teaching Demo</span>
                        </a>
                    </div>
                </div>




                <div className="lg:ml-[250px] max-[1002px]:flex max-[1002px]:justify-center max-[1002px]:items-center">
                    <img src={pfp} alt="User profile picture" className="w-96 max-[1002px]:w-64" />
                </div>

            </div>
        </div >
    );
};

export default Intro;
