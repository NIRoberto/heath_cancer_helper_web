import "./home.css";
import CustomButton from "../button/Button";
import Footer from "./Footer";
import Lower_home from "./home_lower_section/Lower_home";
import Navbar from "../navigation/Navbar";
import bgimg from "../../assets/images/bgimg.jpg";

const HomePage = () => {
  return (
    <>
      <div className="max-h-[90vh]">
        <Navbar />

        {/* Hero Section with Background */}
        <div className="relative h-[80vh]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/20" /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/120 to-white/0 
" />
            <img
              src={bgimg}
              alt="Background"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="relative z-1 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-32 lg:pt-40 pb-20 lg:pb-28">
              <div className="max-w-2xl ml-[2.5%]">
                <h1 className="text-3xl sm:text-5xl md:text-8xl font-serif text-[#E6B12C] leading-tight mb-4 playFair">
                  Save Your Life
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-4xl text-white/90  mb-6 playFair">
                  with Cervical cancer Screening
                </h2>
                <p className="text-md sm:text-lg md:text-md text-white/80 mb-8 max-w-2xl  ">
                  Due to delayed diagnosis, at least one woman dies of Cervical
                  cancer in just 2 minutes. If you are a woman aged between 20
                  and 80 years, you can consult your doctor and have the
                  screening assistance.
                </p>
                <CustomButton
                  to="nearHospital"
                  text="nearest  facility"
                  isBold={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //lower section of hoem page */}
      <Lower_home />
      <Footer />
    </>
  );
};

export default HomePage;
