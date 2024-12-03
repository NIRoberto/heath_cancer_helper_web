import CancelRiskWarning from "../../../../assets/images/CancelRiskWarning.png";
import above30 from "../../../../assets/images/above30.png";
import closeRelatives from "../../../../assets/images/closeRelatives.png";
import earlySex from "../../../../assets/images/earlySex.png";
import multipleparteners from "../../../../assets/images/multipleparteners.png";

function CancerRisks() {
  // Dummy data for items
  const items = [
    {
      id: 1,
      image: above30,
      text: "Are over 30 and have an HPV infection.",
    },
    {
      id: 2,
      image: closeRelatives,
      text: "Have a close relative, such as a sister or mother, who has had cervical cancer.",
    },
    {
      id: 3,
      image: earlySex,
      text: "Began having sex at an early age.",
    },
    {
      id: 4,
      image: multipleparteners,
      text: "Have had multiple sexual partners.",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] py-12">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row w-[90%] md:w-[80%] mx-auto mb-8 items-center gap-4 justify-center">
        <div className="image">
          <img
            src={CancelRiskWarning}
            className="h-16 w-16 mx-auto"
            alt="Warning"
          />
        </div>
        <p className="text-center sm:text-start lexendDeca text-[#0B152A] font-extrabold text-2xl sm:text-3xl md:text-4xl">
          If you have a cervix, you are at increased <br className="hidden sm:block" /> risk if you:
        </p>
      </div>

      {/* Items Section */}
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col  items-center sm:items-start gap-4"
          >
            {/* Icon */}
            <div className="image">
              <img
                src={item.image}
                alt={`Risk ${item.id}`}
                className="h-16 w-16 mx-auto"
              />
            </div>
            {/* Text */}
            <p className="text-center sm:text-start lexendDeca text-base sm:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancerRisks;
