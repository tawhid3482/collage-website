import logo from "../../assets/collage-removebg-preview.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className=" md:flex my-5 ">
        <div className="md:w-2/3 p-8 bg-slate-500 text-white">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              Shaking off the working week! What’s on the agenda for the
              weekend? by KonstantinKolosov via… https://t.co/fSyxq53H6P 18
              hours ago
            </SwiperSlide>
            <SwiperSlide>
              RT @placeitapp: Making a #YouTube banner for your channel is easy
              with Placeit’s #bannermaker! Make your own in sec…
              https://t.co/0X22tX3wtm yesterday
            </SwiperSlide>
            <SwiperSlide>
              RT @placeitapp: Making a #YouTube banner for your channel is easy
              with Placeit’s #bannermaker! Make your own in sec…
              https://t.co/0X22tX3wtm yesterday
            </SwiperSlide>
          </Swiper>
        </div>
      <Link to={'/course'} className="">
      <div className="md:1/3 bg-gradient-to-r from-purple-600 to-pink-500 flex justify-center items-center text-white p-5">
          <img src={logo} className="w-32 h-24" alt="" />
          <p className="text-2xl font-bold p-4 rounded-lg">
            Apply To Sylhet Polytacnic Institute
          </p>
         
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Slider;
