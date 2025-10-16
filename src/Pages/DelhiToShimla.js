import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToShimla = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Shimla Cab | Taxi Service from Delhi to Shimla - Pick Quick Cabs",
    description:
      "Book your Delhi to Shimla cab with Pick Quick Cabs for a comfortable hill station journey. Affordable taxi fares, professional drivers, and one-way & round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-shimla-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* ✅ Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523"
            alt="Delhi to Shimla Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Shimla Cab Service
            </h1>
          </div>
        </section>

        {/* ✅ Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Shimla Taxi Booking</h2>
          <p>
            Looking for a scenic and comfortable trip from <b>Delhi to Shimla</b>? Book your cab with{" "}
            <b>Pick Quick Cabs</b> and enjoy a hassle-free ride through the winding mountain roads to the
            <b> Queen of Hills – Shimla</b>. Whether you're planning a family trip, romantic getaway, or solo adventure,
            our <b>Delhi to Shimla cab service</b> ensures safety, convenience, and comfort.
          </p>
          <p>
            The route from Delhi to Shimla via <b>NH44 and NH5</b> offers smooth highways and beautiful mountain views.
            You can choose from Sedans, SUVs, or Ertiga vehicles driven by professional chauffeurs experienced in hilly terrains.
          </p>
        </section>

        {/* ✅ Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://static.toiimg.com/photo/msid-102383896,width-96,height-65.cms"
            alt="Shimla Ridge"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Shimla</h3>
            <p className="mt-2">
              <b>Shimla</b>, the capital of Himachal Pradesh, is one of India’s most popular hill stations. Known for its
              colonial charm, snow-capped peaks, pine forests, and bustling Mall Road, Shimla attracts visitors year-round.
              Its pleasant weather and scenic beauty make it an ideal getaway from the hustle of Delhi.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 340 km from Delhi</li>
              <li><b>Travel Time:</b> Around 7–8 hours by road</li>
              <li><b>Route:</b> Delhi – Sonipat – Panipat – Ambala – Kalka – Solan – Shimla (NH44 & NH5)</li>
              <li><b>Best Time to Visit:</b> March to June & October to February</li>
            </ul>
          </div>
        </section>

        {/* ✅ Top Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Shimla</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/The_Ridge_Shimla_5.jpg"
                alt="The Ridge Shimla"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">The Ridge</h4>
                <p className="text-sm mt-1">
                  The cultural hub of Shimla, offering panoramic views of snow-capped mountains and colonial architecture.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SMohuE8W-6sZBhMR7_pK0cgtk5TqtpcZnw&s"
                alt="Kufri Hills"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Kufri</h4>
                <p className="text-sm mt-1">
                  A small hill station near Shimla famous for snow sports, pony rides, and panoramic Himalayan views.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/0f/81/d0/christ-church-shimla.jpg?w=900&h=500&s=1"
                alt="Christ Church Shimla"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Christ Church</h4>
                <p className="text-sm mt-1">
                  One of North India’s oldest churches, known for its neo-Gothic architecture and peaceful ambience.
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
              <li>Delhi → Shimla: ~340 km / ~7–8 hrs</li>
              <li>Route: NH44 → NH5 (Delhi–Ambala–Kalka–Solan–Shimla)</li>
              <li>Stops: Murthal, Chandigarh, Solan</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, comfortable, and well-maintained cars</li>
              <li>Professional drivers with mountain driving experience</li>
              <li>Transparent pricing and no hidden charges</li>
              <li>24×7 booking support with on-time pickup</li>
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
                What is the fare for a Delhi to Shimla cab?
              </summary>
              <p className="mt-2">
                Fares start from ₹12.5/km for Sedans and vary depending on vehicle type and trip option.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Shimla?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers both one-way and round-trip taxi services from Delhi to Shimla.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are the best stopovers on the Delhi to Shimla route?
              </summary>
              <p className="mt-2">
                Popular stopovers include Murthal (for food), Chandigarh, Solan, and Timber Trail.
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

export default DelhiToShimla;
