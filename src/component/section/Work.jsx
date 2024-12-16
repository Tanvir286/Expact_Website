import React from 'react';
import WorkItem2 from '../layouts/WorkItem2';
import Stepper from '../layouts/Stepper';

const Work = () => {
    return (
        <div className='bg-white py-10'>
            <div className='max-w-container mx-auto'>

                {/* Title part start */}
                 <h2 className='font-montserrat-bold text-3xl md:text-5xl font-bold text-four-black text-center mb-4'>How It Works</h2>
                 <p className='font-montserrat-normal text-lg text-primary-black font-normal text-center mb-8 px-3 sm:px-0'>
                   Search and find other travelers heading to the same destination.
                 </p>
                {/* Title part end */}

                {/* item part start */}

                <div className='lg:flex justify-between'>
                     {/* left part start */}
                     <div className='lg:w-[45%]  md:max-lg:flex   md:max-lg:px-1   md:max-lg:gap-x-5 '>
                         {/* one part start */}
                         <div className='mb-3  text-center lg:text-left  md:max-lg:border rounded-lg  md:max-lg:py-5 '>
                            <h4 className='font-montserrat-semibold text-xl lg:text-2xl font-semibold text-primary-black'>Plan Your Trip</h4>
                            <p className='font-montserrat-normal font-normal text-base md:text-lg text-third-black mx-auto md:mx-0 max-w-xs sm:max-w-528 mt-2'>Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.</p>
                            <div className='flex justify-center '>
                                <img src="/images/Work/faqOne.png" alt=""/>
                            </div>
                         </div>
                         {/* two part start */}
                         <div className='mb-3 lg:mt-7 text-center lg:text-left md:max-lg:border  rounded-lg md:max-lg:py-5 ' >
                            <h4 className='font-montserrat-semibold text-xl lg:text-2xl font-semibold text-primary-black'>Connect and Build Relationships</h4>
                            <p className='font-montserrat-normal font-normal text-base md:text-lg text-third-black mx-auto lg:mx-0 max-w-xs sm:max-w-528 mt-2'>Send messages, ask questions, and get to know potential housemates before committing. Building rapport ensures a comfortable and trusted connection for your shared journey</p>
                            <div className='flex justify-center '>
                                <img src="/images/Work/faqThree.png" alt=""/>
                            </div>
                         </div>


                     </div>
                     {/* left part end */}
                     {/* Middle part start */}
                      <div className='h-full sm:w-[5%px] hidden lg:block '>
                        <Stepper/>
                      </div>
                     {/* Middle part ende */}
                     {/* right part start */}
                     <div className='lg:w-[45%] mt-10 sm:mt-0  md:max-lg:flex  md:max-lg:px-1   md:max-lg:gap-x-5 '>
                            {/* one part start */}
                            
                            <div className='mb-3 text-center  lg:text-left md:max-lg:border rounded-lg  md:max-lg:px-5 lg:ml-6 '>
                                <div className='flex justify-center '>
                                    <img src="/images/Work/faqOne.png" alt=""/>
                                </div>
                                <h4 className='font-montserrat-semibold text-xl lg:text-2xl font-semibold text-primary-black'>Explore Matching Profiles</h4>
                                <p className='font-montserrat-normal font-normal text-base md:text-lg text-third-black mx-auto lg:mx-0 max-w-xs sm:max-w-528 mt-2'>Browse through profiles of like-minded women who are traveling to similar locations. You can filter results based on your travel dates, needs, and values.</p>
                            </div>
                            {/* two part start */}
                            <div className='mb-3 lg:mt-7 text-center lg:text-left md:max-lg:border rounded-lg  md:max-lg:px-5 lg:ml-6'>
                                <div className='flex justify-center '>
                                    <img src="/images/Work/faqThree.png" alt=""/>
                                </div>
                                <h4 className='font-montserrat-semibold text-xl lg:text-2xl font-semibold text-primary-black'>Secure Your Plans & Enjoy the Journey</h4>
                                <p className='font-montserrat-normal font-normal text-base md:text-lg text-third-black mx-auto lg:mx-0 max-w-xs sm:max-w-528 mt-2 '>Once you’ve found the right housemate, finalize your arrangements with confidence. With a trusted companion, you can travel with peace of mind and enjoy every moment.</p>
                            </div>  
                     </div>
                     {/* right part end */}
                </div>
                 
                {/* item part start */}

            </div>
        </div>
    );
};

export default Work;