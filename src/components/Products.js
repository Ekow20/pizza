import React from "react";

const Products = ({ heading, data }) => {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <h2 className="text-4xl text-center py-8">{heading}</h2>
      <div className="flex flex-wrap mx-auto justify-center">
        {data.map((item, index) => (
          <div
            className="w-72 mx-7 flex flex-col justify-center my-7 xl:my-0 "
            key={index}
          >
            <img
              src={item?.img}
              style={{ boxShadow: "8px 8px #fdc500" }}
              alt=""
              className="max-w-full w-72 h-64  "
            />
            <h3 className="text-2xl text-center mt-2  font-bold">
              {item?.name}
            </h3>
            <p className="text-lg text-center p-3">{item?.desc} </p>
            <h2 className="text-3xl text-center font-bold">{item?.price}</h2>
            <button
              className="p-3 bg-red-500
             hover:bg-yellow-400 hover:text-black border-r-yellow-400
             transition-all hover:scale-105 duration-100 ease-out border-r-4 rounded mt-2 text-lg"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
