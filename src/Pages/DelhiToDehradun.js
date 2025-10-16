import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";


const DelhiToDehradun = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Dehradun Cab | Taxi Service from Delhi to Dehradun - Pick Quick Cabs",
    description:
      "Book reliable and affordable Delhi to Dehradun taxi with Pick Quick Cabs. Clean cars, expert drivers, and safe rides. One-way & round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-dehradun-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/mountains-dehradun-uttrakhand-city-1-hero?qlt=82"
            alt="Delhi to Dehradun Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Dehradun Cab Service
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Dehradun Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Dehradun</b>? Book your ride with{" "}
            <b>Pick Quick Cabs</b> for a comfortable and safe journey through the
            scenic beauty of Uttarakhand. Whether you're heading for business,
            leisure, or education, our cab service ensures a smooth travel experience.
          </p>
          <p>
            Enjoy a hassle-free ride on the <b>NH 334 and Saharanpur Road</b> with our
            experienced drivers. Choose from a range of vehicles like Sedan, SUV, and
            premium cars for one-way or round trips.
          </p>
        </section>

        {/* Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://media.istockphoto.com/id/1140128164/photo/mussoorie-landscape-in-cloudy-rainy-monsoon-season-stock-image.jpg?s=612x612&w=0&k=20&c=j-S1rhG75D8YNwidXt_Wt3KdqWjLxeJBFViPnCcUsZ0="
            alt="Dehradun City View"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Dehradun</h3>
            <p className="mt-2">
              Nestled in the Doon Valley at the foothills of the Himalayas,
              <b> Dehradun</b> is a charming hill city known for its pleasant
              weather, lush greenery, and educational institutions like the
              <b> Doon School</b> and <b>Forest Research Institute</b>.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 250 km from Delhi</li>
              <li><b>Travel Time:</b> Around 5–6 hours by road</li>
              <li><b>Route:</b> Delhi – Meerut – Muzaffarnagar – Roorkee – Dehradun</li>
              <li><b>Best Time to Visit:</b> March to June, October to December</li>
            </ul>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Dehradun</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.holidify.com/images/cmsuploads/compressed/Robbers-Cave_20220113172949.jpeg"
                alt="Robber’s Cave"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Robber’s Cave (Gucchupani)</h4>
                <p className="text-sm mt-1">A natural cave river formation, perfect for short treks and cool dips.</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://rajajijunglesafari.com/wp-content/uploads/tapkeshwar-temple-dehradun.jpg"
                alt="Tapkeshwar Temple"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Tapkeshwar Temple</h4>
                <p className="text-sm mt-1">A sacred cave temple dedicated to Lord Shiva, located beside a seasonal river.</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfMu_ZgTiJK894pcrtMjVeLLWw7_RG8lOxg&s"
                alt="Forest Research Institute"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Forest Research Institute (FRI)</h4>
                <p className="text-sm mt-1">An architectural marvel and museum showcasing India’s forestry heritage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Distance & Travel Time</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delhi → Dehradun: ~250 km / ~5–6 hrs</li>
              <li>Route: NH 334 via Meerut, Muzaffarnagar, Roorkee</li>
              <li>Stops: Cheetal Grand, Roorkee, and Mohand</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, sanitized & comfortable vehicles</li>
              <li>Professional and experienced drivers</li>
              <li>Affordable one-way & round-trip options</li>
              <li>24/7 customer support & easy booking</li>
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
                What is the fare for a Delhi to Dehradun cab?
              </summary>
              <p className="mt-2">
                The fare starts from ₹12.5/km for Sedan and may vary depending on the car type and route.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Do you provide one-way cab service?
              </summary>
              <p className="mt-2">
                Yes, one-way taxi service from Delhi to Dehradun is available at discounted fares.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Are night travel and round trips available?
              </summary>
              <p className="mt-2">
                Yes, both options are available. Our drivers are trained for long-distance and night travel.
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

export default DelhiToDehradun;
