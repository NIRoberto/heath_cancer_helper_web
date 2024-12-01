import bgimg from "../../assets/images/bgimg.jpg";
import "./home.css";
import Navbar from "../navigation/Navbar";
import CustomButton from "../button/Button";
import Lower_home from "./home_lower_section/Lower_home";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section with Background */}
        <div className="relative min-h-[120vh]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/20" />
            <img
              src={bgimg}
              alt="Background"
              className="w-full h-full object-fill"
            />
          </div>

          {/* Content */}
          <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-32 lg:pt-40 pb-20 lg:pb-28">
              <div className="max-w-2xl ml-[2.5%]">
                <h1 className="text-5xl font-serif text-[#E6B12C] leading-tight mb-4 playFair">
                  Save Your Life
                </h1>
                <h2 className="text-4xl text-white/90  mb-6 playFair">
                  with Cervical cancer Screening
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-xl">
                  Due to delayed diagnosis, at least one woman dies of Cervical
                  cancer in just 2 minutes. If you are a woman aged between 20
                  and 80 years, you can consult your doctor and have the
                  screening assistance.
                </p>
                <CustomButton
                  to="contact"
                  text="Talk to MyDocta"
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
