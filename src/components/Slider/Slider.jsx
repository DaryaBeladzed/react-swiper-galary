import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Parallax, Controller } from "swiper";
import "swiper/css/bundle";
import "./Slider.scss";
import SliderItem from "./SliderItem";

const Slider = ({ isMain, slides, controller, hideInfo }) => {
  let swiperProps = {
    modules: [Parallax, Controller],
    // слайдер начинается с центра родительского блока
    centeredSlides: true,
    parallax: true,
  };

  if (isMain) {
    // остановка слайдера во время прокрутки в любом месте
    // swiperProps["freeMode"] = true;
    swiperProps["mousewheel"] = true;
    swiperProps["breakpoints"] = {
      0: { slidesPerView: 2.5, spaceBetween: 20 },
      680: { slidesPerView: 3.5, spaceBetween: 60 },
    };
    swiperProps["controller"] = { control: controller };
    // swiperProps["modules"].push(FreeMode);
    swiperProps["modules"].push(Mousewheel);
    swiperProps["onSlideChange"] = (swiper) => {
      if (!swiper.activeIndex) hideInfo(false);
      else hideInfo(true);
    };
    swiperProps["onClick"] = (swiper) => {
      if (swiper.activeIndex === swiper.clickedIndex) {
        if (swiper.clickedSlide.className.includes("opened"))
          swiper.clickedSlide.classList.remove("opened");
        else swiper.clickedSlide.classList.add("opened");
      }
    };
  } else {
    swiperProps["slidesPerView"] = 3.5;
    swiperProps["spaceBetween"] = 60;
    swiperProps["onSwiper"] = controller;
  }

  return (
    <div className={isMain ? "mainSlider" : "bgSlider"}>
      <Swiper {...swiperProps}>
        {slides.map((item, ind) => (
          <SwiperSlide key={ind}>
            <SliderItem item={item} ind={ind} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
