import CancelRiskWarning from "../../../../assets/images/CancelRiskWarning.png";
import multipleparteners from "../../../../assets/images/multipleparteners.png";
import above30 from "../../../../assets/images/above30.png";
import earlySex from "../../../../assets/images/earlySex.png";
import closeRelatives from "../../../../assets/images/closeRelatives.png";


function CancerRisks() {
  // Dummy data for items
  const items = [
    {
      id: 1,
      image: above30,
      text: "Are over 30 and have an HPV infection . ",
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
      text: "Have had multiple sexual partners",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] py-12">
      <div className="flex  w-[80%] mx-auto mb-12 items-center gap-2">
        <div className="image">
          <img
            src={CancelRiskWarning}
            className="h-16 w-16 mx-auto" // Ensuring image is centered
          />
        </div>
        <p className="text-start lexendDeca text-[#0B152A] font-extrabold text-4xl">
          If you have a cervix, you are at increased <br /> risk if you:
        </p>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 items-start">
            <div className="image">
              <img
                src={item.image}
                alt={`Risk ${item.id}`}
                className="h-16 w-16 mx-auto" // Ensuring image is centered
              />
            </div>
            <p className="text-start lexendDeca">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancerRisks;
