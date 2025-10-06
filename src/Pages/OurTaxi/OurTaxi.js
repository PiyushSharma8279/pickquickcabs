import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { SiKia, SiPerforce, SiSuzuki, SiToyota } from "react-icons/si";
import { FaPlus, FaMinus } from "react-icons/fa";

function OurTaxi() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const slide = {
        img: "https://old3.commonsupport.com/wp/conexi/wp-content/uploads/2020/04/slider-1-2.jpg",
        title: "Our Taxi",
    };

    const cars = [
        {
            img: "https://www.varunmaruti.com/uploads/products/colors/wagonr-superior-white.png",
            logo: <SiSuzuki className="text-4xl text-black" />,
            name: "Wagonr",
            baseRate: "1800*",
            perMile: "9.5",
            passengers: 4,
        },
        {
            img: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80",
            logo: <SiSuzuki className="text-4xl text-black" />,
            name: "Swift Dzire",
            baseRate: "2000*",
            perMile: "10",
            passengers: 4,
        },
        {
            img: "https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/marutisuzuki_ertiga/images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400.jpg",
            logo: <SiSuzuki className="text-4xl text-black" />,
            name: "Ertiga",
            baseRate: "2900*",
            perMile: "15",
            passengers: 7,
        },
        {
            img: "https://www.kunkiamotors.com/wp-content/uploads/2023/07/y4576yg-1024x512.png",
            logo: <SiKia className="text-4xl text-black" />,
            name: "Kia Carens",
            baseRate: "2900*",
            perMile: "15",
            passengers: 7,
        },
        {
            img: "https://static3.toyotabharat.com/images/showroom/innova-mmc/silver-color-1600x600.png",
            logo: <SiToyota className="text-4xl text-black" />,
            name: "Innova ",
            baseRate: "3650*",
            perMile: "19",
            passengers: 7,
        },
        {
            img: "https://www.forcemotors.com/wp-content/uploads/2025/02/TRAVELLER-T1-STANDARD-3050-MM-WB.png",
            logo: <SiPerforce className="text-4xl text-black" />,
            name: "Force Traveller",
            baseRate: "6750*",
            perMile: "25",
            passengers: 12,
        },
    ];

    const faqs = [
        {
            question: "How can I book a taxi with Pick Quick Cabs?",
            answer: "We strive to make booking as seamless as possible—please feel free to complete the online form on our website, call our contact number, or book via WhatsApp. If you book through a website, just choose your pick-up and drop-off points, select your preferred time, and complete the reservation in a few simple steps.",
        },
        {
            question: "What types of taxis do you offer for city travel?",
            answer: "Pick Quick Cabs provides a variety of vehicles, including sedans, hatchbacks and SUVs to match different travel group sizes and needs.",
        },
        {
            question: "Can I pay for my ride by card or through digital payment methods?",
            answer: "Yes, Pick Quick Cabs accepts multiple payment options, including cash, UPI, and direct bank transfer for your convenience. However, we currently do not accept debit or credit cards, but we will start accepting them soon.",
        },
         {
            question: "Are your drivers professional and is my ride safe?",
            answer: "All drivers are licensed, background-checked, and trained to prioritize your safety and comfort throughout the journey. The fleet is regularly sanitized and maintained.",
        },
         {
            question: "Is there an extra charge for waiting, multiple stops, or cancellations?",
            answer: "Waiting and multiple stops are possible—minimal additional charges may apply, which will be transparently communicated up front. Cancellation terms are fair; please check the policy on your booking confirmation for details.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />



            {/* Hero */}
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
            <div className="text-center my-12 flex justify-center">
                <p className="text-gray-600 text-xl font-medium w-[60%]">Pick Quick Cabs promise you a safe, reliable, and convenient journey across India, we ensure exceptional and hassle-free support with utmost satisfaction on every ride, irrespective of the terrain. </p>

            </div>

            {/* Cars Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto my-20">
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className="hover:border hover:border-yellow-500 rounded-xl shadow-md flex flex-col items-center p-6 transition hover:shadow-lg"
                    >
                        <img src={car.img} alt={car.name} className="h-40 object-contain mb-4" />
                        <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center mb-4">
                            {car.logo}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{car.name}</h3>

                        <div className="text-gray-700 text-sm space-y-1">
                            <div className="flex justify-between text-lg gap-4">
                                <p className="font-semibold">Inter City:</p>
                                <p>{car.baseRate}</p>
                            </div>
                            <div className="flex justify-between text-lg gap-4">
                                <p className="font-semibold">Per Mile/KM:</p>
                                <p>{car.perMile}</p>
                            </div>
                            <div className="flex justify-between text-lg gap-4">
                                <p className="font-semibold">Passengers:</p>
                                <p>{car.passengers}</p>
                            </div>
                        </div>

                        <button className="mt-6 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
                            Book Taxi
                        </button>
                    </div>
                ))}
            </div>

            {/* Call To Action */}
            <div className="bg-yellow-400 py-16 px-6 flex justify-center">
                <div className="text-center mb-12 w-[70%]">
                    <p className="text-xl font-bold mt-2">Call 24 hour service available</p>
                    <h2 className="text-3xl sm:text-7xl font-bold ">
                        Call now and book our taxi for your next ride
                    </h2>
                    <button className="bg-black text-white px-8 py-4 text-xl sm:px-16 sm:py-6 rounded-full sm:text-2xl font-bold my-10">
                        Choose Your Taxi
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-yellow-500 font-medium">Our FAQs</p>
                        <h2 className="sm:text-7xl text-3xl font-bold">Questions & Answers</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    <span className="text-yellow-500">
                                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </div>

                                {openIndex === index && (
                                    <p className="mt-3 text-gray-600 bg-yellow-400 p-2">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default OurTaxi;
