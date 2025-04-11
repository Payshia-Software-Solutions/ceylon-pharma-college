import React from "react";

function NameCard({ username, name, onClick }) {
  return (
    <div
      className="max-w-xl text-black hover:text-white"
      onClick={onClick} // Add onClick handler
    >
      <div className="flex items-center bg-white hover:bg-maincolor hover:bg-opacity-40 bg-opacity-40 p-2 rounded-lg shadow cursor-pointer">
        {/* Profile Image */}
        <div>
          <img
            src="/assets/icon/user.png"
            className="rounded-full w-14 h-14 object-cover"
            alt="Profile"
          />
        </div>

        {/* Text Content */}
        <div className="flex items-center ml-4 text-lg font-semibold">
          <h1>{username}</h1>
          {/* Divider */}
          <span className="mx-4 h-6 border-l-2 border-gray-600"></span>
          <div>
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
