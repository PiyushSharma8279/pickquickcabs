import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import useSEO from "../Hooks/UseSeo";

const DelhiToManali = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: "Delhi to Manali Cab | Taxi Service from Delhi to Manali - Pick Quick Cabs",
    description:
      "Book your Delhi to Manali cab with Pick Quick Cabs for a safe, comfortable, and scenic mountain journey. Affordable taxi fares, expert drivers, and one-way or round-trip options available.",
    url: "https://www.pickquickcabs.com/delhi-to-manali-cab",
  });

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* ✅ Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://www.indiadrivertours.com/wp-content/uploads/2017/06/tpkg-manalitour.jpg"
            alt="Delhi to Manali Cab Service"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Manali Cab Service
            </h1>
          </div>
        </section>

        {/* ✅ Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Manali Taxi Booking</h2>
          <p>
            Planning a trip from <b>Delhi to Manali</b>? Book your cab with <b>Pick Quick Cabs</b> and experience a smooth,
            safe, and scenic journey to one of India’s most beautiful hill stations. Our <b>Delhi to Manali cab service </b> 
            ensures a comfortable ride through mountains, valleys, and riverside roads.
          </p>
          <p>
            The route from Delhi to Manali takes you through <b>Chandigarh, Bilaspur, and Kullu</b>, offering breathtaking 
            Himalayan views. Choose from Sedans, SUVs, and Ertiga cabs driven by professional and experienced chauffeurs.
          </p>
        </section>

        {/* ✅ Travel Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-popular?qlt=82&ts=1726730921047"
            alt="Beas River Manali"
            className="w-full h-72 object-cover rounded-lg shadow"
          />
          <div>
            <h3 className="text-xl font-semibold">About Manali</h3>
            <p className="mt-2">
              <b>Manali</b>, nestled in the Kullu Valley of Himachal Pradesh, is a dream destination for nature lovers and 
              adventure enthusiasts. Surrounded by snow-clad peaks and lush pine forests, Manali offers everything from 
              serene landscapes to thrilling activities like river rafting, paragliding, and skiing.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><b>Distance:</b> Approx. 540 km from Delhi</li>
              <li><b>Travel Time:</b> Around 12–14 hours by road</li>
              <li><b>Route:</b> Delhi – Chandigarh – Bilaspur – Mandi – Kullu – Manali (NH44 & NH3)</li>
              <li><b>Best Time to Visit:</b> March to June & October to February</li>
            </ul>
          </div>
        </section>

        {/* ✅ Top Attractions */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Top Attractions in Manali</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/hidimba-temple-manali-himachal-pradesh-1-musthead-hero?qlt=82&ts=1726730732148"
                alt="Hadimba Temple Manali"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Hadimba Temple</h4>
                <p className="text-sm mt-1">
                  A beautiful wooden temple surrounded by cedar forests, dedicated to Goddess Hadimba.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncts9WOq98_JtJd2reikjqPik3V45KU2VgQ&s"
                alt="Solang Valley"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Solang Valley</h4>
                <p className="text-sm mt-1">
                  The adventure hub of Manali, famous for skiing, paragliding, snow scooters, and cable car rides.
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow">
              <img
                src="https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730701545"
                alt="Rohtang Pass"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h4 className="font-semibold text-lg">Rohtang Pass</h4>
                <p className="text-sm mt-1">
                  A high mountain pass offering snow adventures and panoramic views of the Pir Panjal Range.
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
              <li>Delhi → Manali: ~540 km / ~12–14 hrs</li>
              <li>Route: NH44 → NH3 (Delhi–Chandigarh–Mandi–Kullu–Manali)</li>
              <li>Stops: Murthal, Chandigarh, Mandi, Kullu</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Pick Quick Cabs</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Clean, comfortable, and well-maintained vehicles</li>
              <li>Experienced drivers for hilly terrains</li>
              <li>Transparent fares with no hidden costs</li>
              <li>24×7 customer support and on-time pickup</li>
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

        {/* ✅ FAQ Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                What is the fare for a Delhi to Manali cab?
              </summary>
              <p className="mt-2">
                Cab fares start from ₹12.5/km for Sedans and vary by vehicle type and trip plan.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                How long does it take to reach Manali from Delhi by cab?
              </summary>
              <p className="mt-2">
                It usually takes around 12–14 hours depending on traffic and weather conditions.
              </p>
            </details>

            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">
                Can I book a one-way cab from Delhi to Manali?
              </summary>
              <p className="mt-2">
                Yes, Pick Quick Cabs offers one-way as well as round-trip taxi services for Delhi to Manali.
              </p>
            </details>
          </div>
        </section>

        {/* ✅ CTA */}
        <section className="text-center">
          <p className="text-lg">
            Ready to start your Manali trip? Call us now at{" "}
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

export default DelhiToManali;
