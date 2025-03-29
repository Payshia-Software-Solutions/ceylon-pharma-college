"use client";
import React from "react";
import Image from "next/image";

const TestamonialCard = ({ name, role, image, comment }) => {
  return (
    <div className="border-white border rounded-xl p-6  min-h-60 max-w-lg bg-maincolor text-white">
      <div className="flex items-center mb-4">
        <Image 
          src={image}  
          width={48} 
          height={48} 
          alt={`Profile picture of ${name}`} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
      <p className="text-gray-200">{comment}</p>
    </div>
  );
};

export default TestamonialCard;
