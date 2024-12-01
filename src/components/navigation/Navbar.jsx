import logo from "../../assets/images/logo.png";
import CustomButton from "../button/Button";
import "./navigation.css";
const Navbar = ({ isBackground = false }) => {
  return (
    <nav
      className={`${
        isBackground ? "bg-[#0E1A34]" : "bg-transparent absolute top-0 "
      } w-full z-10  navigation`}
    >
      <div className="flex justify-between items-center h-20 ww-ful ">
        {/* Logo and Navigation Links */}
        <div className="flex items-center justify-between w-[50%]">
          <div className="w-150 ">
            <img
              src={logo}
              alt="MyDocta Logo"
              className="w-full h-20 object-contain"
            />
          </div>
          <div className="flex space-x-8">
            <a href="/" className="text-white font-medium hover:text-gray-400">
              Home
            </a>
            <a href="/services" className="text-white/80 hover:text-white">
              Services
            </a>
            <a href="/mydoctor" className="text-white/80 hover:text-white">
              MyDoctor
            </a>
          </div>
        </div>

        {/* Health Status Button */}
        <div className="mr-[10%]">
          <CustomButton to="myhealth" text="My Health Status" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
