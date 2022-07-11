import React from "react";
import "./styles/testimonial.scss";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, provident aspernatur nihil eum itaque ad commodi? Vero non in id vel explicabo. Nobis facilis illo animi illum eius aspernatur. Reprehenderit.",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, provident aspernatur nihil eum itaque ad commodi? Vero non in id vel explicabo. Nobis facilis illo animi illum eius aspernatur. Reprehenderit.",
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, provident aspernatur nihil eum itaque ad commodi? Vero non in id vel explicabo. Nobis facilis illo animi illum eius aspernatur. Reprehenderit.",
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, provident aspernatur nihil eum itaque ad commodi? Vero non in id vel explicabo. Nobis facilis illo animi illum eius aspernatur. Reprehenderit.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2> 
      <Swiper
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
