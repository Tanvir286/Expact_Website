import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='banner pt-[28px] pb-[120px] md:pb-[166px] relative'>
            {/* Container for the entire banner section */}
            <div className='max-w-container mx-auto relative'>

                {/* Navbar part start */}
                <div className='px-3 lg:px-0'>
                    <div className=' flex justify-between items-center backdrop-blur-md bg-opacity-30  bg-[#f4f4f4] px-5 py-4 rounded-lg shadow-lg text-white mb-10'>
                        
                        <img src="/images/logo.png" alt="" className='w-16 lg:w-24' />
                        
                        <div className='text-primary-blue bg-white rounded-xl px-2 py-2 lg:px-4 lg:py-3 font-montserrat-semibold text-base lg:text-lg inline-block cursor-pointer'>
                            Log in
                        </div>

                    </div>
                </div>
                {/* Navbar part start */}


                {/* banner part start */}
                <div className='lg:flex items-center gap-x-6 justify-between'>
                    
                    {/* Left Section Start */}
                    <div className='lg:w-[55%] text-white mb-0 lg:mb-24'>
                        {/* Main heading for the banner */}
                        <h1 className='font-montserrat-bold text-3xl  text-center lg:text-left md:text-56 leading-tight font-bold px-2 sm:px-0 '>
                          The Premier <span className="hidden lg:inline"><br /></span> Co-living Travel <span className="hidden lg:inline"><br /></span> Network for Women
                        </h1>

                        {/* Decorative bar and subheading */}
                        <div className='flex items-center justify-center lg:justify-start gap-x-1 sm:gap-x-4  mt-6 px-0.5 sm:px-0'>
                            <div className='w-10 h-1 bg-white rounded-xl'></div>
                            <p className='font-montserrat-bold text-lg font-bold '>
                                Find your perfect housemate,
                            </p>
                        </div>
                        {/* Supporting text */}
                        <p className='font-montserrat-bold text-lg font-bold lg:ml-14 text-center lg:text-left  mt-2  '>
                            move faster, stay longer, and travel with confidence.
                        </p>
                    </div>
                    {/* Left Section End */}

                    {/* Right Section - Sign-up Form */}
                    <div className='lg:w-[45%] mt-14 px-5 lg:px-0'>
                        {/* Form container with styles */}
                        <div className='backdrop-blur-md bg-opacity-20 bg-[#383838] p-8 rounded-lg shadow-lg text-white max-w-sm mx-auto sm:max-w-[530px]  md:max-w-[679px] lg:max-w-none lg:mx-0'>
                            {/* Form header */}
                            <h2 className='text-2xl font-bold font-montserrat-bold mb-8 text-center'>Sign up with email</h2>
                            <form>
                                {/* Two-column grid for name inputs */}
                                <div className='grid  grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <div>
                                        {/* First Name input field */}
                                        <label htmlFor="firstName" className="text-base font-montserrat-normal font-bold text-white block mb-3">First Name</label>
                                        <input
                                            id="firstName"
                                            type='text'
                                            placeholder='Enter your first name'
                                            className='p-3 rounded-md border-2 border-[#FCFCFD] bg-transparent text-white focus:outline-none w-full placeholder:font-montserrat-normal placeholder:text-[#FCFCFD]'
                                        />
                                    </div>

                                    <div>
                                        {/* Last Name input field */}
                                        <label htmlFor="lastName" className="text-base font-montserrat-normal font-bold text-white block mb-3">Last Name</label>
                                        <input
                                            id="lastName"
                                            type='text'
                                            placeholder='Enter your last name'
                                            className='p-3 rounded-md border-2 border-[#FCFCFD] bg-transparent text-white focus:outline-none w-full placeholder:font-montserrat-normal placeholder:text-[#FCFCFD]'
                                        />
                                    </div>
                                </div>

                                {/* Email input field */}
                                <div className="mt-5">
                                    <label htmlFor="email" className="text-base font-montserrat-normal font-bold text-white block mb-3">Email Address</label>
                                    <input
                                        id="email"
                                        type='email'
                                        placeholder='Email your email address'
                                        className='p-3 rounded-md border-2 border-[#FCFCFD] bg-transparent text-white focus:outline-none w-full placeholder:font-montserrat-normal placeholder:text-[#FCFCFD]'
                                    />
                                </div>

                                {/* Password input field */}
                                <div className="mt-5">
                                    <label htmlFor="password" className="text-base font-montserrat-normal font-bold text-white block mb-3">Password</label>
                                    <input
                                        id="password"
                                        type='password'
                                        placeholder='Enter your password'
                                        className='p-3 rounded-md border-2 border-[#FCFCFD] bg-transparent text-white focus:outline-none w-full placeholder:font-montserrat-normal placeholder:text-[#FCFCFD]'
                                    />
                                </div>

                                {/* Log in link for existing users */}
                                <p className='text-lg text-white mt-5 text-center font-montserrat-medium'>
                                    You are already a member{' '}
                                    <span className='underline font-bold cursor-pointer'>
                                        log in
                                    </span>
                                </p>

                                {/* Submit button */}
                                <button
                                    type='submit'
                                    className='w-full flex items-center justify-center gap-x-3 bg-primary-blue text-white font-bold py-3 rounded-md mt-6'
                                >
                                    Sign up <FaArrowRightLong className='mt-2' />
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Right Section End */}

                </div>
                {/* banner part end */}

                {/* ====Out part start ==== */}
                <div className='md:hidden block mt-5'>
                    <div className='bg-white mx-auto px-4 py-4 rounded-xl max-w-sm sm:max-w-[530px]'>
                            {/* one start */}
                            <div className=' text-center '>
                                <img src="/images/banner/one.png" alt="" className='inline-block' />
                                <h2 className='font-montserrat-semibold font-semibold text-base lg:text-2xl text-primary-black mt-2'>150+ Countries </h2>
                                <p className='font-montserrat-normal mx-auto font-normal text-third-black text-sm lg:text-lg max-w-[271px] mt-1'>Empowering women to explore destinations globally.</p>
                            </div>
                            {/* two */}
                            <div className='text-center mt-6'>
                                <img src="/images/banner/two.jpg" alt="" className='inline-block' />
                                <h2 className='font-montserrat-semibold font-semibold text-base lg:text-2xl text-primary-black mt-2'>Connect & Travel</h2>
                                <p className='font-montserrat-normal mx-auto font-normal text-third-black text-sm lg:text-lg max-w-[271px]  mt-1'>A trusted community of verified members.</p>
                            </div>
                            {/* third */}
                            <div className='text-center mt-6'>
                                <img src="/images/banner/three.jpg" alt="" className='inline-block' />
                                <h2 className='font-montserrat-semibold font-semibold text-base lg:text-2xl text-primary-black mt-2'>Find Your Tribe</h2>
                                <p className='font-montserrat-normal mx-auto font-normal text-third-black text-sm lg:text-lg max-w-[271px]  mt-1'>Find like-minded housemates faster and easier.  </p>
                            </div>
                    </div>
                </div>
                {/* ====Out part start ==== */}



                {/* ====Out part start ==== */}
                <div className='hidden md:block'>
                    <div className='bg-white md:flex justify-between px-4 py-4 rounded-xl absolute w-full -bottom-[330px] z-40'>
                            {/* one start */}
                            <div>
                                <img src="/images/banner/one.png" alt="" />
                                <h2 className='font-montserrat-semibold font-semibold text-base lg:text-2xl text-primary-black mt-2'>150+ Countries </h2>
                                <p className='font-montserrat-normal font-normal text-third-black text-sm lg:text-lg max-w-[271px] mt-1'>Empowering women to explore destinations globally.</p>
                            </div>
                            {/* two */}
                            <div>
                                <img src="/images/banner/two.jpg" alt="" />
                                <h2 className='font-montserrat-semibold font-semibold text-base lg:text-2xl text-primary-black mt-2'>Connect & Travel</h2>
                                <p className='font-montserrat-normal font-normal text-third-black text-sm lg:text-lg max-w-[271px]  mt-1'>A trusted community of verified members.</p>
                            </div>
                            {/* third */}
                            <div>
                                <img src="/images/banner/three.jpg" alt="" />
                                <h2 className='font-montserrat-semibold font-semibold text-base lg:text-2xl text-primary-black mt-2'>Find Your Tribe</h2>
                                <p className='font-montserrat-normal font-normal text-third-black text-sm lg:text-lg max-w-[271px]  mt-1'>Find like-minded housemates faster and easier.  </p>
                            </div>
                    </div>
                </div>
                {/* ====Out part start ==== */}


            </div>
        </div>
    );
};

export default Banner;
