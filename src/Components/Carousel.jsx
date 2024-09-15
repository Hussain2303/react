import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './carousel.css';
import './styles.css';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        autoplay={{
          delay: 2000,  // Delay between transitions (in milliseconds)
          disableOnInteraction: false,  // Keeps autoplay running even after user interactions
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="slider">
          <SwiperSlide><div className="s-1"><img src="https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Asim_Banner.webp?v=1722369053" alt='Slide 1'></img></div></SwiperSlide>
          <SwiperSlide><div className="s-1"><img src="https://cdn.shopify.com/s/files/1/0722/8106/3702/files/quantum_banner_res_updated.webp?v=1719584430" alt='Slide 2'></img></div></SwiperSlide>
          <SwiperSlide><div className="s-1"><img src="https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Main-Desktop.jpg?v=1721658588" alt='Slide 3'></img></div></SwiperSlide>
          <SwiperSlide><div className="s-1"><img src="https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Carbon_desktop_banner.webp?v=1724852835" alt='Slide 4'></img></div></SwiperSlide>
          <SwiperSlide><div className="s-1"><img src="https://cdn.shopify.com/s/files/1/0722/8106/3702/files/Save-tember_ads_1345_x_525_px_home.webp?v=1725520851" alt='Slide 5'></img></div></SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}

export default Carousel;
