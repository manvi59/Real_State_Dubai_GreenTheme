"use client";

import React from "react";
import { CheckIcon } from "lucide-react";

const Checkbox = ({ className = "", checked, onChange, ...props }) => {
  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer appearance-none h-4 w-4 border rounded-md border-gray-400 bg-white checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-pointer"
        {...props}
      />
      {/* Checkmark icon only shows when checked */}
      <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {checked && <CheckIcon className="w-3.5 h-3.5 text-white" />}
      </span>
    </label>
  );
};

export { Checkbox };
