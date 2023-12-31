import { FaClock, FaLocationArrow,  } from "react-icons/fa";

const EventCard = ({ event }) => {
  const { name, img, date, location, time } = event;
  return (
    <div>
      <div className="card card-compact w-96 md:w-[350px] lg:w-96 h-96 bg-base-100 shadow-xl mb-5">
        <figure>
          <img src={img} className="h-60" alt="Shoes" />
        </figure>
        <div className="flex gap-5 items-center p-5">
          <div className="">
            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold uppercase">
              {date}
            </p>
            <hr className="w-14 border-purple-500 border-2" />
          </div>
          <div className="">
            <h2 className="card-title font-bold">{name}</h2>
            <div className="flex  items-center gap-3">
              <FaClock></FaClock>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">{time}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow></FaLocationArrow>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
