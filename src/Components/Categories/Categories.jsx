import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("categories.json")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 20 },
        480: { slidesPerView: 3, spaceBetween: 40 },
        768: { slidesPerView: 4, spaceBetween: 50 },
        1024: { slidesPerView: 8, spaceBetween: 70 },
      }}
      spaceBetween={30}
      freeMode={true}
      //   pagination={{
      //     clickable: true,
      //   }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper my-4"
    >
      {categories &&
        categories.map((c) => {
          return (
            <SwiperSlide>
              <SingleCategory key={c?.id} category={c}></SingleCategory>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Categories;
