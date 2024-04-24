"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import Link from "next/link";

const ProductCard = ({ products }) => {
  return (
    <div className="flex gap-4 justify-between">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 5,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
      >
        {products.slice(0, 10).map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/product/${item.id}`}>
              <div className="border border-borderPrimary p-6">
                <p className="capitalize">{item.category}</p>
                <p className="truncate my-2 text-[#034E53] capitalize text-xl">
                  {" "}
                  {item.title}
                </p>

                <div className="flex justify-start items-start w-[158px] h-[129px] my-4">
                  <Image
                    src={item.image}
                    width="100"
                    height={100}
                    style={{ width: "100%", height: "100%" }}
                    className="mx-auto"
                    alt="machine"
                  />
                </div>

                <div className="text-center">
                  <h1 className="text-primary text-center my-4">
                    RS {item.price}.000
                  </h1>
                  <button className="w-[158px] h-[35px] mx-auto bg-button text-white">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCard;
