import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-500 h-screen w-screen ">
      <h1 className="text-3xl text-center">Products</h1>
      <div className="bg-blue-100 grid grid-cols-4 items-center justify-center gap-3 p-4">
        <div className=" bg-white flex flex-col items-center justify-center rounded-3xl overflow-hidden">
          <img
            className="object-cover w-full"
            src="https://images.unsplash.com/photo-1727093493864-0bcbd16c7e6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SXBob25lJTIwMTYlMjBwcm98ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h2>Apple Iphone 16 Pro</h2>
        </div>
        <div>
          <h2>h</h2>
        </div>
        <div>
          <h2>h</h2>
        </div>
        <div>
          <h2>h</h2>
        </div>
        <div>
          <h2>h</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
