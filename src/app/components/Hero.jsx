"use client";
import banner from "../assets/banner/banner1.png";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Hero = () => {
  return (
    <Swiper
      speed={800}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image className="w-full" src={banner} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="w-full" src={banner} alt="banner image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="w-full" src={banner} alt="banner image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
