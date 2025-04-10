import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

function Breadcrumb({ crumbs, fontColor = "grey" }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mx-4 my-2 p-2 flex items-center gap-1 text-sm md:text-lg text-gray-600">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li>
              <Link
                href={crumb.href}
                className={`block transition text-[${fontColor}] hover:text-gray-700`}
              >
                {crumb.icon ? (
                    <FaHome/>
            
                ) : (
                  crumb.label
                )}
              </Link>
            </li>
            {index < crumbs.length - 1 && (
              <li className="rtl:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill={fontColor}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
