// import React, { useState, useRef, useEffect } from "react";

// // Simple Select Component
// export function Select({ options = [], value, onChange, placeholder = "Select..." }) {
//   const [open, setOpen] = useState(false);
//   const selectRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSelect = (option) => {
//     onChange(option);
//     setOpen(false);
//   };

//   return (
//     <div
//       ref={selectRef}
//       style={{
//         position: "relative",
//         width: "200px",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         style={{
//           width: "100%",
//           padding: "8px 12px",
//           borderRadius: "6px",
//           border: "1px solid #ccc",
//           backgroundColor: "#fff",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           cursor: "pointer",
//         }}
//       >
//         <span>{value || placeholder}</span>
//         <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
//           ▼
//         </span>
//       </button>

//       {open && (
//         <ul
//           style={{
//             position: "absolute",
//             top: "100%",
//             left: 0,
//             right: 0,
//             margin: 0,
//             padding: "4px 0",
//             listStyle: "none",
//             border: "1px solid #ccc",
//             borderRadius: "6px",
//             backgroundColor: "#fff",
//             maxHeight: "200px",
//             overflowY: "auto",
//             zIndex: 1000,
//           }}
//         >
//           {options.map((option) => (
//             <li
//               key={option}
//               onClick={() => handleSelect(option)}
//               style={{
//                 padding: "8px 12px",
//                 cursor: "pointer",
//                 backgroundColor: option === value ? "#f0f0f0" : "#fff",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#eee")}
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   option === value ? "#f0f0f0" : "#fff")
//               }
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// // export const { Select};


import React, { useState, useRef, useEffect, createContext, useContext } from "react";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "lucide-react";

// Context for Select
const SelectContext = createContext();

export const Select = ({ value, onChange, children }) => {

  // console.log("jjjjjjjjjjj",value , onChange)
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <SelectContext.Provider value={{ value, onChange, open, toggleOpen, close }}>
      <div className="relative inline-block w-full">{children}</div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children, className, size = "default" }) => {
  const { open, toggleOpen } = useContext(SelectContext);
  return (
    <button
      type="button"
      onClick={toggleOpen}
      className={`border-input flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 ${
        size === "default" ? "h-9" : "h-8"
      } ${className}`}
    >
      {children}
      <ChevronDownIcon className="size-4 opacity-50" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
    </button>
  );
};

export const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext);
  return <span>{value || placeholder}</span>;
};

export const SelectContent = ({ children, className }) => {
  const { open, close } = useContext(SelectContext);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  if (!open) return null;

  return (
    <ul
      ref={ref}
      // className={`bg-popover text-popover-foreground relative z-50 max-h-60 min-w-[8rem] overflow-y-auto rounded-md border shadow-md p-1 ${className}`}
    className={`absolute left-0 top-full mt-1 bg-white z-50 max-h-60 min-w-full overflow-y-auto rounded-md border shadow-md p-1 ${className}`}
    >
      {children}
    </ul>
  );
};

export const SelectItem = ({ children, value: itemValue, className }) => {
  const { value, onChange, close } = useContext(SelectContext);
  const handleClick = () => {
    console.log(itemValue)
    onChange(itemValue);
    close();
  };

  return (
    <li
      onClick={handleClick}
      className={`relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm select-none hover:bg-gray-100 ${
        value === itemValue ? "bg-gray-200 font-medium" : ""
      } ${className}`}
    >
      <span className="absolute right-2 flex items-center justify-center size-3.5">
        {value === itemValue && <CheckIcon className="size-4" />}
      </span>
      {children}
    </li>
  );
};

export const SelectSeparator = ({ className }) => (
  <li className={`bg-border pointer-events-none my-1 h-px -mx-1 ${className}`} />
);

export const SelectScrollUpButton = ({ className }) => (
  <div className={`flex items-center justify-center py-1 ${className}`}>
    <ChevronUpIcon className="size-4" />
  </div>
);

export const SelectScrollDownButton = ({ className }) => (
  <div className={`flex items-center justify-center py-1 ${className}`}>
    <ChevronDownIcon className="size-4" />
  </div>
);

export const SelectLabel = ({ children, className }) => (
  <div className={`text-muted-foreground px-2 py-1.5 text-xs ${className}`}>{children}</div>
);

