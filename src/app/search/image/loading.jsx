import React from "react";

function loading() {
  return (
    <div className="p-10 mx-2 lg:pl-52 max-w-6xl flex flex-col sm:flex-row sm:space-x-4 pb-42">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="hidden sm:inline-flex sm:space-x-4">
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
          <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default loading;
