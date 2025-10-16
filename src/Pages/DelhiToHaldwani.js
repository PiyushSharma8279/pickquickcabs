import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToHaldwani = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Haldwani Cab | Taxi Service from Delhi to Haldwani - Pick Quick Cabs",
    description:
      "Book reliable and affordable Delhi to Haldwani cabs with Pick Quick Cabs. Enjoy a comfortable and safe ride through scenic Uttarakhand plains with professional drivers. One-way & round-trip available.",
    url: "https://www.pickquickcabs.com/delhi-to-haldwani-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68075-Haldwani.jpg"
            alt="Delhi to Haldwani Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Haldwani Cab Service
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Haldwani Taxi Booking</h2>
          <p>
            Planning a road trip from <b>Delhi to Haldwani</b>? Book your journey with{" "}
            <b>Pick Quick Cabs</b> and experience a smooth and scenic drive to the gateway of Kumaon.
            Whether you’re traveling for work, family, or leisure, our{" "}
            <b>Delhi to Haldwani cab service</b> ensures comfort and reliability throughout your ride.
          </p>
          <p>
            The journey offers a pleasant drive via <b>NH9</b>, passing through Moradabad and Rampur
            before entering Uttarakhand’s lush green plains. Choose from Sedans, SUVs, or Ertiga
            vehicles, all driven by experienced chauffeurs for a stress-free experience.
          </p>
        </section>

        {/* Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68075-Haldwani.jpg"
            alt="Haldwani City"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Haldwani</h3>
            <p className="mt-2">
              <b>Haldwani</b>, known as the <b>‘Gateway to Kumaon’</b>, is one of Uttarakhand’s busiest
              and most vibrant cities. Located in the foothills of the Himalayas, it serves as the main
              entry point to hill stations like Nainital, Bhimtal, and Almora. With its bustling markets,
              temples, and proximity to nature, Haldwani offers the perfect mix of city and hills.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 275 km from Delhi</li>
              <li><b>Travel Time:</b> Around 6–7 hours by road</li>
              <li><b>Route:</b> Delhi – Moradabad – Rampur – Rudrapur – Haldwani</li>
              <li><b>Best Time to Visit:</b> Throughout the year, especially Oct–March</li>
            </ul>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions Near Haldwani</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ff/a4/41/bhimtal-lake-boating.jpg?w=1200&h=-1&s=1"
                alt="Bhimtal Lake"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Bhimtal Lake</h4>
                <p className="text-sm mt-1">
                  A calm and scenic lake located just 20 km from Haldwani, perfect for boating and sightseeing.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/c0/a0/gaula-river.jpg?w=1200&h=-1&s=1"
                alt="Gaula River"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Gaula River</h4>
                <p className="text-sm mt-1">
                  A picturesque river that flows along Haldwani — great for picnics, short walks, and photography.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9a_P_vYRJZ8nc17I4aoQUXyfjzPwDNGMEw&s"
                alt="Kathgodam"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Kathgodam</h4>
                <p className="text-sm mt-1">
                  Just a few kilometers from Haldwani, this beautiful town is known for its railway station and serene landscapes.
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
              <li>Delhi → Haldwani: ~275 km / ~6–7 hrs</li>
              <li>Route: NH9 via Moradabad, Rampur, Rudrapur</li>
              <li>Stops: Gajraula, Rampur, and Rudrapur</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Well-maintained, comfortable vehicles</li>
              <li>Experienced and polite drivers</li>
              <li>Affordable one-way & round-trip fares</li>
              <li>24×7 booking support & on-time service</li>
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
                What is the fare for a Delhi to Haldwani cab?
              </summary>
              <p className="mt-2">
                The fare starts from ₹12.5/km for Sedan and may vary depending on the type of vehicle and route.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Haldwani?
              </summary>
              <p className="mt-2">
                Yes, we provide both one-way and round-trip cab services from Delhi to Haldwani.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are some good stopovers on the way to Haldwani?
              </summary>
              <p className="mt-2">
                Popular stops include Gajraula for food, Rampur for rest, and Rudrapur for sightseeing.
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

export default DelhiToHaldwani;
