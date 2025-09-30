import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HomeSlider() {
  const slides = [
    {
      img: "https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/slider-1-2.jpg",
      title: "Cheap & Trusted Taxi Company",
      desc: "Enjoy your comfortable trip with Conexi Company Taxi",
    },
    {
      img: "https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/slider-1-1.jpg",
      title: "Cheap & Trusted Taxi Company",
       desc: "Enjoy your comfortable trip with Conexi Company Taxi",
    },
    {
      img: "https://images.unsplash.com/photo-1490650404312-a2175773bbf5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D",
     title: "Cheap & Trusted Taxi Company",
       desc: "Enjoy your comfortable trip with Conexi Company Taxi",
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










