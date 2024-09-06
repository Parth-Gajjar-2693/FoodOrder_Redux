import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FootItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Addes ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-12 justify-center lg:justify-start mx-14 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            // return food;
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            // return category === food.category;
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FootItems;
