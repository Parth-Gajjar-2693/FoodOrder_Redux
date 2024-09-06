import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  descrementQty,
  incrementQty,
  removeFromCart,
} from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";

const ItemCart = ({ id, name, price, qty, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        className="absolute right-7 cursor-pointer text-gray-600 text-[18px]"
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast.error(`${name} Removed`);
        }}
      />
      <img className="w-[50px] h-[50px]" src={img} alt="" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800 mb-2">{name}</h2>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-500 font-bold ">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaPlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="text-gray-600 border-2 p-1 text-xl border-green-500 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300"
            />
            <span>{qty}</span>
            <FaMinus
              onClick={() =>
                qty > 1 ? dispatch(descrementQty({ id })) : (qty = 0)
              }
              className="text-gray-600 border-2 p-1 text-xl border-green-500 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
