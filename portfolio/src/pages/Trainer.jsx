import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Trainer = () => {
    const [swiperRef, setSwiperRef] = useState(null);
   
  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  const breakpoints = {
    375:{
        slidesPerView: 1,
        spaceBetween: 20,
    },
    872: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <div className="mt-16 px-4" id="Coaches">
       <h1 className="border-b border-b-gray-500 pb-4 font-primary text-3xl">
        Coache's
      </h1>
      <Swiper 
        onSwiper={setSwiperRef}
        slidesPerView={3}
        breakpoints={breakpoints}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={`relative w-full`}>
          <img
            src={img1}
            className="object-contain w-[20rem] h-[20rem] shadows"
            alt=""
          />
          <div className="bg-gray-500 w-[400px] h-auto p-2 rounded-md absolute top-[60%]">
            <h1>Lisa Skyler</h1>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, enim?"
            </p>
            <button className="flex justify-end items-center w-full">
              <FaLongArrowAltRight size={40} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src={img2}
            className="object-contain w-[20rem] h-[20rem] shadows"
            alt=""
          />
          <div className="bg-gray-500 w-[400px] h-auto p-2 rounded-md absolute top-[60%]">
            <h1>Lisa Skyler</h1>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, enim?"
            </p>
            <button className="flex justify-end items-center w-full">
              <FaLongArrowAltRight size={40} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src={img3}
            className="object-contain w-[20rem] h-[20rem] shadows"
            alt=""
          />
          <div className="bg-gray-500 w-[400px] h-auto p-2 rounded-md absolute top-[60%]">
            <h1>Lisa Skyler</h1>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, enim?"
            </p>
            <button className="flex justify-end items-center w-full">
              <FaLongArrowAltRight size={40} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src={img4}
            className="object-contain w-[20rem] h-[20rem] shadows"
            alt=""
          />
          <div className="bg-gray-500 w-[400px] h-auto p-2 rounded-md absolute top-[60%]">
            <h1>Lisa Skyler</h1>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, enim?"
            </p>
            <button className="flex justify-end items-center w-full">
              <FaLongArrowAltRight size={40} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-full">
          <img
            src={img5}
            className="object-contain w-[20rem] h-[20rem] shadows"
            alt=""
          />
          <div className="bg-gray-500 w-[400px] h-auto p-2 rounded-md absolute top-[60%]">
            <h1>Lisa Skyler</h1>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, enim?"
            </p>
            <button className="flex justify-end items-center w-full">
              <FaLongArrowAltRight size={40} />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trainer;
