import React from "react";
import aboutImg from "../../Images/about.jpg"

function AboutContent() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left: Text Content */}
                <div>
                    <p className="text-yellow-500 font-semibold uppercase tracking-wide mb-2">
                        Pick Quick Cabs
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        LEARN ABOUT OUR <br /> TAXI COMPANY
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Pick Quick Cabs provides quick and easy taxi services best known for safety and comfort in every terrain with determined, trained, and professional drivers across India. We help you catch the ride seamlessly and make your journey safe and comfortable.
                        We are your reliable, convenient, and go-to travel partner across India with 24/7 call assistance.<br /> We help our passengers meet diverse needs with our exceptional services be it enjoying countryside roads, commuting through the bustling streets, or navigating the challenging terrains in India.<br />
                        Our cabs and drivers are devoted to encouraging your riding experience making it smooth, comfortable, and safe.

                    </p>
                    <button className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
                        Discover more
                    </button>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="About Conexi"
                        className="rounded-2xl shadow-lg hover:scale-105 transform transition duration-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
