"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const Slider = ({ className = "", defaultValue, value, min = 0, max = 100, ...props }) => {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
    ? defaultValue
    : [min, max];

  return (
    <SliderPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={`relative flex w-full touch-none items-center select-none ${className}`}
      {...props}
    >
      <SliderPrimitive.Track className="relative grow overflow-hidden rounded-full bg-gray-200 h-2">
        <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
      </SliderPrimitive.Track>

      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block w-4 h-4 rounded-full bg-white border border-blue-500 shadow hover:bg-blue-100 focus:outline-none"
        />
      ))}
    </SliderPrimitive.Root>
  );
};

export { Slider };
