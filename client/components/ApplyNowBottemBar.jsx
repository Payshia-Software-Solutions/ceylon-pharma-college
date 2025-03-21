import React from "react";
import { CheckCircle } from "lucide-react";

function ApplyNowBottomBar() {
  return (
    <div className="h-44 w-full bg-gradient-to-r from-[#00b67d] to-[#008f65]  flex flex-col items-center justify-center">
      <h2 className="text-white text-4xl font-bold mb-4">APPLY NOW</h2>
      <a
        href="https://portal.pharmacollege.lk/register"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-black bg-white text-lg font-semibold py-2 px-6 w-lg rounded-full flex items-center gap-2 mt-6"
      >
        <CheckCircle size={20} />
        Click Here
      </a>
    </div>
  );
}

export default ApplyNowBottomBar;
