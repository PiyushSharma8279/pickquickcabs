import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToKainchiDham = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Kainchi Dham Cab | Taxi Service from Delhi to Kainchi Dham - Pick Quick Cabs",
    description:
      "Book a comfortable Delhi to Kainchi Dham cab with Pick Quick Cabs. Visit the famous Neem Karoli Baba Ashram with reliable taxi services and experienced drivers. One-way & round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-kainchi-dham-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* ✅ Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://www.epicyatra.com/wp-content/uploads/2024/09/uttrakhand-kainchi-dham.webp"
            alt="Delhi to Kainchi Dham Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Kainchi Dham Cab Service
            </h1>
          </div>
        </section>

        {/* ✅ Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Kainchi Dham Taxi Booking</h2>
          <p>
            Planning a spiritual journey from <b>Delhi to Kainchi Dham</b>? Book your
            ride with <b>Pick Quick Cabs</b> for a peaceful and comfortable trip to the
            sacred <b>Neem Karoli Baba Ashram</b> nestled in the Kumaon hills near
            Nainital. Whether traveling solo, with family, or friends, our{" "}
            <b>Delhi to Kainchi Dham cab service</b> ensures a smooth and safe ride.
          </p>
          <p>
            The route from Delhi to Kainchi Dham via <b>NH9</b> is scenic, offering
            beautiful mountain views as you approach Uttarakhand. Choose from Sedans,
            SUVs, or Ertiga vehicles driven by professional chauffeurs for a relaxed
            experience.
          </p>
        </section>

        {/* ✅ Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://www.northpointeatery.com/cdn/shop/articles/neem-karoli-baba_800x.jpg?v=1748937303"
            alt="Kainchi Dham Temple"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Kainchi Dham</h3>
            <p className="mt-2">
              <b>Kainchi Dham</b> is a serene ashram and temple dedicated to{" "}
              <b>Neem Karoli Baba</b>, located near Bhowali in the Nainital district of
              Uttarakhand. Surrounded by lush hills and a flowing stream, it attracts
              thousands of devotees from across the world, including notable visitors
              like Steve Jobs and Mark Zuckerberg.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 340 km from Delhi</li>
              <li><b>Travel Time:</b> Around 7–8 hours by road</li>
              <li><b>Route:</b> Delhi – Hapur – Moradabad – Rampur – Haldwani – Kainchi Dham (NH9)</li>
              <li><b>Best Time to Visit:</b> March to June & September to November</li>
            </ul>
          </div>
        </section>

        {/* ✅ Top Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions Near Kainchi Dham</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.epicyatra.com/wp-content/uploads/2024/10/rc907tar3quwpgtqconnmkq2xoc4_1463055194_19445153856_75d9ffb868_b.webp"
                alt="Kainchi Dham Ashram"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Kainchi Dham Ashram</h4>
                <p className="text-sm mt-1">
                  The main attraction, this peaceful ashram is dedicated to Neem Karoli Baba and welcomes devotees throughout the year.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2e/b4/5d/nainital-lake.jpg?w=1200&h=1200&s=1"
                alt="Nainital Lake"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Nainital Lake</h4>
                <p className="text-sm mt-1">
                  Just 20 km away, the beautiful Nainital Lake offers boating and a serene hill-station experience.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZRS2fubBbIGMqJJgeY4o4mEv9kxYmSjG-A&s"
                alt="Bhimtal Lake"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Bhimtal Lake</h4>
                <p className="text-sm mt-1">
                  A picturesque lake with an island temple, Bhimtal is another nearby gem perfect for a peaceful stopover.
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
              <li>Delhi → Kainchi Dham: ~340 km / ~7–8 hrs</li>
              <li>Route: NH9 (Delhi–Hapur–Moradabad–Rampur–Haldwani–Kainchi Dham)</li>
              <li>Stops: Gajraula, Rampur, Kathgodam</li>
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
                What is the fare for a Delhi to Kainchi Dham cab?
              </summary>
              <p className="mt-2">
                Fares start from ₹12.5/km for Sedan and may vary depending on the vehicle type and trip option.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Kainchi Dham?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers both one-way and round-trip taxi services for Delhi to Kainchi Dham.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are the best stopovers on the Delhi to Kainchi Dham route?
              </summary>
              <p className="mt-2">
                Recommended stops include Gajraula for food, Rampur for rest, and Haldwani for refreshments.
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

export default DelhiToKainchiDham;
