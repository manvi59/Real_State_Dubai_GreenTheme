import React, { useMemo } from "react";

function Badge({ 
  className = "", 
  variant = "default", 
  asChild = false, 
  children, 
  ...props 
}) {
  // Decide the element type
  const Comp = asChild ? "span" : "span"; // you can replace 'span' with 'div' or 'a' if needed

  // Variant classes
  const variantClasses = useMemo(() => {
    switch (variant) {
      case "secondary":
        return "border-transparent bg-blue-500 text-white hover:bg-blue-600";
      case "destructive":
        return "border-transparent bg-red-600 text-white hover:bg-red-700";
      case "outline":
        return "border border-gray-300 text-gray-700 hover:bg-gray-100";
      case "green":
        return "border-transparent bg-green-600 text-white hover:bg-green-600";
      default:
        return "border-transparent bg-green-500 text-white hover:bg-green-600";
    }
  }, [variant]);

  // Base classes
  const baseClasses = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap gap-1";

  return (
    <Comp 
      className={`${baseClasses} ${variantClasses} ${className}`} 
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Badge;
