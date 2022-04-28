import React from "react";

 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// // import required modules
// // assets/images/paths/design.svg
import { Pagination, Navigation } from "swiper";


const Slider = () => {
  return (
     
      <div className="w-full">
      <section>
          <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="assets/images/paths/sf.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/images/paths/fullstack.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/images/paths/design.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/images/paths/flutter.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/images/paths/database.svg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="assets/images/paths/montage.svg" alt="" /></SwiperSlide>
        </Swiper>
      </section>
    </div>

  
  )
}

export default Slider;
