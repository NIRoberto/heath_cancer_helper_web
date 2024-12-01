

function WhyScreening() {
  return (
    <>
      <div className="flex  gap-8  w-[80%] mx-auto mt-11">
        <div
          className="w-3  "
          style={{
            borderRadius: "10px",
            background:
              "linear-gradient(180deg, #008327 0%, #EAFF63 44%, #FF0000 100%)",
          }}
        ></div>
        <div>
          <p className="text-[#015F2A] playFair font-black  text-4xl">
            When cervical cancer is diagnosed at an early stage,
            <br /> the chance of living is 91%.
          </p>
          <p
            className="
          text-[#0d1831] text-2xl block mt-4"
          >
            When cervical cancer is diagnosed after it has spread to nearby
            tissues, organs,
            <br /> or regional lymph nodes, the chance of living is 60%.
          </p>
          <p className=" text-[#FF0004] text-2xl block mt-4">
            {" "}
            When cervical cancer is diagnosed after it has spread to a distant
            part of the body,
            <br /> the,chance of living is 19%.
          </p>
        </div>
      </div>
    </>
  );
}

export default WhyScreening