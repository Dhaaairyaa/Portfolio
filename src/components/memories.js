import React, { useState, useEffect } from 'react';
import { memImage } from "../assets/mem_img";
import Memcard from "./memcard";
import Carousel from "nuka-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Memories = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        <div className="h-[600px] pt-5 bg-black w-full items-center">
            <div className="h-auto mt-10 max-[1002px]:mt-5 bg-black ">
                <h1 className="text-center text-white mb-[20px] text-[40px] max-[1002px]:text-[25px]">Memories</h1>
                {memImage !== null ? (
                    <div className="flex items-center justify-center">
                        <Carousel {...settings}>
                            {memImage.map((item, index) => (
                                <div className="mx-5" key={index}>
                                    <Memcard data={item} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                ) : (
                    <p className="text-center text-[20px]">Loading...</p>
                )}
            </div>

        </div>
    );
};

export default Memories;
