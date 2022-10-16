import {Card} from '../cards/Card';
import {productos} from '../../../static/images';
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Container.css";

// import required modules
import { Pagination, Navigation } from "swiper";




export const ContainerImages = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(productos)
    }, []);
  return (
    <>
      <Swiper
        /* slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={4} */
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        centeredSlides={true}
        breakpoints={{
          "200": {
            slidesPerView: 1,
            spaceBetween: 100,
            slidesPerGroup: 1
          },
            "300": {
              slidesPerView: 1,
              spaceBetween: 100,
              slidesPerGroup: 1
            },
            "400": {
              slidesPerView: 2,
              spaceBetween: 100,
              slidesPerGroup: 2
            },
            "500": {
              slidesPerView: 2,
              spaceBetween: 100,
              slidesPerGroup: 2
            },
            "600": {
              slidesPerView: 3,
              spaceBetween: 100,
              slidesPerGroup: 3
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 100,
              slidesPerGroup: 3
            },
            "1024": {
              slidesPerView: 4,
              spaceBetween: 100,
              slidesPerGroup: 4
            },
          }}
      >
        {
            products.map((producto, index)=>
                <SwiperSlide key={index}>
                  <Card name={producto.name}
                    image={producto.image}
                    price={producto.price}
                  />
                </SwiperSlide>
            )
        }
      </Swiper>
    </>
    
  )
}
