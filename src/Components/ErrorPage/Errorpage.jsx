import { Link } from "react-router-dom";
import error from "../../assets/404_page_cover.jpg";
const Errorpage = () => {
  return (
    <div className="w-full">
      <img src={error} className="w-full h-screen absolute" alt="" />
      <Link to="/">
        
        <button className="btn bg-green-800  relative left-32 top-[335px] md:left-96 md:top-[335px] lg:top-[450px] lg:left-[1060px] text-white">GO HOME</button>
      </Link>
    </div>
  );
};

export default Errorpage;
