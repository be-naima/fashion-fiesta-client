import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './slider.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Slide } from "react-awesome-reveal";
import { ModeContext } from "../../Providers/ModeProvider";
const Slider = () => {
    const { darkMode, handleModeToggle } = useContext(ModeContext)
    return (
        <div className="background-img pb-10">
            <Slide Zoom> <h2 className={`mb-5  text-5xl font-bold leading-tight ${darkMode? 'text-white': 'text-blue-950 '}   pt-20 text-center`}>Gallery</h2></Slide>
             <div className="pb-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/4f/21/ef/4f21ef4c3491adc03bfb0d63463fc81f.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/13/26/92/1326924f78160bfe8874022c21743e46.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/2b/ea/98/2bea98479f5744e91ce6ddbc9687ac44.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/f0/de/d2/f0ded2230e35a0184072c19d58e9411a.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/82/79/55/827955a4860d2827f6b453d86e0bcd62.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/68/68/b7/6868b754e29eb01a0791b7c4d3290c50.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/73/ea/83/73ea83e2381b25a04eff38f4a9956d60.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/e9/4e/86/e94e86e8e3573e30f6fc81e7a88fe5bb.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/564x/d7/3c/61/d73c61593ce87633671933624be123f2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    );
};

export default Slider;