import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { Users, DollarSign, Banknote } from "lucide-react";

function ExploreCard({
  title,
  description,
  buttontext,
  imgURL,
  rating,
  slug,
  price,
  seat,
}) {
  const formatCurrency = (amount, locale = "en-US", currency = "USD") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  };

  return (
    <>
      <Link href={`/course/${slug}`}>
        <div className="max-w-full relative max-h-full sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] my-5 rounded-xl overflow-hidden   bg-white md:hover:scale-95 md:hover:shadow-xl transition-transform duration-300 shadow">
          {/* Header  */}
          <div className="h-[80px]  bg-maincolor bg-opacity-80 w-full px-4 py-2 flex justify-center items-center">
            <h3 className="text-lg sm:text-xl lg:text-[1.2rem] text-center flex justify-center font-bold text-white mb-2">
              {title}
            </h3>
          </div>
          {/* Image */}
          <img
            className="w-full h-[12rem] sm:h-[15rem] lg:h-[18rem] object-cover border-b-4 border-maincolor"
            src={imgURL}
            alt={title}
          />

          {/* Content */}
          <div className="pt-4 sm:pt-6 ">
            <div className="px-4 sm:px-6">
              {/* <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#870024] mb-2">
              {title}
            </h3> */}

              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {index < Math.floor(rating) ? (
                      <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                    ) : (
                      <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    )}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
                {description}
              </p>

              {/* Icons */}
              <div className="flex justify-between items-center mb-4">
                {/* Money Icon */}
                <div className="flex items-center space-x-2">
                  <Banknote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                  <span className="text-gray-700 text-sm sm:text-lg font-bold">
                    {formatCurrency(price, "en-LK", "LKR")}{" "}
                    {/* Change "LKR" to your currency */}
                  </span>
                </div>

                {/* Seat Icon */}
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                  <span className="text-gray-700 text-sm sm:text-lg font-bold">
                    {seat}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right-Aligned ss */}
          <div className="flex pt-1 p-2">
            <button className="bg-gradient-to-r from-[#00b67d] to-[#008f65] text-white uppercase w-full text-xs sm:text-sm px-3 sm:px-4 py-2 transition  rounded-lg">
              <Link href={`/course/${slug}`}> More Details </Link>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ExploreCard;
