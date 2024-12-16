import React from 'react';

const TitleSection = ({ rotatedText, heading, subText }) => {
    return (
        <div className='mb-10 relative'>
            <div className='flex justify-center border'>
                <p
                    className='font-montserrat-normal text-sm bg-[rgba(8,114,186,0.3)] px-3 py-2 rounded-md mb-6'
                    style={{
                        transform: 'rotate(-14deg)',
                        display: 'inline-block',
                    }}
                >
                    {rotatedText}
                </p>
            </div>
            <h2 className='font-montserrat-bold text-3xl md:text-5xl font-bold text-four-black text-center mb-4'>
                {heading}
            </h2>
            <p className='font-montserrat-normal mx-auto text-lg text-secondary-black font-normal text-center mb-8 max-w-[930px]'>
                {subText}
            </p>
        </div>
    );
};

export default TitleSection;
