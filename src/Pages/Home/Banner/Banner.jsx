import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get("banner.json")
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        freeMode={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper my-4"
      >
        {banner &&
          banner.map((ban, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img src={ban?.banner_image} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Banner;
