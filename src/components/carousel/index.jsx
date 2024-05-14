// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="carousel"
      >
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/qsnXwGS7KBbX4JLqHvICngtR8qg.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/2ZNFu0hkSVtAI6LRWGIlCPNd1Tj.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}