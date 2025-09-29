import React from 'react'

function HomeSlider() {
  return (
    <>
      <div
        className="h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage:
            "url('https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/slider-1-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
            Cheap & Trusted <br className="hidden sm:block" /> Taxi Company
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Enjoy your comfortable trip with <br className="hidden sm:block" /> Conexi Company Taxi
          </p>

          {/* Button */}
          <a
            href="#"
            className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-yellow-500 transition w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  )
}

export default HomeSlider
