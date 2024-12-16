import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Expat = () => {
    return (
        <div className='bg-background pt-[120px] md:pt-[282px]  pb-[132px] '>
            <div className='max-w-container mx-auto'>
                <div className='lg:flex gap-x-8 px-2 lg:px-0 '>
                      
                      {/* =========left part start ==========*/}
                      <div >
                       <img src="/images/expat.png" alt=""  className='w-full  '/>
                      </div>
                      {/*========= left part end ===========*/}
                      {/*==== right part start==== */}
                      <div className="mt-14 lg:mt-3  ">

                            <div className="flex  items-center">
                                <span className="w-10 h-2 bg-primary-blue rounded-full"></span>
                            </div>
                            <h2 className="font-montserrat-semibold text-2xl sm:text-5xl text-primary-black mt-3 lg:max-w-[606px] leading-[133%]">
                               Your Community for Women Ready to Go Abroad
                            </h2>

                            <p className='text-xl font-montserrat-medium text-secondary-black lg:max-w-[622px] leading-8 mt-7'>We’re thrilled you found us! At Expat Global Girls, we empower women to pursue their dreams abroad. Our platform connects women seeking housemates for international moves and trips, offering a safe, supportive community and a searchable directory to help you find the perfect living companion. Join us to make your move abroad affordable, achievable, and filled with support!</p>
 
                             
                            <button className='flex bg-primary-blue items-center gap-x-2 px-4 py-2 rounded-lg mt-8 '>
                                <span className='font-montserrat-medium text-sm sm:text-base  text-white'>Become a Member</span>
                                <FaArrowRight  className='text-white'/>
                            </button>

                      </div>
                      {/*==== right part end ==== */}

                </div>
            </div> 
        </div>
    );
};

export default Expat;