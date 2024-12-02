function GetScreened() {
  const timelineData = [
    { year: "20 years", hasLine: true },
    { year: "30 years", hasLine: true },
    { year: "65 years", hasLine: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8  items-center justify-center">
      {/* Timeline Section */}
      <div className="flex items-center space-x-2 justify-center">
        {timelineData.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="flex items-center gap-1">
              {/* Disc */}
              <div className="w-3 h-3 bg-[#00A31E] rounded-full"></div>

              {/* Line */}
              {item.hasLine && (
                <div className="w-16 h-[2px] bg-[#00A31E]"></div>
              )}
            </div>

            {/* Year Label */}
            <span className="text-sm text-gray-800 playFair mt-2">
              {item.year}
            </span>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="  block items-center md:text-left text-[20px] md:text-[24px] lg:text-[29px] w-full md:w-[70%] mx-auto mt-11 mr-11">
        <span className="font-bold">Cervical cancer screening</span> typically{" "}
        <span className="font-bold">starts at 30 years</span> of age. <br />
        It is repeated regularly, at least every 5 years, until 65 years old. <br />
        <span className="font-bold block mt-8">
          Are you between 30-65 years? Have you screened?
        </span>
      </div>
    </div>
  );
}

export default GetScreened;
