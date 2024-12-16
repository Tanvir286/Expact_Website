import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FaqPage = () => {
    // State to track which question is open - default to first item
    const [openIndex, setOpenIndex] = useState(0);

    // FAQs data
    const faqs = [
        { question: "What cars do you have in your inventory?", answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris." },
        { question: "What cars do you have in your inventory?", answer: "Content for question 2." },
        { question: "What cars do you have in your inventory?", answer: "Content for question 3." },
        { question: "What cars do you have in your inventory?", answer: "Content for question 4." },
    ];

    // Toggle function
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='bg-background py-128'>
            <div className='mx-auto max-w-container px-5 lg:px-0'>
                {/* Title part start */}
                <h2 className='font-montserrat-bold text-3xl md:text-5xl font-bold text-four-black text-center mb-4'>FAQs</h2>
                <p className='font-montserrat-normal text-lg text-primary-black font-normal text-center mb-8'>
                    If you have any questions that aren’t listed below, please send your question to:
                    <span className='underline ml-2 '>info@ExpatGlobalGirls.com</span>
                </p>
                {/* Title part end */}

                {/* FAQs List Start */}
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 bg-white mb-5">
                            <button
                                onClick={() => handleToggle(index)}
                                className="flex justify-between items-center w-full py-4 px-6 text-xl font-medium text-[#212121] font-poppins-medium "
                            >
                                {faq.question}
                                <span>
                                    {openIndex === index ? (
                                        <span className="text-2xl"><CiCircleMinus /></span>
                                    ) : (
                                        <span className="text-2xl"><CiCirclePlus /></span>
                                    )}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-[#949494] text-lg font-poppins-medium font-light">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* FAQs List End*/}
            </div>
        </div>
    );
};

export default FaqPage;
