import React from 'react';

const WorkItem2 = ({ title, text, image }) => {
    return (
        <div className='work-item'>
            <div className='flex justify-center'>
                <img src={image} alt={title} />
            </div>
            <h4 className='font-montserrat-semibold text-2xl font-semibold text-primary-black mt-5'>{title}</h4>
            <p className='font-montserrat-normal font-normal text-lg text-third-black max-w-528 mt-5'>{text}</p>
        </div>
    );
};

export default WorkItem2;
