import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const NoidaToChardham = () => {
    return (
        <>
        <Header/>
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
                {/* Hero / banner section */}
                <section className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src="https://www.traveltoindia.org/blog/wp-content/uploads/2021/02/char-dham-1-1.webp"
                        alt="Noida to Chardham Taxi"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
                            Noida to Chardham Taxi Service
                        </h1>
                    </div>
                </section>

                {/* Intro / overview */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Noida to Chardham Taxi Service</h2>
                    <p>
                        KTS Cabs offers dependable taxi service from Noida to all four Dham
                        destinations: Yamunotri, Gangotri, Kedarnath, & Badrinath. Travel
                        with comfort, transparency, and safety on this sacred journey.
                    </p>
                </section>

                {/* Distance & travel time / route details */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold">Distance & Travel Time</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Noida → Yamunotri: ~ XXX km / ~ YYY hrs</li>
                            <li>Yamunotri → Gangotri: ~ XXX km / ~ YYY hrs</li>
                            <li>Gangotri → Kedarnath: ~ XXX km / ~ YYY hrs (incl. trekking)</li>
                            <li>Kedarnath → Badrinath: ~ XXX km / ~ YYY hrs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Why Choose Us</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Well maintained & clean vehicles</li>
                            <li>Experienced drivers familiar with hilly terrain</li>
                            <li>Transparent pricing, no hidden charges</li>
                            <li>24/7 support & timely pickups</li>
                        </ul>
                    </div>
                </section>

                {/* Fare / vehicle options */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-semibold">Vehicle Options & Fare</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Repeat for each vehicle type */}
                        <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
                            <img
                                src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80"
                                alt="Sedan"
                                className="w-full h-32 object-cover rounded"
                            />
                            <h4 className="text-lg font-medium">Sedan (Dzire / Similar)</h4>
                            <p>Seats: 4+1</p>
                            <p>Starting Fare: ₹ X / km</p>
                            <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                Book Now
                            </button>
                        </div>
                        <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
                            <img
                                src="https://static3.toyotabharat.com/images/showroom/innova-mmc/silver-color-1600x600.png"
                                alt="SUV"
                                className="w-full h-32 object-cover rounded"
                            />
                            <h4 className="text-lg font-medium">SUV / Innova</h4>
                            <p>Seats: 6+1</p>
                            <p>Starting Fare: ₹ Y / km</p>
                            <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                Book Now
                            </button>
                        </div>
                        {/* Add more vehicle cards as needed */}
                    </div>
                </section>

                {/* FAQ / additional info */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                        <details className="border rounded-lg p-3">
                            <summary className="font-medium cursor-pointer">
                                What is included in the fare?
                            </summary>
                            <p className="mt-2">
                                The fare includes driver, fuel, tolls, etc. (adjust based on your
                                policy).
                            </p>
                        </details>
                        <details className="border rounded-lg p-3">
                            <summary className="font-medium cursor-pointer">
                                How much luggage can we carry?
                            </summary>
                            <p className="mt-2">You may carry up to X suitcases per car.</p>
                        </details>
                        {/* Add more FAQs */}
                    </div>
                </section>

                {/* Call to Action / contact */}
                <section className="text-center">
                    <p className="text-lg">
                        Ready to book your shrine journey? Call us now at{" "}
                        <a href="tel:+918737993690" className="text-yellow-600 font-semibold">
                            +91-8737993690
                        </a>
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default NoidaToChardham;
