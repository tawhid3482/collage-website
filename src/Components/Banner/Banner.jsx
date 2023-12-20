import banner from '../../assets/25398880_10154951833596890_317498250930511676_n.jpg'
const Banner = () => {
  return (
    <div>
      <div className="hero h-96 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="w-2/3 h-80 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Sylhet Polytacnic Institute</h1>
            <p className="py-6 w-2/3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn uppercase text-white  bg-black">About More </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
