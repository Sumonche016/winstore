"use client";
import Image from "next/image";
import category1 from "../assets/category.png";

const CategorySlider = ({ category }) => {
  return (
    <div>
      <div className=" md:flex gap-4  justify-between">
        {category.map((item, index) => (
          <div key={index} className="relative ">
            <div>
              <div className="w-full">
                <Image className="w-full" src={category1} alt="new" />
              </div>
              <div className="relative">
                <div className="bg-white/80 right-[10px] p-3 category-title  shadow-deep absolute bottom-[15px] w-full">
                  <div className="flex justify-between">
                    <p className="capitalize text-xl">{item}</p>
                    <p className="text-primary text-[1.1rem]">Shop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
