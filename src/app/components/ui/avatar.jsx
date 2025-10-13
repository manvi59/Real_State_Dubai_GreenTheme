// "use client";

// import * as React from "react";
// import * as AvatarPrimitive from "@radix-ui/react-avatar";

// function Avatar({ className = "", ...props }) {
//   return (
//     <AvatarPrimitive.Root
//       data-slot="avatar"
//       className={`relative flex w-10 h-10 shrink-0 overflow-hidden rounded-full ${className}`}
//       {...props}
//     />
//   );
// }

// function AvatarImage({ className = "", ...props }) {
//   return (
//     <AvatarPrimitive.Image
//       data-slot="avatar-image"
//       className={`w-full h-full object-cover ${className}`}
//       {...props}
//     />
//   );
// }

// function AvatarFallback({ className = "", ...props }) {
//   return (
//     <AvatarPrimitive.Fallback
//       data-slot="avatar-fallback"
//       className={`bg-gray-200 flex w-full h-full items-center justify-center rounded-full ${className}`}
//       {...props}
//     />
//   );
// }

// export { Avatar, AvatarImage, AvatarFallback };


// SimpleAvatar.js
import React from "react";

export function Avatar({ src, alt, className = "" }) {
  return (
    <div
      className={`relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 font-bold">
          {alt
            ? alt
                .split(" ")
                .map((n) => n[0])
                .join("")
            : "?"}
        </span>
      )}
    </div>
  );
}
