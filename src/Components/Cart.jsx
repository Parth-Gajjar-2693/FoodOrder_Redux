import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[23vw] h-full bg-white p-4 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold text-gray-800 ">My Order</span>
          <IoClose
            className="border-2 border-gray-900 text-gray-900 font-bold p-1 text-2xl rounded-md hover:text-green-700 hover:border-green-700 cursor-pointer"
            onClick={() => setActiveCart(!activeCart)}
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold opacity-25 mt-[12rem]">
            Your cart is empty
          </h2>
        )}
        <div className="absolute bottom-0 text-sm mb-5">
          <h3 className="text-gray-500">Items : {totalQty}</h3>
          <h3 className="text-gray-500">Total Amount : {totalPrice} </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg hover:bg-green-600 w-[90vw] lg:w-[18vw]"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:scale-105 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
