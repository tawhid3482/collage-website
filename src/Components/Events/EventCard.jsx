import { FaClock, FaLocationArrow,  } from "react-icons/fa";

const EventCard = ({ event }) => {
  console.log(event);
  const { name, img, date, location, time } = event;
  return (
    <div>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl mb-5">
        <figure>
          <img src={img} className="h-60" alt="Shoes" />
        </figure>
        <div className="flex gap-5 items-center p-5">
          <div className="">
            <p className="text-3xl text-green-500 font-bold uppercase">
              {date}
            </p>
            <hr className="w-14 border-green-700 border-2" />
          </div>
          <div className="">
            <h2 className="card-title font-bold">{name}</h2>
            <div className="flex  items-center gap-3">
              <FaClock></FaClock>
              <p className="text-green-500">{time}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow></FaLocationArrow>
              <p className="text-green-500">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
