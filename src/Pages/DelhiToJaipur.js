import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToJaipur = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Jaipur Cab | Taxi Service from Delhi to Jaipur - Pick Quick Cabs",
    description:
      "Book affordable Delhi to Jaipur cabs with Pick Quick Cabs. Enjoy a comfortable journey to the Pink City with professional drivers. One-way & round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-jaipur-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* ✅ Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://www.agoda.com/wp-content/uploads/2024/05/Nahargarh-Fort-jaipur-india.jpg"
            alt="Delhi to Jaipur Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Jaipur Cab Service
            </h1>
          </div>
        </section>

        {/* ✅ Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Jaipur Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Jaipur</b>? Book your journey with{" "}
            <b>Pick Quick Cabs</b> and enjoy a comfortable and safe ride to the
            <b> Pink City of India</b>. Whether it’s a family trip, business travel,
            or a weekend getaway, our <b>Delhi to Jaipur cab service</b> ensures
            reliability, comfort, and convenience.
          </p>
          <p>
            The route from Delhi to Jaipur via <b>NH48</b> offers smooth highways,
            scenic views, and quick access to Rajasthani culture. Choose from Sedans,
            SUVs, or Ertiga vehicles driven by professional chauffeurs.
          </p>
        </section>

        {/* ✅ Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577"
            alt="Jaipur City"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Jaipur</h3>
            <p className="mt-2">
              <b>Jaipur</b>, the capital of Rajasthan, is famously known as the
              <b> Pink City</b> for its distinct rose-colored architecture.
              Renowned for its royal palaces, forts, and heritage, Jaipur offers
              a blend of history, culture, and vibrant markets. Major attractions
              include <b>Amber Fort</b>, <b>Hawa Mahal</b>, <b>City Palace</b>,
              and <b>Jantar Mantar</b>.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 280 km from Delhi</li>
              <li><b>Travel Time:</b> Around 5–6 hours by road</li>
              <li><b>Route:</b> Delhi – Gurugram – Neemrana – Jaipur (NH48)</li>
              <li><b>Best Time to Visit:</b> October to March</li>
            </ul>
          </div>
        </section>

        {/* ✅ Top Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Jaipur</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDD8CIjBDuVukV24jBDSDnW6-DUu3qrzpeQ&s"
                alt="Hawa Mahal"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Hawa Mahal</h4>
                <p className="text-sm mt-1">
                  Known as the “Palace of Winds,” Hawa Mahal is Jaipur’s most iconic landmark with over 900 windows for royal ladies to view processions.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.cdn.travejar.com/storage/india_attraction_tour/1676106126.webp"
                alt="Amber Fort"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Amber Fort</h4>
                <p className="text-sm mt-1">
                  A magnificent hilltop fort showcasing Rajput architecture and panoramic views of Maota Lake.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/8a/82/this-is-the-time-when.jpg?w=900&h=500&s=1"
                alt="City Palace"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">City Palace</h4>
                <p className="text-sm mt-1">
                  A royal residence featuring courtyards, gardens, and museums that display Jaipur’s regal past.
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
              <li>Delhi → Jaipur: ~280 km / ~5–6 hrs</li>
              <li>Route: NH48 (Delhi–Gurugram–Neemrana–Jaipur)</li>
              <li>Stops: Manesar, Behror, Neemrana Fort</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, well-maintained vehicles</li>
              <li>Professional and experienced drivers</li>
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
                What is the fare for a Delhi to Jaipur cab?
              </summary>
              <p className="mt-2">
                Fares start from ₹12.5/km for Sedan and may vary depending on the vehicle and trip type.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Jaipur?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers one-way as well as round-trip taxi services for Delhi to Jaipur.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are the best stopovers on the Delhi to Jaipur route?
              </summary>
              <p className="mt-2">
                Popular stops include Neemrana Fort Palace, Manesar food hubs, and Behror Highway restaurants.
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

export default DelhiToJaipur;
