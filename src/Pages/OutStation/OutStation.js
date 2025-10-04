
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import outStation from "../../Images/businessman-in-cab.jpg"

import { FaPlus, FaMinus } from "react-icons/fa";

const Outstation = () => {
       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openIndex, setOpenIndex] = useState(null);
    const fares = [
        { from: "Delhi", to: "Jaipur", oneWay: "₹3,791", roundTrip: "₹7,641" },
        { from: "Delhi", to: "Agra", oneWay: "₹2,965", roundTrip: "₹6,516" },
        { from: "Delhi", to: "Kanpur", oneWay: "₹7,342", roundTrip: "₹12,326" },
        { from: "Delhi", to: "Lucknow", oneWay: "₹6,886", roundTrip: "₹13,627" },
        { from: "Delhi", to: "Ludhiana", oneWay: "₹3,928", roundTrip: "₹7,960" },
        { from: "Delhi", to: "Indore", oneWay: "₹15,871", roundTrip: "₹19,845" },
        { from: "Delhi", to: "Haridwar", oneWay: "₹3,389", roundTrip: "₹6,637" },
        { from: "Noida", to: "Moradabad", oneWay: "₹2,736", roundTrip: "₹6,794" },
        { from: "Delhi", to: "Patiala", oneWay: "₹3700", roundTrip: "₹7000" },
        { from: "Delhi", to: "Dehradun", oneWay: "₹2,736", roundTrip: "₹6,794" },
        { from: "Noida", to: "Patiala", oneWay: "₹2,840", roundTrip: "₹6,994" },
        { from: "Gurgaon", to: "Sikar", oneWay: "₹3,736", roundTrip: "₹7,794" },
        { from: "Gurgaon", to: "Jodhpur", oneWay: "₹2,636", roundTrip: "₹5,794" },
        { from: "Noida", to: "Kedarnath", oneWay: "₹2,736", roundTrip: "₹6,794" },
    ];


     const faqs = [
        {
            question: "Why I Should choose Pick Quick cabs for OutStation?",
            answer: "Lower and Consistent Fares, Well-behaved Drivers, Advance Booking Facility, No Surge Pricing, No Ride Cancellation, 24x7 Customer Support, On-time pick-up, Well-maintained Cabs and Taxi sharing with other on your route to save money.",
        },
        {
            question: "Can I Book Outstation Taxi in Advance?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
        {
            question: "How do I Pay and When to Pay?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
         {
            question: "Intercity Travel Fares are less for me, But what will the drivers gets ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
         {
            question: "What are the Cancellation Charges?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
        },
         {
            question: "What is the min km perday?",
            answer: "Minimum Km per day is calculated from based on calender day from 12 AM to 12 PM as one day. And the charges for each day is calculated based on the same.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center bg-gray-50 text-gray-800 mt-32">
                {/* Hero Section */}
                <section className="w-full  flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-10">
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Outstation Cabs from Delhi NCR at Lowest Fares
                        </h1>
                        <p className="text-lg">
                            Outstation Taxi from Delhi NCR starts at <strong>₹1,500/-</strong>.
                            Book your cab in advance and get 5–10% cheaper fares.
                        </p>
                    </div>

                    <img
                        src={outStation}
                        alt="Cab Ride"
                        className="md:w-1/2 rounded-2xl shadow-lg mt-6 md:mt-0"
                    />
                </section>

                {/* Why Choose Section */}
                <section className="w-full bg-white py-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">
                            Why choose Outstation Taxi from Quick Ride for your intercity travels?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-green-600 text-4xl mb-3">🧾</div>
                                <h3 className="text-xl font-semibold mb-2">Lower Fares</h3>
                                <p>
                                    Travel at 5–10% lower fares than other outstation cabs.
                                    Cheapest outstation taxi in Bangalore you can find.
                                </p>
                            </div>
                            <div>
                                <div className="text-green-600 text-4xl mb-3">⏰</div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Schedule in Advance. Get On-Time Pickup
                                </h3>
                                <p>
                                    Pre-book outstation cabs and enjoy on-time doorstep pickup from
                                    anywhere in the city.
                                </p>
                            </div>
                            <div>
                                <div className="text-green-600 text-4xl mb-3">💰</div>
                                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                                <p>
                                    Transparent fares inclusive of tolls, parking, and taxes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fares Table */}
                <section className="w-full max-w-5xl bg-gray-100 p-8 rounded-2xl mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Quick Ride Fares for Outstation Taxi from Delhi NCR
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
                            <thead className="bg-yellow-400 text-white">
                                <tr>
                                    <th className="p-3 text-left">From</th>
                                    <th className="p-3 text-left">To</th>
                                    <th className="p-3 text-left">Fare (One Way)</th>
                                    <th className="p-3 text-left">Fare (Round Trip)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fares.map((fare, idx) => (
                                    <tr
                                        key={idx}
                                        className="border-t border-gray-200 hover:bg-gray-50"
                                    >
                                        <td className="p-3">{fare.from}</td>
                                        <td className="p-3">{fare.to}</td>
                                        <td className="p-3">{fare.oneWay}</td>
                                        <td className="p-3">{fare.roundTrip}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <div className=" flex justify-center">
                <div className=" md:p-10 max-w-5xl">
                    <h2 className=" py-4 md:text-4xl text-xl font-medium">Why choose Quick Ride for Outstation Travels</h2>
                    <p className=" text-lg">
                        When we plan to book outstation cabs online we consider a lot of thing, which outstation taxi service offers the best in class experience at lowest fares, on-time pickup, no last minute cancellation, professional drivers' behaviours and the list goes on. But why we’re so selective when comes to booking outstation cab online. It’s because of the past experiences on other taxi services from drivers reaching late for pick, not picking calls, cancelling the ride without customers’ consent and goes on.<br /><br />

                        How Quick Ride overcomes all the above requirements for outstation travels.<br /><br />

                        First, Quick Ride charges less commission from drivers for them to get higher earnings, Quick Ride shows the distance, fare and ride details to drivers before accepting the ride, which leads to almost zero cancellation. With a lot of transparency in information brings the change in driver behavioural issues and all the efforts made on drivers paves the path for a best in class taxi ride for customers.
                    </p>
                    <h2 className=" py-4  md:text-4xl text-xl font-medium">Lowest Outstation Taxi from anywhere in Delhi NCR</h2>
                    <p className=" text-lg">
                       Quick Ride Taxi fares are transparent, and 5-10% lower for outstation travels. No Hidden Charges. No Extra Fares. No Additional Charges for Pre-booking. Book your  now. Choose the right Taxi for your Outstation commute from Hatchback to Sedan to SUV.
                    </p>
                    <h2 className=" py-4 md:py-10 md:text-4xl text-xl font-medium">Popular Outstation cabs from Delhi</h2>
                    <p className=" text-lg grid grid-cols-3 gap-4 text-green-500 font-medium">
                        <p>Delhi to Jaipur</p>
                        <p>Delhi to Agra</p>
                        <p>Delhi to Dehradun</p>
                        <p>Delhi to Manali</p>
                        <p>Delhi to Haridwar</p>

                      
                    </p>
                </div>
            </div>
            <section className="py-16 bg-gray-100">
                            <div className="max-w-6xl mx-auto px-6">
                                <div className="text-center mb-12">
                                    <h2 className="sm:text-5xl text-3xl font-bold">FAQs of Pick Quick Cabs</h2>
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
};

export default Outstation;
