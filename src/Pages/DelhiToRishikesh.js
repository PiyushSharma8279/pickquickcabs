import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToRishikesh = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Rishikesh Cab | Taxi Service from Delhi to Rishikesh - Pick Quick Cabs",
    description:
      "Book a comfortable and affordable Delhi to Rishikesh taxi with Pick Quick Cabs. Enjoy scenic drives, reliable service, and safe travel with professional drivers. One-way & round-trip cabs available.",
    url: "https://www.pickquickcabs.com/delhi-to-rishikesh-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/1-triveni-ghat-rishikesh-uttarakhand-2-city-hero?qlt=82&ts=1726646286991"
            alt="Delhi to Rishikesh Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Rishikesh Cab Service
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Rishikesh Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Rishikesh</b>? Book your ride with{" "}
            <b>Pick Quick Cabs</b> and experience a smooth and peaceful journey to
            one of India’s most spiritual and adventurous destinations. Whether you’re
            visiting for yoga, rafting, or a weekend getaway, our taxi service ensures
            a comfortable and reliable travel experience.
          </p>
          <p>
            Travel through scenic highways via <b>NH334</b> with professional drivers
            and clean cars. Choose from multiple cab options like Sedan, SUV, and
            Ertiga for both one-way and round trips.
          </p>
        </section>

        {/* Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://himalayanoutback.com/wp-content/uploads/2022/04/Interesting-Facts-About-Rishikesh.jpg"
            alt="Rishikesh Ganga Aarti"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Rishikesh</h3>
            <p className="mt-2">
              <b>Rishikesh</b>, known as the <b>Yoga Capital of the World</b>, lies on the
              banks of the holy river Ganga. It’s a perfect blend of spirituality,
              nature, and adventure. From sacred temples and ashrams to thrilling
              activities like <b>river rafting</b> and <b>bungee jumping</b>, Rishikesh has something for everyone.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 240 km from Delhi</li>
              <li><b>Travel Time:</b> Around 5–6 hours by road</li>
              <li><b>Route:</b> Delhi – Meerut – Muzaffarnagar – Roorkee – Rishikesh</li>
              <li><b>Best Time to Visit:</b> February to May, September to November</li>
            </ul>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Rishikesh</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.chardhamtour.in/blog/wp-content/uploads/2020/01/Laxman-Jhula-Rishikesh.jpg"
                alt="Laxman Jhula"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Laxman Jhula</h4>
                <p className="text-sm mt-1">
                  The iconic suspension bridge over the Ganges, offering beautiful views
                  and spiritual vibes.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/26/d3/c0/parmarth-niketan-ashram.jpg?w=900&h=500&s=1"
                alt="Parmarth Niketan"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Parmarth Niketan Ashram</h4>
                <p className="text-sm mt-1">
                  One of the largest ashrams in Rishikesh, famous for its evening Ganga
                  Aarti and yoga programs.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://raftingcampingrishikesh.com/images/shivpuri-rafting-deals.jpg"
                alt="Shivpuri River Rafting"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Shivpuri Rafting Point</h4>
                <p className="text-sm mt-1">
                  A hotspot for adventure lovers offering white-water rafting, camping,
                  and outdoor fun along the Ganga.
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
              <li>Delhi → Rishikesh: ~240 km / ~5–6 hrs</li>
              <li>Route: NH 334 via Meerut, Muzaffarnagar, Roorkee</li>
              <li>Stops: Cheetal Grand, Roorkee, and Shivpuri</li>
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
                What is the fare for a Delhi to Rishikesh cab?
              </summary>
              <p className="mt-2">
                The fare starts from ₹12.5/km for Sedan and varies by car type and travel preferences.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Is one-way cab service available from Delhi to Rishikesh?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers affordable one-way taxi service from Delhi to Rishikesh.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are the best places to stop on the way to Rishikesh?
              </summary>
              <p className="mt-2">
                Popular stopovers include Cheetal Grand, Roorkee, and Haridwar for refreshments or sightseeing.
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

export default DelhiToRishikesh;
