import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const NoidaToChardham = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 mt-32">
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="https://www.traveltoindia.org/blog/wp-content/uploads/2021/02/char-dham-1-1.webp"
            alt="Noida to Chardham Taxi"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              Delhi to Char Dham Yatra Taxi Service
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Delhi to Char Dham Yatra Cab Service</h2>
          <p>
            Embark on a spiritual journey with <b>Pick Quick Cabs</b> from Delhi to the holy Char Dham —
            <b> Yamunotri, Gangotri, Kedarnath,</b> and <b>Badrinath</b>. Our reliable and comfortable
            taxi services ensure a safe and serene pilgrimage experience through the divine Himalayas.
          </p>
        </section>

        {/* Char Dham Details */}
        <section className="space-y-10">
          <h3 className="text-2xl font-semibold text-center">Char Dham Yatra Overview</h3>

          {/* Yamunotri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://temple.yatradham.org/public/Product/temple/temple_fO4FL40m_202506241837100.webp"
              alt="Yamunotri Dham"
              className="w-full h-72 object-cover rounded-lg shadow"
            />
            <div>
              <h4 className="text-xl font-semibold">Yamunotri Dham</h4>
              <p className="mt-2">
                The sacred source of the Yamuna River, <b>Yamunotri</b> is dedicated to Goddess Yamuna.
                It is located in the Garhwal Himalayas and offers a breathtaking view of snow-clad peaks.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li><b>Location:</b> Uttarkashi District</li>
                <li><b>Main Temple:</b> Yamuna Devi Temple</li>
                <li><b>Best Time to Visit:</b> May to October</li>
                <li><b>Highlights:</b> Hot water springs of Surya Kund & Divya Shila</li>
              </ul>
            </div>
          </div>

          {/* Gangotri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div>
              <h4 className="text-xl font-semibold">Gangotri Dham</h4>
              <p className="mt-2">
                <b>Gangotri</b> marks the origin of the holy Ganga River and is dedicated to Goddess Ganga.
                Surrounded by majestic glaciers and pine forests, it symbolizes purity and spiritual awakening.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li><b>Location:</b> Uttarkashi District</li>
                <li><b>Main Temple:</b> Gangotri Temple</li>
                <li><b>Best Time to Visit:</b> May to October</li>
                <li><b>Highlights:</b> Bhagirath Shila & Gaumukh Glacier Trek</li>
              </ul>
            </div>
            <img
              src="https://static.toiimg.com/photo/msid-87566208,width-96,height-65.cms"
              alt="Gangotri Dham"
              className="w-full h-72 object-cover rounded-lg shadow"
            />
          </div>

          {/* Kedarnath */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://t.eucdn.in/tourism/lg-jpg/kedarnath-2240900.jpg"
              alt="Kedarnath Dham"
              className="w-full h-72 object-cover rounded-lg shadow"
            />
            <div>
              <h4 className="text-xl font-semibold">Kedarnath Dham</h4>
              <p className="mt-2">
                Dedicated to Lord Shiva, <b>Kedarnath</b> is one of the twelve Jyotirlingas and is surrounded
                by the snow-covered peaks of the Himalayas. Pilgrims trek to the temple through scenic routes.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li><b>Location:</b> Rudraprayag District</li>
                <li><b>Main Temple:</b> Kedarnath Temple</li>
                <li><b>Best Time to Visit:</b> May to October</li>
                <li><b>Highlights:</b> Trekking route from Gaurikund & stunning mountain vistas</li>
              </ul>
            </div>
          </div>

          {/* Badrinath */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div>
              <h4 className="text-xl font-semibold">Badrinath Dham</h4>
              <p className="mt-2">
                <b>Badrinath</b>, dedicated to Lord Vishnu, is located between the Nar and Narayan mountain
                ranges along the banks of the Alaknanda River. It is the last stop in the Char Dham circuit.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li><b>Location:</b> Chamoli District</li>
                <li><b>Main Temple:</b> Badrinath Temple</li>
                <li><b>Best Time to Visit:</b> May to November</li>
                <li><b>Highlights:</b> Tapt Kund, Neelkanth Peak & Mana Village</li>
              </ul>
            </div>
            <img
              src="https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp"
              alt="Badrinath Dham"
              className="w-full h-72 object-cover rounded-lg shadow"
            />
          </div>
        </section>

        {/* Travel Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Distance & Travel Time</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delhi → Yamunotri: ~400 km / ~11-12 hrs</li>
              <li>Yamunotri → Gangotri: ~230 km / ~7-8 hrs</li>
              <li>Gangotri → Kedarnath: ~270 km + 18 km trek</li>
              <li>Kedarnath → Badrinath: ~220 km / ~8 hrs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Why Choose Us</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Well-maintained & clean vehicles</li>
              <li>Experienced drivers familiar with hilly terrain</li>
              <li>Transparent pricing with no hidden charges</li>
              <li>24/7 customer support & on-time pickups</li>
            </ul>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold">Vehicle Options & Fare</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sedan */}
            <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
              <img
                src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80"
                alt="Sedan"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="text-lg font-medium">Sedan (Dzire / Similar)</h4>
              <p>Seats: 4+1</p>
              <p>Starting Fare: ₹12/km</p>
              <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={()=> navigate('/book-a-ride')}
              >
                Book Cab
              </button>
            </div>

            {/* SUV */}
            <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
              <img
                src="https://static3.toyotabharat.com/images/showroom/innova-mmc/silver-color-1600x600.png"
                alt="SUV"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="text-lg font-medium">SUV / Innova</h4>
              <p>Seats: 6+1</p>
              <p>Starting Fare: ₹16/km</p>
              <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={()=> navigate('/book-a-ride')}
              >
                Book Cab
              </button>
            </div>

            {/* WagonR */}
            <div className="border rounded-lg p-4 flex flex-col items-center space-y-3">
              <img
                src="https://www.varunmaruti.com/uploads/products/colors/wagonr-superior-white.png"
                alt="WagonR"
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="text-lg font-medium">WagonR</h4>
              <p>Seats: 4+1</p>
              <p>Starting Fare: ₹10/km</p>
              <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={()=> navigate('/book-a-ride')}
              >
                Book Cab
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">What is included in the fare?</summary>
              <p className="mt-2">
                The fare includes driver allowance, fuel, tolls, and parking. Accommodation and food
                charges are extra.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">Is the route safe for senior citizens?</summary>
              <p className="mt-2">
                Yes, our experienced drivers ensure safe driving through hilly terrain, with regular
                rest stops for elderly passengers.
              </p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="font-medium cursor-pointer">When does Char Dham Yatra open?</summary>
              <p className="mt-2">
                The Yatra usually opens in late April or early May and continues until November, depending
                on weather conditions.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-lg">
            Ready to begin your sacred journey? Call us now at{" "}
            <a href="tel:+918447433852" className="text-yellow-600 font-semibold">
              +91-8447433852
            </a>
          </p>
        </section>
      </div>

      {/* Mission and Values */}
      <div className="flex justify-center">
        <div className="md:p-10 p-2 md:max-w-4xl">
          <h2 className="text-2xl py-2 font-bold">Our Mission</h2>
          <p>
            Our mission is to make Char Dham Yatra accessible, safe, and comfortable for every pilgrim.
            We guarantee confirmed cab bookings, transparent fares, and timely services throughout your
            divine journey.
          </p>

          <h2 className="text-2xl py-4 font-bold">Why Choose Us?</h2>
          <p>
            We aim to deliver seamless travel experiences with trained drivers, well-maintained vehicles,
            and 24/7 support, ensuring your pilgrimage is peaceful and memorable.
          </p>

          <h2 className="text-2xl py-4 font-bold">Comfort and Safety Guaranteed</h2>
          <p>
            Our cars undergo regular servicing and inspections, ensuring top safety standards for travelers
            through the Himalayan routes.
          </p>

          <h2 className="text-2xl py-4 font-bold">Luxury Options Available</h2>
          <p>
            Travel in style with our premium sedans and SUVs for a smooth, comfortable, and luxurious ride
            during your Char Dham Yatra.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NoidaToChardham;
