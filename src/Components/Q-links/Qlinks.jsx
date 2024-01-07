import { FaLink } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";

const Qlinks = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center lg:items-center  lg:gap-8 lg:h-screen">
        <div className="space-y-3 w-full md:w-full lg:w-1/3 p-5">
          <img
            src="https://thumbs.dreamstime.com/b/donate-money-vector-illustration-charity-donation-concept-hand-putting-banknote-box-eps-143816912.jpg"
            className="w-96 h-60 border"
            alt=""
          />
          <p className="text-3xl font-bold">Donation helps us</p>
          <p className="w-60 lg:w-96">
            The Campaign for the Kingster University is the 
             <span className="font-bold ml-1">
              largest fundraising campaign in history
            </span>
            . With a historic $1 billion goal, the campaign is expanding U of
            T’s global leadership capacity.
          </p>
          <div className="">
          <button className="btn bg-gradient-to-l from-purple-600 to-pink-500 text-lg text-white w-56">
           <GiSelfLove></GiSelfLove>  Become a Donar
          </button>
          </div>
        </div>
        <div className="space-y-3 w-full md:w-full lg:w-1/3 text-center">
            <div className="flex justify-center items-center">
            <TfiEmail className="text-9xl text-purple-600 "></TfiEmail>

            </div>
          <p className="text-3xl font-bold text-center">
            Subscribe To Newsletter
          </p>
          <p className="text-center">Get updates to news & events</p>
          <p className="text-center mt-5 ">
            The Campaign for the Kingster University is the largest fundraising
            campaign in history. With a historic
          </p>
          <input
            type="text"
            placeholder="Your Email Address"
            className="p-3 bg-gray-300 w-60"
          />
          <br />
          <button className="btn bg-gradient-to-l from-purple-600 to-pink-500 text-lg text-white w-60">
          Subscribe
          </button>
        </div>
        <div className="w-full md:w-full lg:w-1/3 p-8  lg:h-[420px] bg-gray-900">
          <div className="flex items-center gap-4">
            <FaLink className="text-3xl text-white"></FaLink>
            <span className="text-3xl font-bold text-white">Quick Links</span>
          </div>
          <div className="grid grid-cols-1 space-y-2  p-5">
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
              Alumni & Donors
            </Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">Athletic Calendar</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">All Kingster’s Events</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">Partnership & Out Reach</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
              Alumni & Donors
            </Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">Athletic Calendar</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">All Kingster’s Events</Link>
            <Link to="https://www.facebook.com" className="mt-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">Partnership & Out Reach</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qlinks;
