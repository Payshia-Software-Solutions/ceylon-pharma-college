import React from 'react'

function PersonInfoCard({name,full_name}) {
  return (
    <div className="my-8 py-6 px-6 md:py-8 md:px-10 bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex justify-center md:justify-center">
        <img
          src="/assets/testimonial/doctor1.jpg"
          className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="md:col-span-2 max-w-lg">
        <h4 className="text-xl md:text-2xl font-bold my-2 md:my-4">
          Completed by <span>{name}</span>
        </h4>
        <span className="text-lg md:text-xl font-semibold">
          March 25, 2024
        </span>
        <p className="text-sm mt-2">
         <span>{full_name}</span> 's account is verified.
          Ceylon Pharma College certifies their successful completion
          of Certificate Course in Pharmacy Practice
        </p>
      </div>
    </div>
  </div>
  )
}

export default PersonInfoCard