import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function CommentCard({name,status,comment,imgURL}) {
  return (
    <div className="px-8 py-4">
      <div className="max-w-xl relative mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-md">
        <div className=" my-2 flex mb-4">
          <div className="absolute -left-8 top-5">
            <img
              src={imgURL} // Replace with your actual image URL
              alt="User Avatar"
              className="w-20 h-20 rounded-full "
            />
          </div>
          <div className="flex justify-start">
            <div className="mx-5"></div>
            <div>
              <h4 className=" text-lg  md:text-xl font-bold">{name}</h4>
              <p className="text-sm text-gray-500">{status}</p>
            </div>
          </div>
          <FaQuoteRight className="ml-auto text-gray-400 text-5xl" />
        </div>
        <p className="text-gray-700 text-base leading-relaxed mt-6 mb-4">
            {comment}
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
