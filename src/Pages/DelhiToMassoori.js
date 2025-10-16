import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToMussoorie = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Mussoorie Cab | Taxi Service from Delhi to Mussoorie - Pick Quick Cabs",
    description:
      "Book a Delhi to Mussoorie cab with Pick Quick Cabs for a comfortable hill drive to the Queen of Hills. Safe, reliable, and affordable taxi services with one-way & round-trip options.",
    url: "https://www.pickquickcabs.com/delhi-to-mussoorie-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* ✅ Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1746526797mussorroe.jpg"
            alt="Delhi to Mussoorie Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Mussoorie Cab Service
            </h1>
          </div>
        </section>

        {/* ✅ Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Mussoorie Taxi Booking</h2>
          <p>
            Planning a refreshing hill station getaway from <b>Delhi to Mussoorie</b>? Book your cab with{" "}
            <b>Pick Quick Cabs</b> and experience a smooth and scenic journey to the <b>Queen of Hills</b>. Whether it’s a
            weekend trip, family vacation, or honeymoon, our <b>Delhi to Mussoorie cab service</b> guarantees comfort,
            safety, and on-time service.
          </p>
          <p>
            The route from Delhi to Mussoorie via <b>NH334</b> offers a pleasant drive through Meerut, Muzaffarnagar, and
            Dehradun. Choose from Sedans, SUVs, or Ertiga vehicles with professional drivers for a relaxed and memorable
            hill journey.
          </p>
        </section>

        {/* ✅ Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://www.jaypeehotels.com/blog/wp-content/uploads/2022/11/Mussoorie.jpg"
            alt="Mussoorie City View"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Mussoorie</h3>
            <p className="mt-2">
              <b>Mussoorie</b>, known as the <b>Queen of Hills</b>, is a charming hill station in Uttarakhand located at
              6,000 feet above sea level. Overlooking the Doon Valley and the snow-clad Himalayas, Mussoorie offers a
              perfect blend of natural beauty, colonial charm, and vibrant markets. It’s a favorite weekend getaway for
              travelers from Delhi and NCR.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 290 km from Delhi</li>
              <li><b>Travel Time:</b> Around 6–7 hours by road</li>
              <li><b>Route:</b> Delhi – Meerut – Muzaffarnagar – Dehradun – Mussoorie (NH334)</li>
              <li><b>Best Time to Visit:</b> March to June & September to November</li>
            </ul>
          </div>
        </section>

        {/* ✅ Top Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Mussoorie</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.tusktravel.com/blog/wp-content/uploads/2023/09/Valley-of-Kempty-Falls-Uttarakhand.jpg"
                alt="Kempty Falls"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Kempty Falls</h4>
                <p className="text-sm mt-1">
                  A stunning waterfall located 13 km from Mussoorie, perfect for picnics and enjoying the cool mountain breeze.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://mussoorietourism.co.in/images/places-to-visit/header/gun-hill-point-mussoorie-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                alt="Gun Hill Point"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Gun Hill Point</h4>
                <p className="text-sm mt-1">
                  The second-highest peak in Mussoorie, accessible by cable car, offering panoramic views of the Himalayas.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZlM95qG1scxO7BmbXH8kV5Qy7O6CuZrwVQ&s"
                alt="Mall Road Mussoorie"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Mall Road</h4>
                <p className="text-sm mt-1">
                  A lively street filled with shops, cafés, and colonial-era architecture — the heart of Mussoorie tourism.
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
              <li>Delhi → Mussoorie: ~290 km / ~6–7 hrs</li>
              <li>Route: NH334 (Delhi–Meerut–Muzaffarnagar–Dehradun–Mussoorie)</li>
              <li>Stops: Meerut, Muzaffarnagar, Dehradun</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, comfortable vehicles</li>
              <li>Experienced and courteous drivers</li>
              <li>Affordable and transparent pricing</li>
              <li>24×7 customer support and easy booking</li>
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
                What is the fare for a Delhi to Mussoorie cab?
              </summary>
              <p className="mt-2">
                Fares start from ₹12.5/km for Sedan and vary depending on the vehicle type and travel plan.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Mussoorie?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers both one-way and round-trip taxi services from Delhi to Mussoorie.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are the best stopovers on the Delhi to Mussoorie route?
              </summary>
              <p className="mt-2">
                Popular stops include Cheetal Grand (Khatauli), Dehradun, and Daat Kali Temple near the foothills.
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

export default DelhiToMussoorie;
