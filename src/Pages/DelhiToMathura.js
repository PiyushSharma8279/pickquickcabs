import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToMathura = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Mathura Cab | Taxi Service from Delhi to Mathura - Pick Quick Cabs",
    description:
      "Book affordable Delhi to Mathura cabs with Pick Quick Cabs. Enjoy a comfortable ride to Lord Krishna’s birthplace with professional drivers. One-way & round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-mathura-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* ✅ Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://skysafar.in/wp-content/uploads/2024/07/Mathura.png"
            alt="Delhi to Mathura Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Mathura Cab Service
            </h1>
          </div>
        </section>

        {/* ✅ Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Mathura Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Mathura</b>? Book your journey with{" "}
            <b>Pick Quick Cabs</b> and enjoy a comfortable and safe ride to the
            holy city of Lord Krishna’s birth. Whether it’s a family trip,
            pilgrimage, or weekend getaway, our <b>Delhi to Mathura cab
            service</b> ensures reliability and comfort.
          </p>
          <p>
            The route from Delhi to Mathura via <b>Yamuna Expressway</b> offers
            smooth roads and scenic countryside views. Choose from Sedans, SUVs,
            or Ertiga vehicles driven by professional chauffeurs for a pleasant
            experience.
          </p>
        </section>

        {/* ✅ Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://img.freepik.com/free-photo/udaipur-city-view-from-hotel-balcony-rajasthan-india_53876-65505.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Mathura City"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Mathura</h3>
            <p className="mt-2">
              <b>Mathura</b>, known as the birthplace of Lord Krishna, is one of
              the most revered spiritual destinations in India. Located on the
              banks of the Yamuna River, Mathura is filled with ancient temples,
              ghats, and sacred landmarks. From the <b>Krishna Janmabhoomi
              Temple</b> to <b>Vishram Ghat</b> and <b>Dwarkadhish Temple</b>,
              every corner reflects divine energy.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 180 km from Delhi</li>
              <li><b>Travel Time:</b> Around 3–3.5 hours by road</li>
              <li><b>Route:</b> Delhi – Noida – Yamuna Expressway – Mathura</li>
              <li><b>Best Time to Visit:</b> October to March</li>
            </ul>
          </div>
        </section>

        {/* ✅ Top Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Mathura</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.mathuravrindavantourpackages.com/images/temple/slider/shri-krishna-janmasthan-temple-2.webp"
                alt="Shri Krishna Janmabhoomi"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Shri Krishna Janmabhoomi</h4>
                <p className="text-sm mt-1">
                  The sacred birthplace of Lord Krishna, this temple complex is
                  one of the most visited spiritual sites in India.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2d/03/51/if-you-love-to-be-with.jpg?w=1200&h=-1&s=1"
                alt="Vishram Ghat"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Vishram Ghat</h4>
                <p className="text-sm mt-1">
                  A peaceful ghat on the Yamuna River where devotees perform
                  evening aartis and offer prayers to Lord Krishna.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKU9mzN7tIzvH3J8LLajiBXBa13w88x09-Q&s"
                alt="Dwarkadhish Temple"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Dwarkadhish Temple</h4>
                <p className="text-sm mt-1">
                  Famous for its beautiful architecture and festive celebrations,
                  this temple is dedicated to Lord Krishna as King of Dwarka.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Travel Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Distance & Travel Time</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delhi → Mathura: ~180 km / ~3–3.5 hrs</li>
              <li>Route: Yamuna Expressway</li>
              <li>Stops: Vrindavan, Chhata</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, well-maintained vehicles</li>
              <li>Professional and polite drivers</li>
              <li>Affordable fares with transparent pricing</li>
              <li>24×7 booking support & on-time pickup</li>
            </ul>
          </div>
        </section>

        {/* ✅ Vehicle Options */}
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

        {/* ✅ FAQ */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What is the fare for a Delhi to Mathura cab?
              </summary>
              <p className="mt-2">
                Fares start from ₹12.5/km for Sedan and may vary based on vehicle
                type and travel plan.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Mathura?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers both one-way and round-trip cab
                options from Delhi to Mathura.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are popular stopovers between Delhi and Mathura?
              </summary>
              <p className="mt-2">
                You can stop at Vrindavan or the Yamuna Expressway rest areas
                for refreshments and sightseeing.
              </p>
            </details>
          </div>
        </section>

        {/* ✅ CTA */}
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

export default DelhiToMathura;
