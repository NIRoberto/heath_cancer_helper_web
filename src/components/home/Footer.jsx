
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
export default function Footer() {
  return (
    <footer className="bg-[#0E1A34] text-white py-3">
      <div className="max-w-7xl mx-auto px-16 flex justify-between items-center">
        {/* Left - About Us */}
        <div className="flex-1">
          <p className="text-lg font-semibold playFair">About Us</p>
        </div>

        {/* Center - All Rights Reserved */}
        <div className="flex-1 text-center playFair">
          <p className="text-sm">All Rights Reserved 
            {/* &copy; 2024 */}

          </p>
        </div>

        {/* Right - Social Media & X Icon */}
        <div className="flex-1 flex justify-end items-center space-x-2">
          <FaXTwitter className="text-xl cursor-pointer hover:text-gray-400" />
          <CiInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </footer>
  );
}
