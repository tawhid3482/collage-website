import { Link } from "react-router-dom";
import banner from "../../assets/25398880_10154951833596890_317498250930511676_n.jpg";
const Banner = () => {
  return (
    <div className="">
      <div className="hero lg:h-[450px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="lg:w-2/3 lg:h-96 rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Sylhet Polytacnic Institute
            </h1>
            <p className="py-6 w-2/3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to='/'>
              <button className="btn uppercase text-white  bg-green-800">
                About More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
