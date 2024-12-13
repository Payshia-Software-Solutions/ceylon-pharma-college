import React from 'react';

function RedyForNext() {
  return (
    <div>
      <div className="text-center mt-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-5">Ready For Next</h1>
        <div className="flex flex-wrap justify-center gap-3 my-5">
          <button className="bg-maincolor px-4 py-2 text-sm sm:text-base text-white rounded-full">
            Request More Info
          </button>
          <button className="bg-maincolor px-4 py-2 text-sm sm:text-base text-white rounded-full">
            Request More Info
          </button>
          <button className="bg-maincolor px-4 py-2 text-sm sm:text-base text-white rounded-full">
            Request More Info
          </button>
        </div>
      </div>
      <div className="w-full h-64 sm:h-80 md:h-[22rem]">
        <img
          src="/assets/images/cover2.jpg"
          className="object-cover object-top w-full h-full"
          alt="Cover Image"
        />
      </div>
    </div>
  );
}

export default RedyForNext;
