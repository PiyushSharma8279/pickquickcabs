
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
            question: "How do I book an outstation cab with Pick Quick Cabs?",
            answer: "Booking is simple! Go to Book A Ride page and select pickup and drop locations, travel dates, and choose your preferred vehicle type and fill your name or contact details. You’ll receive a call to confirm your booking online, by phone, or WhatsApp for added convenience.",
        },
        {
            question: "Is my fare inclusive of tolls, parking fees, and driver allowances?",
            answer: "We provide transparent pricing. Toll charges and driver allowances are not included in the fare at Pick Quick Cabs, but please check your estimate for any extra or excluded charges before confirming your trip. Our team also describe you is there any other charges.",
        },
        {
            question: "Can I book one-way trips, or are only round-trips available?",
            answer: "Pick Quick Cabs offers both one-way and round-trip bookings for outstation journeys. One-way trips can be more economical and convenient for customers who don’t plan to return immediately.",
        },
        {
            question: "What types of vehicles are available, and how do I choose the right one?",
            answer: "We have a range of vehicles from hatchbacks to SUVs and Tempo Travellers to suit your group size and luggage needs. Always match your party size and luggage requirements to the vehicle type when booking for maximum comfort.",
        },
        {
            question: "What is your cancellation and refund policy for outstation bookings?",
            answer: "Plans can change, and we understand that. Our cancellation policies are simple. If you have booked a cab and paid the token money, your booking will be considered confirmed and you can cancel the cab, but you will have to inform us 6-8 hours before the pickup time. You can cancel the cab there will be no issue and you will get a refund. But if you cancel the cab 1 hour before the pickup time, there will be no refund issue.",
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
                            Lowest Fares for Outstation Cabs from Delhi NCR
                        </h1>
                        <p className="text-lg">
                            The cost of an outstation taxi from Delhi NCR starts at <strong>₹1,500</strong>. Book your cab in advance and get your cab on time at your doorstep
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
                            Why choose Outstation Taxi from Pick Quick Cabs for your intercity travels?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-green-600 text-4xl mb-3">🧾</div>
                                <h3 className="text-xl font-semibold mb-2">Lower Fares</h3>
                                <p>
                                    Travel at a reduced rate of 5–10% compared to other outstation taxis. The most affordable transportation service in Delhi NCR for outstation trips.
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
                    <h2 className=" py-4 md:text-4xl text-xl font-medium">Why choose Pick Quick Cabs for Outstation Travels</h2>
                    <p className=" text-lg">
                        When we're looking to book an outstation cab online, we think about a lot of things, like which taxi service gives us the best experience for the lowest price, on-time pickups, no surprise cancellations, and friendly drivers, among other factors. So, why do we get so selective about booking an outstation cab online? It's due to previous experiences with other taxi services, where drivers frequently show up late for pickups, don't pick up the phone, and cancel rides without confirming with customers first, along with several of other problems.<br/><br/>
                        How Pick Quick Cabs meets all of the following standards for trips outside of the city.<br/><br/>
                        First, Pick Quick Cabs takes less commission from drivers so they may make more money. Second, Pick Quick Cabs tells drivers the distance, fare, and ride details before they accept the ride, which makes cancellations nearly impossible to do. A lot of clear information leads to changes in how drivers act, and all the work that has been done on drivers makes sure customers have the finest taxi experience possible.
                    </p>
                    <h2 className=" py-4  md:text-4xl text-xl font-medium">Affordable Outstation Cab from anywhere in Delhi NCR</h2>
                    <p className=" text-lg">
                       Pick Quick Cabs Taxi fares are transparent, and 5-10% lower for outstation travels. No Hidden Charges. No Extra Fares. No Additional Charges for Pre-booking. Book now and choose the right cab for your Outstation trip.
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
