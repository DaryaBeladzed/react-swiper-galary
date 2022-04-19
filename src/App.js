// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Mousewheel, Parallax, Controller } from "swiper";
import "swiper/css/bundle";
import "./App.scss";
import { useState } from "react";
import Slider from "./components/Slider/Slider";
import Info from "./components/Info/Info";

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [isInfoHidden, setIsInfoHidden] = useState(false);

  console.log(isInfoHidden);

  return (
    <main>
      <Info hide={isInfoHidden}/>
      <Slider
        isMain={true}
        slides={slides}
        controller={controlledSwiper}
        hideInfo={setIsInfoHidden}
      />
      <Slider isMain={false} slides={slides} controller={setControlledSwiper} />
    </main>
  );
};

export default App;
