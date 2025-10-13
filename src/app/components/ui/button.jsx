
// import React from "react";

// export default function Button({ children, onClick, className = "" }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`inline-flex items-center justify-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
//     >
//       {children}
//     </button>
//   );
// }


import React, { useMemo } from "react";

function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  // Decide element type
  const Comp = asChild ? "span" : "button";

  // Variant classes
  const variantClasses = useMemo(() => {
    switch (variant) {
      case "destructive":
        return "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400";
      case "outline":
        return "border bg-white text-gray-800 hover:bg-gray-100";
      case "secondary":
        return "bg-blue-500 text-white hover:bg-blue-600";
      case "ghost":
        return "bg-transparent hover:bg-gray-100 text-gray-800";
      case "link":
        return "text-blue-600 underline hover:no-underline";
      default:
        return "bg-green-500 text-white hover:bg-green-600";
    }
  }, [variant]);

  // Size classes
  const sizeClasses = useMemo(() => {
    switch (size) {
      case "sm":
        return "h-8 px-3 text-sm";
      case "lg":
        return "h-10 px-6 text-lg";
      case "icon":
        return "h-9 w-9 p-2";
      default:
        return "h-9 px-4 text-sm";
    }
  }, [size]);

  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all disabled:opacity-50 disabled:pointer-events-none";

  return (
    <Comp
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;

