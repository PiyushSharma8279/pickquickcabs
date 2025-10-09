import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import contact from "../../Images/contact.jpg";
import emailjs from "@emailjs/browser";
import useSEO from "../../Hooks/UseSeo";

const slide = {
  img: contact,
  title: "Contact",
};

function MyMap() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   useSEO({
      title: "Contact Us | Pick Quick Cabs",
      description:
        "If you want to contact Pick Quick Cabs, please fill the contact form",
      url: "https://www.pickquickcabs.com/contact-us",
    });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_324x93o", 
        "template_1yvys1c", 
        form.current,
        "1QSwyrkcgvg5ZOy29" 
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setMessage("❌ Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0776583595484!2d77.3481943!3d28.597447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36a4efc0cb3%3A0x1e536c50e3d5d0aa!2sMoolchand%20Tower!5e0!3m2!1sen!2sin!4v1585748449162!5m2!1sen!2sin";

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="relative mt-32 h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white px-4"
        style={{
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-3xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug drop-shadow-lg">
            {slide.title}
          </h1>
        </div>
      </div>

      {/* Google Map */}
      <div className="my-12 px-4">
        <iframe
          title="Moolchand Tower map"
          src={src}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Contact Form */}
      <div className="my-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Leave a message</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              className="border p-3 rounded w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_phone"
              placeholder="Phone"
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border p-3 rounded w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write message"
            rows="5"
            className="border p-3 rounded w-full"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-yellow-300" : "bg-yellow-400 hover:bg-yellow-500"
            } text-black font-semibold py-3 px-6 rounded w-full transition duration-200`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p className="text-center mt-4 font-medium text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
}

export default MyMap;
