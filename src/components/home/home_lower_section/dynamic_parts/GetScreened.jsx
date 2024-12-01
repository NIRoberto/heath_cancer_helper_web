function GetScreened() {
  const timelineData = [
    { year: "20 years", hasLine: true },
    { year: "30 years", hasLine: true },
    { year: "65 years", hasLine: false },
  ];

  return (
    <>
      <div className="flex items-center space-x-1 custom-timeline-item justify-center">
        {timelineData.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex gap-1 items-center ml-2">
              {/* Disc */}
              <div className="custom-disc w-3 h-3 bg-[#00A31E] rounded-full"></div>

              {/* Line */}
              {item.hasLine && (
                <div
                  className="custom-line w-16 bg-[#00A31E]"
                  style={{ height: "2px" }}
                ></div>
              )}
            </div>

            {/* Year */}
            <span className="custom-year text-sm  playFair">{item.year}</span>
          </div>
        ))}
      </div>
      <div className="lexendDeca text-[29px] w-[80%] mx-auto text-start mt-11">
        <span className="font-bold">Cervical cancer screening </span>
        typically <span className="font-bold">starts at 30 years</span> of age{" "}
        <br />
        and is repeated regularly at least after 5 years until 65 years old.
        <br className="h-4" />
        <span className="font-bold block mt-11">
          Are you between 30-65 Years, have you screened?
        </span>
      </div>
    </>
  );
}

export default GetScreened;
