import React from "react";
import { FaTaxi } from "react-icons/fa";

export default function TaxiFares() {
    return (
        <>
            <div className="text-center py-10">
                <p className="text-gray-600 mt-2">Our all taxi rates</p>
                <h2 className="text-3xl sm:text-6xl font-bold">Check taxi fares</h2>
                
            </div>
            <div className=" flex justify-center py-16 px-4">
                <div className="w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 ">
                    {/* All taxi fares */}
                    <div className="bg-yellow-400 text-black px-10 py-20 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <FaTaxi className="text-4xl" />
                            <h2 className="text-2xl md:text-3xl font-bold">All taxi fares</h2>
                        </div>
                        <p className="text-md mb-6">
                            Lorem ipsum dolor sit amet cons adipisci elit.
                        </p>
                        <hr className="border-black mb-6" />
                        <div className="space-y-2 mb-8">
                            <div className="flex justify-between font-medium">
                                <span>Initial charge:</span>
                                <span>$2.50</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>Additional Kilometre:</span>
                                <span>$0.50</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>Per 2 minutes in stopped traffic:</span>
                                <span>$0.66</span>
                            </div>
                        </div>
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
                            Order Taxi Now
                        </button>
                    </div>

                    {/* Additional fares */}
                    <div className="bg-yellow-400 text-black px-10 py-20 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <FaTaxi className="text-4xl" />
                            <h2 className="text-2xl md:text-3xl font-bold">Additional fares</h2>
                        </div>
                        <p className="text-md mb-6">
                            Lorem ipsum dolor sit amet cons adipisci elit.
                        </p>
                        <hr className="border-black mb-6" />
                        <div className="space-y-2 mb-8">
                            <div className="flex justify-between font-medium">
                                <span>One hour of waiting:</span>
                                <span>$8.00</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>4pm to 8pm weekday surcharge:</span>
                                <span>$2.00</span>
                            </div>
                            <div className="flex justify-between font-medium">
                                <span>8pm to 6am night surcharge:</span>
                                <span>$3.00</span>
                            </div>
                        </div>
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">
                            Order Taxi Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
