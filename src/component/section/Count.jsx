import React from 'react';

const Count = () => {
  return (
    <div className="bg-background py-10">
      <div className="max-w-container mx-auto bg-white px-6 py-5 rounded-md shadow-lg">
        {/*====== Title Part start ======*/}
        <div className="text-center mb-2 ">
          <div className="flex justify-center items-center">
            <span className="w-10 h-2 bg-primary-blue rounded-full"></span>
          </div>
          <h2 className="font-montserrat-bold text-5xl text-primary-black mt-2">
            Perfect for every type of traveler
          </h2>
        </div>
        {/*====== Title Part end ======*/}
        {/*====== Image Part start ======*/}
         <div className='px-5  mt-7'>
            <img src="/images/count.png" alt="" className='h-full' />
         </div>
        

        
      </div>
    </div>
  );
};

export default Count;
