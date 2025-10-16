import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleCopy = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.keyCode === 67) || // Ctrl+C
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white font-poppins select-none relative">
      {/* --- Main Footer --- */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 px-6 py-16">
        {/* About Section */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            About Us
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Pick Quick Cabs offers instant and easy bookings straight from your
            phone. Whether you’re planning a family trip or a business ride,
            we’re just a call or click away.
          </p>
          <div className="flex gap-4 mt-5 text-white">
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-yellow-500 rounded-full transition"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-yellow-500 rounded-full transition"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-yellow-500 rounded-full transition"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-yellow-500 rounded-full transition"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            {[
              ["Home", "/"],
              ["Our Taxi", "/our-taxi-service"],
              ["About", "/about-us"],
                ["Blog", "/blog"],
                ["Contact", "/contact-us"],
             
              ["Delhi to Nainital", "/delhi-to-nanital-taxi-service"],
              ["Delhi to Haldwani", "/delhi-to-haldwani-taxi-service"],
              ["Delhi to Massoorie", "/delhi-to-mussoorie-taxi-service"],
              ["Delhi to Shimla", "/delhi-to-shimla-taxi-service"],
              
            ].map(([label, path]) => (
              <li
                key={label}
                onClick={() => navigate(path)}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* More Routes */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Popular Routes
          </h3>
          <ul className="space-y-2 text-gray-400">
            {[
              ["Delhi to Rudrapur", "/delhi-to-rudrapur-taxi-service"],
               ["Delhi to Dehradun", "/delhi-to-dehradun-taxi-service"],
              ["Delhi to Rishikesh", "/delhi-to-rishikesh-taxi-service"],
              ["Delhi to Haridwar", "/delhi-to-haridwar-taxi-service"],
            
              ["Char Dham Yatra", "/char-dham-yatra-cab-service"],
              ["Delhi to Agra", "/delhi-to-agra-taxi-service"],
              ["Delhi to Mathura", "/delhi-to-mathura-taxi-service"],
              ["Delhi to Jaipur", "/delhi-to-jaipur-taxi-service"],
              ["Delhi to Kainchi Dham", "/delhi-to-kainchi-dham-taxi-service"],
              ["Delhi to Manali", "/delhi-to-manali-taxi-service"],
            ].map(([label, path]) => (
              <li
                key={label}
                onClick={() => navigate(path)}
                className="cursor-pointer hover:text-yellow-400 transition"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Contact
          </h3>
          <p className="text-gray-400 mb-2">Ghaziabad, India</p>
          <p className="flex items-center gap-2 text-gray-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" />
            help@pickquickcabs.com
          </p>
          <p className="flex items-center gap-2 text-gray-300 mt-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" />
            book@pickquickcabs.com
          </p>
          <p className="flex items-center gap-2 text-gray-300 mt-2">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-400" />
            +91 8447433852
          </p>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-800 py-5 px-6 flex flex-wrap justify-between items-center text-gray-400 text-sm bg-gray-950">
        <span>© 2025 Pick Quick Cabs. All Rights Reserved.</span>
        <span>Created by: 
           <a href="https://www.techcodence.com/" target="blank" className="hover:text-yellow-400 cursor-pointer transition"> TECH Codence Technologies</a>
          </span>

        <div className="flex gap-6 mt-2 md:mt-0">
          <p
            onClick={() => navigate("/terms-and-conditions")}
            className="hover:text-yellow-400 cursor-pointer transition"
          >
            Terms of Use
          </p>
          <p
            onClick={() => navigate("/privacy-policy")}
            className="hover:text-yellow-400 cursor-pointer transition"
          >
            Privacy Policy
          </p>
        </div>
      </div>

      {/* --- Scroll to Top Button --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollTop}
          className="bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:scale-110 hover:bg-yellow-500 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
