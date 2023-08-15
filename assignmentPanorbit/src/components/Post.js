import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Post = () => {
  return (
    <div className="flex gap-4 mt-4 p-4">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      {/* <div></div> */}
      <div className="w-[80%]">
        <Header />
        <div className="flex items-center justify-center h-full">
          <div className="text-[70px] text-gray-400 opacity-60 font-extrabold">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
