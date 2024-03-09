import FeedbackCard from "./FeedbackCard";
import Carousel from "nuka-carousel";
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"

const Testimonials = () => {
    const [feedbackData, setFeedbackData] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzIpJwyciEOAjjgG94dcU4KVTb5NWix2xI8E6xygn6F1tykbFSDlLSJZqu2-XWtKfKDhg/exec');
                const data = await response.json();
                setFeedbackData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to ensure the effect runs once on mount



    const settings = {
        // dots: false,
        infinite: true, // Enable infinite looping
        speed: 200,
        slidesToShow: window.innerWidth >= 1020 ? 3 : 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplayInterval: 1,
    };

    return (
        <div className="h-auto pt-2 bg-[#8d6e6e]">
            <div className="h-auto mt-2 bg-[#8d6e6e]">
                <h1 className="text-center text-white mb-[20px] text-[40px] max-[1002px]:text-[25px] ">Student Feedbacks</h1>
                {feedbackData !== null ? (
                    <div className="flex items-center justify-center">
                        <Carousel {...settings} className="mb-10">
                            {feedbackData.map((feedback, index) => (
                                <div className="mx-5"> {/* Add margin to create space between cards */}
                                    <FeedbackCard key={index} {...feedback} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                ) : (
                    <p className="text-center text-[20px]">Loading...</p>
                )}
                <style>
                    {`
                      .slider-control-bottomcenter {
                        display: ${windowWidth < 1020 ? 'none' : 'block'} !important;
                      }
                    `}
                </style>

            </div>
            <div className="flex flex-col items-center pt-10 text-[30px] pb-10 max-[1002px]:text-[15px] font-bold ">
                <h1 className="text-center">If you've ever been a student of mine, please do provide feedback.</h1>
                <a href="https://forms.gle/eGcn9676KTqR7QX36" target="blank" className=" mt-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-[#191919] border-2 border-[#191919] rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-[#191919] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Feedback</span>
                </a>
            </div>

        </div>
    );
};

export default Testimonials;
