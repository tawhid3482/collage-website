import pic1 from "../../assets/png-transparent-europe-express-travel-express-inc-tourism-eefc-inc-300-dpi-blue-angle-company-removebg-preview (1).png";
import pic2 from "../../assets/images-removebg-preview (1).png";
import pic3 from "../../assets/Tawhid-Bank-Tajikistan--removebg-preview.png";
// import pic4 from "../../assets/images-removebg-preview (2).png";
const Sponser = () => {
  return (
    <div>
      <div className="flex justify-between p-5 bg-gray-600 gap-5">
        <div className="">
          <img src={pic1} className="w-60 h-40" alt="" />
        </div>
        <div className="">
          <img src={pic2} className="w-60 h-40" alt="" />
        </div>
        <div className="">
          <img src={pic3} className="w-60 h-40" alt="" />
        </div>
        <div className="flex justify-center items-center">
            <p className="text-5xl font-semibold text-white">T | I | S</p>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
