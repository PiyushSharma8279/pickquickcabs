import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import WhyChooseUs from "../../Components/Home/WhyChooseUs";
import Content from "../../Components/Home/Content";
import taxi2 from "../../Images/taxi-slider-2.jpg"
import AboutContent from "./AboutContent";

function About() {
    const slide = {
        img: taxi2,
        title: "About",
    };

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div
                className="relative mt-32 h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white px-4"
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

            <AboutContent />
            <div className=" flex justify-center">
            <div className=" md:p-10 p-2 md:max-w-4xl">
                <h2 className=" text-xl py-2 font-bold">Our Mission</h2>
                <p>
                    Most passengers end up straining themselves at the end moment while booking their cab. Our mission is to help passengers with guaranteed confirmation of booking. We are set to create a benchmark in the transportation industry by making rides highly affordable while providing top-notch services at the same prices.
                    We ensure every ride with us feels more than just a ride. We are working to improve our customer’s experience and setting the benchmark high.

                </p>
                <h2 className=" text-xl py-4 font-bold">Why Choose Us?</h2>
                <p>
                   We are on a mission to navigate the challenges seamlessly making rides possible with trained and professional drivers in almost all the conditions possible. 
                </p>
                <h2 className=" text-xl py-4 font-bold">Nationwide Availability</h2>
                <p>
                    Travelling across India is quick and safe with Pick Quick Cabs that is founded in 2010, but launched their online services in 2017. We are there to serve you wherever the road takes you. 
                </p>
                <h2 className=" text-xl py-4 font-bold">Comfort and Safety Guaranteed</h2>
                <p>
                   Our cars are well-maintained, serviced on time, and documented properly with trained and professional drivers to make your journey safer and more comfortable. 
                </p>
                 <h2 className=" text-xl py-4 font-bold">Luxury Models Available</h2>
                <p>
                  Experience unparalleled comfort and style with our luxury models. We help redefine premium travel across India at Pick Quick Cabs. 
                </p>
                 <h2 className=" text-xl py-4 font-bold">Our Values</h2>
                <p>
                  Our top priority is customer satisfaction and an unparalleled approach to make your journey convenient and unique. 
                </p>
                 <h2 className=" text-xl py-4 font-bold">Trust</h2>
                <p>
                   We believe in bonding with customers with our exceptional taxi services and an unparalleled approach to driving across the terrain.
                </p>
                 <h2 className=" text-xl py-4 font-bold">Excellence</h2>
                <p>
                  We are developing our website and app in a way to makes the experience seamless and convenient, striving for perfection in every ride. 
                </p>
                 <h2 className=" text-xl py-4 font-bold">Innovation</h2>
                <p>
                  GPS, an on-time tracking system, and modern technologies enhance your riding experience with Pick Quick Cabs.
                </p>
            </div>
            </div>
            <WhyChooseUs />
            <Footer />
        </>
    );
}

export default About;
