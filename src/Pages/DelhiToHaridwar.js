import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToHaridwar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Haridwar Cab | Taxi Service from Delhi to Haridwar - Pick Quick Cabs",
    description:
      "Book a comfortable and affordable Delhi to Haridwar taxi with Pick Quick Cabs. Enjoy safe, on-time rides with professional drivers. One-way & round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-haridwar-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/ganga-ghat-haridwar1-attr-hero?qlt=82&ts=1726645870499"
            alt="Delhi to Haridwar Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Haridwar Cab Service
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Haridwar Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Haridwar</b>? Book your ride with{" "}
            <b>Pick Quick Cabs</b> for a peaceful and safe journey to one of India’s most
            sacred cities. Whether you’re traveling for religious purposes, family trips,
            or leisure, our cab service ensures a smooth and comfortable experience.
          </p>
          <p>
            Travel hassle-free via <b>NH334</b> with our professional drivers and clean,
            well-maintained cabs. Choose from a wide range of vehicles like Sedan, SUV,
            and Ertiga — perfect for one-way or round trips.
          </p>
        </section>

        {/* Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://propacity.com/blogs/wp-content/uploads/2024/05/Har-Ki-Pauri-2.jpg"
            alt="Haridwar Ganga Aarti"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Haridwar</h3>
            <p className="mt-2">
              <b>Haridwar</b>, meaning “Gateway to God,” is one of the seven holiest
              places in India. Situated on the banks of the sacred <b>River Ganga</b>, it’s
              famous for its evening <b>Ganga Aarti</b> at <b>Har Ki Pauri</b> and is a major
              starting point for the <b>Char Dham Yatra</b>.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 230 km from Delhi</li>
              <li><b>Travel Time:</b> Around 5–6 hours by road</li>
              <li><b>Route:</b> Delhi – Meerut – Muzaffarnagar – Roorkee – Haridwar</li>
              <li><b>Best Time to Visit:</b> October to April</li>
            </ul>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Haridwar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar1-attr-hero?qlt=82&ts=1726645968653"
                alt="Har Ki Pauri"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Har Ki Pauri</h4>
                <p className="text-sm mt-1">
                  The most sacred ghat on the Ganges, where pilgrims take a holy dip and
                  witness the mesmerizing Ganga Aarti at sunset.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://media.holidify.com/images/cmsuploads/compressed/Mansa-Devi-Temple_20241206112831.jpg"
                alt="Mansa Devi Temple"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Mansa Devi Temple</h4>
                <p className="text-sm mt-1">
                  A revered hilltop temple dedicated to Goddess Mansa Devi, accessible by
                  ropeway and offering panoramic views of Haridwar.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://blog.yatradham.org/wp-content/uploads/2020/02/Chandi-Devi-Temple.jpg"
                alt="Chandi Devi Temple"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Chandi Devi Temple</h4>
                <p className="text-sm mt-1">
                  Located atop the Neel Parvat, this temple is another Shakti Peeth and a
                  must-visit for devotees visiting Haridwar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Distance & Travel Time</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delhi → Haridwar: ~230 km / ~5–6 hrs</li>
              <li>Route: NH 334 via Meerut, Muzaffarnagar, Roorkee</li>
              <li>Stops: Cheetal Grand, Roorkee, and Har Ki Pauri</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, sanitized & comfortable vehicles</li>
              <li>Experienced & courteous drivers</li>
              <li>Affordable one-way & round-trip fares</li>
              <li>24/7 customer support and easy online booking</li>
            </ul>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Available Cabs & Fare</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
              <img
                src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80"
                alt="Sedan"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="text-lg font-medium">Sedan (Dzire / Similar)</h4>
              <p>Seats: 4+1</p>
              <p>Fare: ₹12.5/km</p>
              <button
                className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={() => navigate("/book-a-ride")}
              >
                Book Cab
              </button>
            </div>


            <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
              <img
                src="https://static3.toyotabharat.com/images/showroom/innova-mmc/silver-color-1600x600.png"
                alt="SUV"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="text-lg font-medium">SUV (Innova / Similar)</h4>
              <p>Seats: 6+1</p>
              <p>Fare: ₹20/km</p>
              <button
                className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={() => navigate("/book-a-ride")}
              >
                Book Cab
              </button>
            </div>


            <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
              <img
                src="https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/marutisuzuki_ertiga/images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400.jpg"
                alt="Ertiga"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="text-lg font-medium">Ertiga</h4>
              <p>Seats: 6+1</p>
              <p>Fare: ₹16/km</p>
              <button
                className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={() => navigate("/book-a-ride")}
              >
                Book Cab
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What is the fare for a Delhi to Haridwar cab?
              </summary>
              <p className="mt-2">
                The fare starts from ₹12.5/km for Sedan and may vary based on vehicle type and route.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Do you offer one-way cab service from Delhi to Haridwar?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs provides affordable one-way taxi service between Delhi and Haridwar.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are the best stopovers during the trip?
              </summary>
              <p className="mt-2">
                You can stop at Cheetal Grand, Roorkee, or relax by the roadside dhabas along NH334.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-lg">
            Ready to book your ride? Call us at{" "}
            <a href="tel:+918447433852" className="text-yellow-600 font-semibold">
              +91-8447433852
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DelhiToHaridwar;
