// src/components/Footer.jsx

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
  return (
    <footer className="bg-black text-white font-poppins">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-8 px-10 py-14">
        {/* About Us */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">
            There are many vari of pass of lorem ipsum availab but the majority
            have suffered in some form by injected humour or words
          </p>
          <div className="flex gap-4 mt-4 text-white">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faGooglePlusG} />
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-xl font-semibold mb-3">Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About</li>
            <li>Get a Taxi</li>
            <li>Our Reviews</li>
            <li>Latest News</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-xl font-semibold mb-3">Pages</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About</li>
            <li>Get a Taxi</li>
            <li>Our Reviews</li>
            <li>Latest News</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 mb-2">
            86 Road Brooklyn Street, 600<br />
            New York, USA
          </p>
          <p className="flex items-center gap-2 text-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400" />
            needhelp@conexi.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-white">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-400" />
            666 888 000
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Sign up now for our mailing list to get all latest news and updates
            from conexi company.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-full px-4 py-2 outline-none text-black w-full"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-2 rounded-r-full font-semibold"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-5 px-10 flex flex-wrap justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <img
            src="https://old3.commonsupport.com/wp/conexi/wp-content/themes/conexi/assets/images/footer-logo.png"
            alt="conexi"
            className="h-5"
          />
          <span>© 2025</span>
          <a
            href="https://tonatheme.com"
            className="text-yellow-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tonatheme.com
          </a>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-5 right-5">
        <button className="bg-yellow-400 text-black p-3 rounded-full shadow-md">
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
