// import React, { useState } from "react";

// function Tabs({ children,onValueChange, className = "", defaultValue = 0 , }) {
//   const [activeIndex, setActiveIndex] = useState(defaultValue);
  

//   return (
//     <div className={`flex flex-col gap-2 ${className}`}>
//       {React.Children.map(children, (child, index) =>
//         React.cloneElement(child, {
//           isActive: index === activeIndex,
//           onClick: () => setActiveIndex(index),
//         })
//       )}
//     </div>
//   );
// }

// function TabsList({ children, className = "" }) {
//   return <div className={`inline-flex bg-gray-100 rounded-xl p-1 ${className}`}>{children}</div>;
// }

// function TabsTrigger({value, children, onClick, isActive, className = "" }) {
//    return (
//     <button
//       onClick={onClick}
//       className={`flex-1 px-3 py-1 rounded-xl text-sm font-medium transition ${
//         isActive ? "bg-white shadow" : "text-gray-600 hover:bg-gray-200"
//       } ${className}`}
//     >
//       {children}
//     </button>
//   );
// }

// function TabsContent({ children, isActive, className = "" }) {
//   return isActive ? <div className={`mt-2 ${className}`}>{children}</div> : null;
// }

// export { Tabs, TabsList, TabsTrigger, TabsContent };


import React from "react";

function Tabs({ children, onValueChange, className = "", value, defaultValue = 0 }) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const activeIndex = isControlled ? value : internalValue;

  const handleTabChange = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          activeValue: activeIndex,
          onTabChange: handleTabChange,
        })
      )}
    </div>
  );
}

function TabsList({ children, className = "", activeValue, onTabChange }) {
  return (
    <div className={`inline-flex bg-gray-100 rounded-xl p-1 ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: child.props.value === activeValue,
          onClick: () => onTabChange(child.props.value),
        })
      )}
    </div>
  );
}

function TabsTrigger({ value, children, onClick, isActive, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-3 py-1 rounded-xl text-sm font-medium transition-all duration-200 ${
        isActive
          ? "inline-flex items-center  rounded-md font-medium transition-all disabled:opacity-50 disabled:pointer-events-none  text-white    bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          : "text-gray-600 hover:bg-gray-200"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, activeValue, children, className = "" }) {
  return value === activeValue ? (
    <div className={`mt-2 ${className}`}>{children}</div>
  ) : null;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
