import React, { useRef } from 'react';
import TitleSection from '../layouts/TitleSection';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Testimonial=() => {
    const sliderRef = useRef(null);

    const CustomNextArrow = ({ onClick }) => {
        return (
            <div
                className="hidden md:block absolute right-[40px] top-[50px] rounded-lg transform -translate-y-1/2 z-10 cursor-pointer border-2  border-primary-blue text-secondary bg-white p-2  shadow-lg"
                onClick={onClick}
            >
               <FaArrowRight size={20} className='text-primary-blue '/>
            </div>
        );
    };

    const CustomPrevArrow = ({ onClick }) => {
        return (
            <div
                className="hidden md:block absolute right-[110px] top-[50px] rounded-lg transform -translate-y-1/2 z-10 border-2  border-primary-blue cursor-pointer text-secondary bg-white p-2  shadow-lg"
                onClick={onClick}
            >
                <FaArrowLeft size={20} className='text-primary-blue '/>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className="bg-background pt-[130px] pb-1">
            <div className="max-w-container mx-auto px-3 md:px-0">
                {/* Title Section */}
                <TitleSection
                    rotatedText="Testimonial"
                    heading="What Our Members Say"
                    subText="Hear from women who share your passion for exploring new cultures, experiencing life abroad, and making the most of every opportunity."
                />

                {/* Slider Section */}
                <div className="relative">
                    <Slider ref={sliderRef} {...settings}>
                        <div>
                            <img src="/images/choose/slider.png" alt="Slider Item 1" className="w-full" />
                        </div>
                        <div>
                            <img src="/images/choose/slider.png" alt="Slider Item 2" className="w-full" />
                        </div>
                        <div>
                            <img src="/images/choose/slider.png" alt="Slider Item 3" className="w-full" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
