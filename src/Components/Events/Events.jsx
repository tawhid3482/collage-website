import UseEvents from "../../Hooks/UseEvents";
import EventCard from "./EventCard";

const Events = () => {
  const [evets] = UseEvents();
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-3xl font-bold w-80 ">Alumni Events</p>{" "}
        <hr className="w-full border-green-800" />
      </div>
      <p className="text-green-500 mb-2">View All Events</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {evets?.map((event) => (
          <EventCard key={event.name} event={event}></EventCard>
        ))}
      </div>
     
    </div>
  );
};

export default Events;
