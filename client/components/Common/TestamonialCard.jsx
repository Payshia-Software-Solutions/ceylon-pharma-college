"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TestamonialCard = ({ name, role, image, comment, rating = 0 }) => {
  return (
    <div className="border-white border rounded-xl p-6 min-h-60 max-w-lg bg-maincolor text-white">
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

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= rating ? (
            <AiFillStar key={star} className="text-yellow-400 text-xl" />
          ) : (
            <AiOutlineStar key={star} className="text-yellow-400 text-xl" />
          )
        )}
      </div>

      <p className="text-gray-200">{comment}</p>
    </div>
  );
};

export default TestamonialCard;
