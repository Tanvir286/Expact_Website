import React from 'react';

const Stepper = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-white border-2 border-blue-500 text-black flex items-center justify-center font-bold rounded-full">
          1
        </div>
        <div className="h-36 border-l-2 border-dashed border-[#0872BA]"></div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-white border-2 border-blue-500 text-black flex items-center justify-center font-bold rounded-full">
          2
        </div>
        <div className="h-36 border-l-2 border-dashed border-[#0872BA]"></div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-white border-2 border-blue-500 text-black flex items-center justify-center font-bold rounded-full">
          3
        </div>
        <div className="h-36 border-l-2 border-dashed border-[#0872BA]"></div>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-white border-2 border-blue-500 text-black flex items-center justify-center font-bold rounded-full">
          4
        </div>
      </div>
    </div>
  );
};

export default Stepper;
