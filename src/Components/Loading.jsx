import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center space-x-2 h-screen">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce200"></div>
      <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce400"></div>
      <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce200"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce400"></div>
    </div>
  );
}

export default Loading