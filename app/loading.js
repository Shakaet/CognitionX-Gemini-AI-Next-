import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
      <p className="mt-4 text-lg font-semibold tracking-wide animate-pulse">Loading, please wait...</p>
    </div>
  );
};

export default loading;
