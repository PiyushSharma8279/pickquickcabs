import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToRudrapur = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Rudrapur Cab | Taxi Service from Delhi to Rudrapur - Pick Quick Cabs",
    description:
      "Book reliable and affordable Delhi to Rudrapur cabs with Pick Quick Cabs. Enjoy a comfortable and safe ride through scenic Uttarakhand routes with professional drivers. One-way & round-trip available.",
    url: "https://www.pickquickcabs.com/delhi-to-rudrapur-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/02/Places-To-Visit-Near-Rudrapur-cp-840x425.jpg"
            alt="Delhi to Rudrapur Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Rudrapur Cab Service
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Rudrapur Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Rudrapur</b>? Book your journey with{" "}
            <b>Pick Quick Cabs</b> and experience a smooth and convenient ride to
            Uttarakhand’s industrial and cultural hub. Whether for business,
            family, or leisure, our <b>Delhi to Rudrapur cab service</b> ensures
            comfort, safety, and reliability.
          </p>
          <p>
            The drive via <b>NH9</b> offers scenic views and smooth highways
            through Ghaziabad, Moradabad, and Rampur before reaching Rudrapur.
            Choose from Sedans, SUVs, or Ertiga vehicles, all driven by
            experienced chauffeurs for a hassle-free experience.
          </p>
        </section>

        {/* Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://tripxl.com/blog/wp-content/uploads/2025/02/Bhimtal-2.jpg"
            alt="Rudrapur City"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Rudrapur</h3>
            <p className="mt-2">
              <b>Rudrapur</b> is one of the most rapidly developing cities in
              Uttarakhand, located in the Udham Singh Nagar district. Known for
              its industrial growth and proximity to major tourist destinations
              like Nainital and Jim Corbett, it offers both business
              opportunities and serene surroundings.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 250 km from Delhi</li>
              <li><b>Travel Time:</b> Around 6 hours by road</li>
              <li><b>Route:</b> Delhi – Moradabad – Rampur – Rudrapur</li>
              <li><b>Best Time to Visit:</b> October to March</li>
            </ul>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions Near Rudrapur</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Rudrapur_Nanak_matta_gurudwara_1_l_480_640.jpg"
                alt="Nanak Mata Sahib Gurudwara"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Nanak Mata Sahib Gurudwara</h4>
                <p className="text-sm mt-1">
                  A sacred Sikh pilgrimage site located about 25 km from Rudrapur,
                  known for its spiritual peace and historic significance.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://www.chardhamtours.in/gallery/cityImage/1463124214_Atariya-temple.jpg"
                alt="Atariya Temple"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Atariya Temple</h4>
                <p className="text-sm mt-1">
                  A revered temple dedicated to Goddess Atariya, attracting
                  devotees from across the region, especially during Navratri.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://live-core-api.travalour.com/common/v1/thumbnail/b51c9c21-32e1-11ea-a2af-0ec82d6f8976?format=webp&width=960"
                alt="Giri Tal Lake"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Giri Tal Lake</h4>
                <p className="text-sm mt-1">
                  A serene water body near Rudrapur, perfect for picnics, quiet
                  walks, and birdwatching.
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
              <li>Delhi → Rudrapur: ~250 km / ~6 hrs</li>
              <li>Route: NH9 via Moradabad and Rampur</li>
              <li>Stops: Gajraula, Rampur, and Bilaspur</li>
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
                What is the fare for a Delhi to Rudrapur cab?
              </summary>
              <p className="mt-2">
                The fare starts from ₹12.5/km for Sedan and varies depending on
                the vehicle type and route.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Rudrapur?
              </summary>
              <p className="mt-2">
                Yes, we offer both one-way and round-trip cab services from Delhi
                to Rudrapur.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What are some popular stopovers on the way to Rudrapur?
              </summary>
              <p className="mt-2">
                You can take short breaks at Gajraula for food, Rampur for rest,
                and Bilaspur for sightseeing.
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

export default DelhiToRudrapur;
