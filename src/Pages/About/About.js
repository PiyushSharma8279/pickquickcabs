import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import WhyChooseUs from "../../Components/Home/WhyChooseUs";
import Content from "../../Components/Home/Content";
import taxi2 from "../../Images/taxi-slider-2.jpg"

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

            <Content />
            <WhyChooseUs />
            <Footer />
        </>
    );
}

export default About;
