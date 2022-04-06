import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SpaceShipImg from "./images/spaceship.png";
import URImg from "./images/UR.png";
import "./style.scss";

const ItemList = () => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const pagination = {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} custom-pagination__number"></span>`;
      // return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="item-list">
      {/* <img
        className="item-list__border item-list__border--left"
        src={`${PUBLIC_URL}/images/product/border-product-left.png`}
        alt=""
      /> */}
      <Swiper
        className="my-swiper"
        spaceBetween={50}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="item">
            <h3 className="item__heading">
              Name spaceship
              <div className="item__sub-heading">
                Rate
                <img className="" src={URImg} alt="" />
              </div>
              <img className="item__image" src={SpaceShipImg} alt="" />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <h3 className="item__heading">
              Name spaceship
              <div className="item__sub-heading">
                Rate
                <img className="" src={URImg} alt="" />
              </div>
              <img className="item__image" src={SpaceShipImg} alt="" />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <h3 className="item__heading">
              Name spaceship
              <div className="item__sub-heading">
                Rate
                <img className="" src={URImg} alt="" />
              </div>
              <img className="item__image" src={SpaceShipImg} alt="" />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <h3 className="item__heading">
              Name spaceship
              <div className="item__sub-heading">
                Rate
                <img className="" src={URImg} alt="" />
              </div>
              <img className="item__image" src={SpaceShipImg} alt="" />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <h3 className="item__heading">
              Name spaceship
              <div className="item__sub-heading">
                Rate
                <img className="" src={URImg} alt="" />
              </div>
              <img className="item__image" src={SpaceShipImg} alt="" />
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination"></div>
      {/* <img
        className="item-list__border item-list__border--right"
        src={`${PUBLIC_URL}/images/product/border-product-right.png`}
        alt=""
      /> */}
    </div>
  );
};

export default ItemList;
