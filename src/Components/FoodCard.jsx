import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[240px] bg-white p-5 flex flex-col gap-2 rounded-lg ">
      <img
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt=""
      />
      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex  justify-between ">
        <span className="flex items-center justify-center">
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>

        <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                price,
                rating,
                img,
                qty: 1,
              })
            );
            handleToast(name);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
