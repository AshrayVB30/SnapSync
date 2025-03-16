import React from "react";

const Switch = ({ checked, onCheckedChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onCheckedChange}
      />
      <div
        className={`w-10 h-5 flex items-center rounded-full p-1 transition-all duration-300 ${
          checked ? "bg-[#578FCA]" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
};

export default Switch;
