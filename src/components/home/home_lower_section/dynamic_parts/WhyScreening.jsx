function WhyScreening() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-4 md:gap-8 w-full md:w-[80%] mx-auto mt-11">
        {/* Left Gradient Bar */}
        <div
          className="w-2 md:w-3 flex-shrink-0"
          style={{
            borderRadius: "10px",
            background:
              "linear-gradient(180deg, #008327 0%, #EAFF63 44%, #FF0000 100%)",
          }}
        ></div>

        {/* Text Content */}
        <div>
          {/* First Paragraph */}
          <p className="text-[#015F2A] playFair font-black text-2xl md:text-3xl lg:text-4xl leading-snug">
            When cervical cancer is diagnosed at an early stage,
            <br className="md:block" />
            the chance of living is 91%.
          </p>

          {/* Second Paragraph */}
          <p className="text-[#0d1831] text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed">
            When cervical cancer is diagnosed after it has spread to nearby
            tissues, organs,
            <br className="md:block" />
            or regional lymph nodes, the chance of living is 60%.
          </p>

          {/* Third Paragraph */}
          <p className="text-[#FF0004] text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed">
            When cervical cancer is diagnosed after it has spread to a distant
            part of the body,
            <br className="md:block" />
            the chance of living is 19%.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyScreening;
