import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToAgra = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Agra Cab | Taxi Service from Delhi to Agra - Pick Quick Cabs",
    description:
      "Book comfortable and affordable Delhi to Agra cabs with Pick Quick Cabs. Enjoy a smooth and safe journey to the city of the Taj Mahal with professional drivers. One-way & round-trip available.",
    url: "https://www.pickquickcabs.com/delhi-to-agra-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">

        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
            alt="Delhi to Agra Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Agra Cab Service
            </h1>
          </div>
        </section>


        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Agra Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Agra</b>? Book your journey with{" "}
            <b>Pick Quick Cabs</b> and travel comfortably to one of India’s most
            iconic destinations. Whether it’s a weekend getaway, family trip, or
            business visit, our <b>Delhi to Agra cab service</b> ensures a
            comfortable, safe, and affordable ride.
          </p>
          <p>
            The drive via <b>Yamuna Expressway</b> offers smooth roads and scenic
            countryside views. Choose from Sedans, SUVs, or Ertiga vehicles,
            driven by professional chauffeurs to make your trip truly relaxing.
          </p>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
            alt="Agra City"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Agra</h3>
            <p className="mt-2">
              <b>Agra</b> is home to the world-famous <b>Taj Mahal</b>, one of the
              Seven Wonders of the World. Situated on the banks of the Yamuna
              River, Agra is a city rich in Mughal history, architecture, and
              culture. From the majestic Agra Fort to local markets offering
              leather goods and sweets, Agra offers a perfect blend of heritage
              and hospitality.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 230 km from Delhi</li>
              <li><b>Travel Time:</b> Around 3.5–4 hours by road</li>
              <li><b>Route:</b> Delhi – Greater Noida – Yamuna Expressway – Agra</li>
              <li><b>Best Time to Visit:</b> October to March</li>
            </ul>
          </div>
        </section>


        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Agra</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMq0Utl9O-TUtLMs4xn6n1q0jyqAYN0YB3w&s"
                alt="Taj Mahal"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Taj Mahal</h4>
                <p className="text-sm mt-1">
                  A UNESCO World Heritage Site and one of the most beautiful
                  monuments in the world, built by Shah Jahan in memory of Mumtaz Mahal.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hQ97boiApov6WHK3pSab9EE1sOs6PpgVoQ&s"
                alt="Agra Fort"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Agra Fort</h4>
                <p className="text-sm mt-1">
                  Another UNESCO site, this majestic fort showcases Mughal
                  architecture and offers panoramic views of the Taj Mahal.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://agratourism.in/images/places-to-visit/headers/fatehpur-sikri-agra-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                alt="Fatehpur Sikri"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Fatehpur Sikri</h4>
                <p className="text-sm mt-1">
                  Located just 40 km from Agra, this historic Mughal city built
                  by Akbar is famous for its grand architecture and Buland Darwaza.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Distance & Travel Time</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delhi → Agra: ~230 km / ~3.5–4 hrs</li>
              <li>Route: Yamuna Expressway</li>
              <li>Stops: Jewar Toll Plaza, Mathura</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Well-maintained, comfortable vehicles</li>
              <li>Professional and polite drivers</li>
              <li>Affordable one-way & round-trip fares</li>
              <li>24×7 booking support & on-time service</li>
            </ul>
          </div>
        </section>


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


        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What is the fare for a Delhi to Agra cab?
              </summary>
              <p className="mt-2">
                The fare starts from ₹12.5/km for Sedan and may vary based on
                vehicle type and travel plan.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Agra?
              </summary>
              <p className="mt-2">
                Yes, one-way and round-trip options are available from Delhi to
                Agra with Pick Quick Cabs.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are some good stopovers between Delhi and Agra?
              </summary>
              <p className="mt-2">
                You can stop at Mathura or Vrindavan to explore temples and
                local markets before reaching Agra.
              </p>
            </details>
          </div>
        </section>


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

export default DelhiToAgra;
