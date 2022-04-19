import "./Slider.scss";

const SliderItem = ({ item, ind }) => {
  return (
    <div
      className="swiper_img"
      style={{ backgroundImage: `url(./images/${item}.jpg)` }}
      data-swiper-parallax={`${ind % 2 ? 20 : 30}%`}
    ></div>
  );
};

export default SliderItem;
