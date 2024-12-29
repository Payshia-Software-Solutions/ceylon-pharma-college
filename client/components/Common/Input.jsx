import React from 'react';

function Input({ id, name, placeholder, type , value, onChange }) {
  return (
    <div className="relative">
      <input
        className="text-md peer w-full rounded-lg border-2 border-stroke bg-transparent p-3 font-bold focus:border-maincolor focus:outline-none   focus:ring-0"
        placeholder=" "
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="peer-focus:text-gray-600 absolute left-3 top-3 z-10 origin-[0] -translate-y-6 scale-75 transform bg-white px-2 text-sm font-bold text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sm"
      >
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
