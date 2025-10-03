import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import taxi1 from "../../Images/taxi-slider-1.jpg"
import taxi2 from "../../Images/taxi-slider-2.jpg"
import taxi3 from "../../Images/taxi-slider-3.jpeg"
import taxi4 from "../../Images/taxi4.jpg"


function HomeSlider() {
  const slides = [
    {
      img: taxi1,
      title: "Affordable and Trusted Taxi Services 24/7 ",
      desc: "Enjoy your ride with ultimate comfort and guaranteed confirmation. ",
    },
    {
       img: taxi2,
       title: "Affordable and Trusted Taxi Services 24/7 ",
       desc: "Enjoy your ride with ultimate comfort and guaranteed confirmation. ",
    },
    {
       img: taxi3,
       title: "Affordable and Trusted Taxi Services 24/7 ",
       desc: "Enjoy your ride with ultimate comfort and guaranteed confirmation. ",
    },
      {
       img: taxi4,
       title: "Affordable and Trusted Taxi Services 24/7 ",
       desc: "Enjoy your ride with ultimate comfort and guaranteed confirmation. ",
    },
  ];

  return (
    <div className="relative mt-32">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-[80vh] md:h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full flex items-center justify-center text-center text-white px-4"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-3xl">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-8xl font-bold leading-snug drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Subtext */}
                <p className="mt-4 text-base sm:text-lg md:text-2xl drop-shadow-md">
                  {slide.desc}
                </p>

                {/* Button */}
                <a
                  href=""
                  className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-yellow-500 transition w-full sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSlider;










