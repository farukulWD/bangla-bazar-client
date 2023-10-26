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
    <div>
      <Swiper
        // breakpoints={{
        //   320: { slidesPerView: 2, spaceBetween: 20 },
        //   480: { slidesPerView: 3, spaceBetween: 40 },
        //   768: { slidesPerView: 4, spaceBetween: 50 },
        //   1024: { slidesPerView: 8, spaceBetween: 70 },
        // }}

        // spaceBetween={30}
        freeMode={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper my-4"
      >
        {banner &&
          banner.map((ban) => {
            return (
              <SwiperSlide>
                <div key={ban?.id}>
                  <img src={ban?.banner_image} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Banner;
