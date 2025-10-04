import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import taxi4 from "../../Images/taxi4.jpg";
import blog1 from "../../Images/taxi-slider-2.jpg";
import blog2 from "../../Images/videoImage.jpg";
import blog3 from "../../Images/taxi-booking.jpg";
import blog4 from "../../Images/contentImage.png";

const blogs = [
  {
    id: 1,
    date: "January 1, 2022",
    author: "Jhonde Doe",
    comments: "No Comments",
    title: "Our first choice for airport transfers and corporate travel",
    desc: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration are many variations of passages of Lorem Ipsum available, ...",
    img: blog1,
  },
  {
    id: 2,
    date: "January 1, 2022",
    author: "Jhonde Doe",
    comments: "No Comments",
    title: "Learn how to get long distance travel in cheap rates",
    desc: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration are many variations of passages of Lorem Ipsum available, ...",
    img: blog2,
  },
  {
    id: 3,
    date: "January 1, 2022",
    author: "Jhonde Doe",
    comments: "No Comments",
    title: "Our first choice for airport transfers and corporate travel",
    desc: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration are many variations of passages of Lorem Ipsum available, ...",
    img: blog3,
  },
  {
    id: 4,
    date: "January 1, 2022",
    author: "Jhonde Doe",
    comments: "No Comments",
    title: "Learn how to get long distance travel in cheap rates",
    desc: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration are many variations of passages of Lorem Ipsum available, ...",
    img: blog4,
  },
];

const slide = {
  img: taxi4,
  title: "Blog",
};

export default function BlogGrid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="relative mt-32 h-[50vh] sm:h-[60vh] md:h-[90vh] flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-lg">
            {slide.title}
          </h1>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Date */}
                <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
                  {blog.date}
                </span>

                {/* Author + Comments */}
                <p className="text-gray-600 text-sm mt-2">
                  by {blog.author} • {blog.comments}
                </p>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold mt-3 hover:text-yellow-400">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 flex-1">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
