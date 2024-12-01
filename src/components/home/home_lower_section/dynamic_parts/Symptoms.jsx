
import bloodSign from "../../../../assets/images/bloodSign.png";
function Symptoms() {
  // Dummy data for items
  const items = [
    {
      id: 1,
      image: bloodSign,
      text: "Abnormal vaginal bleeding ",
    },
    {
      id: 2,
      image: bloodSign,
      text: "Vaginal discomfort",
    },
    {
      id: 3,
      image: bloodSign,
      text: "Malodorous discharge",
    },
    {
      id: 4,
      image: bloodSign,
      text: "Dysuria",
    },
  ];

  return (
    <div className="bg-[#FFF9E1] py-12">
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-8">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 items-center">
            <div className="image">
              <img
                src={item.image}
                alt={`Risk ${item.id}`}
                className="h-16 w-16 mx-auto" // Ensuring image is centered
              />
            </div>
            <p className="text-start playFair">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Symptoms;
