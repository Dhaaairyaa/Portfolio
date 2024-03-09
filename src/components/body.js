import React, { useState, useEffect } from 'react';
import Intro from "./intro.js";
import Education from "./education.js";
import Testimonials from "./testimonial.js"
import Memories from "./memories.js"
import Skills from "./skills"
import Poem from './Poem.js';
const Body = () => {
    const [reviews, setReviews] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzIpJwyciEOAjjgG94dcU4KVTb5NWix2xI8E6xygn6F1tykbFSDlLSJZqu2-XWtKfKDhg/exec');
                const data = await response.json();
                setReviews(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Intro></Intro>
            <Education></Education>
            <Skills></Skills>
            <Testimonials reviews={reviews}></Testimonials>
            <Memories></Memories>
            <Poem></Poem>
        </div>
    )
};

export default Body;
