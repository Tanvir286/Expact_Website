import React from 'react';
import TitleSection from '../layouts/TitleSection';

const Choose = () => {
    return (
        <div className='bg-background py-14 md:pt-[122px] md:pb-[182px] '>
            <div className='max-w-container mx-auto '>

                {/* Title part Start */}
                <TitleSection
                    rotatedText="Why choose us?"
                    heading="Why Choose Expat Global Girls"
                    subText="Empowering women to travel with confidence and ease worldwide"
                />
                {/* Title part end */}
                
                {/* Card part start */}
                <div className='sm:flex justify-between flex-wrap gap-y-8 md:gap-y-14 relative px-4 lg:px-0'>
                    
                    {/*============= Card 1 ================*/}
                    <div className='sm:w-[47%] border-2 border-[rgba(8,114,186,0.3)] px-5 py-8 rounded-2xl md:rounded-br-[100px] mb-5 sm:mb-0'>
                         
                         <img src="/images/choose/one.png" alt="" />
                         <div>
                          <h1 className='font-montserrat-semibold text-xl md:text-2xl font-semibold text-primary-black mt-4 '>Affordable Housing</h1>
                          <p className='font-montserrat-normal text-lg text-third-black mt-2'>Save money and travel smarter by sharing accommodations with fellow members.</p>
                         </div>
                    
                    </div>

                    {/* ==============Card 2================ */}
                    <div className='sm:w-[47%] border-2 border-[rgba(8,114,186,0.3)] px-5 py-8 rounded-2xl md:rounded-bl-[100px] md:pl-20 mb-5 sm:mb-0'>
                         
                         <img src="/images/choose/two.png" alt="" />
                         <h1 className='font-montserrat-semibold text-xl md:text-2xl font-semibold text-primary-black mt-4'>Flexible Options</h1>
                         <p className='font-montserrat-normal text-lg text-third-black mt-2 max-w-[415px]'>From memberships to travel & lifestyle preferences – you have the power to choose.</p>
                    
                    </div>

                    {/* ===============Card 3 ==============*/}
                    <div className='sm:w-[47%] border-2 border-[rgba(8,114,186,0.3)] px-5 py-8 rounded-2xl md:rounded-tr-[100px] mb-5 sm:mb-0'>
                         
                         <img src="/images/choose/three.png" alt="" />
                         <h1 className='font-montserrat-semibold text-xl md:text-2xl font-semibold text-primary-black mt-4'>Verified Profiles</h1>
                         <p className='font-montserrat-normal text-lg text-third-black mt-2 max-w-[400px]'>A reliable community with verified profiles for added safety and peace of mind.</p>
                    
                    </div>

                    {/* ================Card 4==============*/}
                    <div className='sm:w-[47%] border-2 border-[rgba(8,114,186,0.3)] px-5 py-8 rounded-2xl md:rounded-tl-[100px] md:pl-20 mb-5 sm:mb-0'>
                         
                         <img src="/images/choose/four.png" alt="" />
                         <h1 className='font-montserrat-semibold text-2xl font-semibold text-primary-black mt-4'>Women-Only Spaces</h1>
                         <p className='font-montserrat-normal text-lg  text-third-black mt-2 max-w-[410px]'>Safe, supportive spaces for women to connect and thrive period.</p>
                    
                    </div>


                    <img src="/images/choose/middle.png" alt="" className='top-1/2 left-1/2 bottom-0 absolute -translate-x-1/2 -translate-y-1/2 hidden md:block'/>
                   

                   
                </div>
                {/* Card part end */}
               
            </div>
        </div>
    );
};

export default Choose;
