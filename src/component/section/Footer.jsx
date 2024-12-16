import React from 'react';

const Footer = () => {
    return (
        <div className="bg-primary-white my-10">
            <div className="max-w-container mx-auto px-4 lg:px-0 ">
                {/* flex item start */}
                <div className="sm:flex flex-wrap items-center  gap-x-20 lg:gap-x-0 lg:justify-between border-b-2 pb-6 gap-y-8">
                    {/* Left part */}
                    <div className="w-full lg:w-[50%] sm:w-[40%] ">
                        <img src="/images/Footer/logo.png" alt="Company Logo" className="mb-4" />
                        <p className="font-montserrat-medium text-third-black font-medium text-lg max-w-588 mb-6">
                            Scan a Turning Hearts Medallion to learn about and interact with those who have passed on. 
                            You can also begin documenting the legacy you wish to leave behind.
                        </p>
                        <p className="font-montserrat-medium font-medium text-primary-black text-lg mb-4">
                            Social Media:
                        </p>
                        <div className="flex gap-x-4">
                            <img src="/images/Footer/twitter.png" alt="Twitter" className="w-6 h-6" />
                            <img src="/images/Footer/instagram.png" alt="Instagram" className="w-6 h-6" />
                            <img src="/images/Footer/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
                            <img src="/images/Footer/facebook.png" alt="Facebook" className="w-6 h-6" />
                        </div>
                    </div>
                    {/* Left part end */}

                    {/* Middle part */}
                    <div className="w-full sm:w-1/3 lg:w-1/5 mt-8 sm:mt-0 ">
                        <h5 className="font-montserrat-semibold text-lg font-semibold text-primary-black mb-4">
                            Quick Links
                        </h5>
                        <ul>
                            <li className="font-montserrat-normal text-lg text-secondary-black mb-2 hover:text-primary-black cursor-pointer">
                                Home
                            </li>
                            <li className="font-montserrat-normal text-lg text-secondary-black mb-2 hover:text-primary-black cursor-pointer">
                                FAQ
                            </li>
                            <li className="font-montserrat-normal text-lg text-secondary-black mb-2 hover:text-primary-black cursor-pointer">
                                Country Search
                            </li>
                            <li className="font-montserrat-normal text-lg text-secondary-black mb-2 hover:text-primary-black cursor-pointer">
                                Register
                            </li>
                        </ul>
                    </div>
                    {/* Middle part end */}

                    {/* Right part */}
                    <div className="w-full sm:w-1/3 lg:w-1/5 mr-5">
                        <p className="font-montserrat-normal text-lg text-secondary-black mb-2">
                            (316) 555-0116
                        </p>
                        <p className="font-montserrat-normal text-lg text-secondary-black">
                            deanna.curtis@example.com
                        </p>
                    </div>
                    {/* Right part end */}
                </div>
                {/* flex item end */}

                <div className="sm:flex justify-end mt-4">
                    <p className="font-montserrat-normal text-lg text-third-black">
                        © 2024 Your Company. All rights reserved.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;
