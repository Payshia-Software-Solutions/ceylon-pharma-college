"use client";
import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TestamonialCard = ({ name, role, image, comment, rating = 0 }) => {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-md h-full">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          {/* <p className="text-sm text-gray-500">{role}</p> */}
        </div>
      </div>
      <div className="flex text-yellow-400 text-xl mb-2">
        {[1, 2, 3, 4, 5].map((i) =>
          i <= Math.floor(rating) ? (
            <AiFillStar key={i} />
          ) : (
            <AiOutlineStar key={i} />
          )
        )}
      </div>
      <div className="text-sm text-gray-700">
        {comment.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default TestamonialCard;
