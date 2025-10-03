// src/components/Footer.jsx
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
  const navigate = useNavigate()
  return (
    <footer className="bg-black text-white font-poppins">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-8 px-10 py-14">
        {/* About Us */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">
            Pick Quick Cabs offer instant and easy bookings straight from your phone. Give us a call or you can make your booking from our official website. 
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
            <li onClick={()=> navigate('/')}>Home</li>
            <li onClick={()=> navigate('/our-taxi')}>Our Taxi</li>
            <li>Our Reviews</li>
            <li>Latest News</li>
            <li onClick={()=> navigate('/contact')}>Contact</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-xl font-semibold mb-3">Pages</h3>
          <ul className="text-gray-400 space-y-2">
           <li onClick={()=> navigate('/about')}>About</li>
            <li onClick={()=> navigate('/blog')}>Blog</li>
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
           help@pickquickcabs.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-white">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-400" />
            8447433852
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-4">
             For our mailing list to get all latest news and updates
            from pickquickcabs company.
          </p>
          
        </div>
      </div>

      
      <div className="border-t border-gray-800 py-5 px-10 flex flex-wrap justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          
          <span>CopyRight © 2025</span>
        
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="" className="hover:underline">
            Terms of Use
          </a>
          <a href="" className="hover:underline">
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
