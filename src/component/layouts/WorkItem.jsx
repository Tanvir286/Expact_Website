import React from 'react';

const WorkItem = ({ title, text, image }) => {
    return (
        <div className="work-item">
            <h4 className="font-montserrat-semibold text-2xl font-semibold text-primary-black">{title}</h4>
            <p className="font-montserrat-normal font-normal text-lg text-third-black max-w-528 mt-5">{text}</p>
            <div className="flex justify-center">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

export default WorkItem;
