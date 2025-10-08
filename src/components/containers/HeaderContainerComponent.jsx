import React from "react";

const HeaderContainerComponent = ({ children, className }) => {
  return (
    <div
      className={`main-container-class w-full mx-auto p-1 bg-gray-100 font-bodyFont text-xl sticky top-0 z-[999] px-4 xl:px-0 py-2  flex justify-center`}
    >
      {children}
    </div>
  );
};

export default HeaderContainerComponent;
