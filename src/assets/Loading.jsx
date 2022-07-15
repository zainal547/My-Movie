import React from "react";

function Loading() {
  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <div className="relative w-24 h-24 animate-spin bg-gradient-to-r from-pink-600 via-indigo-600 to-green-600 rounded-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}

export default Loading;
