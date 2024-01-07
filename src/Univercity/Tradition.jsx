import { FaBus, FaCar } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";

const Tradition = () => {
  return (
    <div className="">
      <p className="text-3xl font-bold my-5">Event and Traditions</p>
      <div className=" flex-col md:flex-row lg:flex justify-between items-start gap-8">
        <div className="space-y-3 lg:w-1/2 p-4">
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-medium">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
          <p className="text-lg ">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
          <hr
            className="border-2 border-purple-500 
           my-5"
          />
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-10 text-white">
            <GiLifeSupport className="text-8xl " />
            <p className="text-2xl font-bold "> Social Life </p>
            <div className="">
              Bookmarksgrove right at the coast of the Semantics, a large
              language ocean. A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic
              country, in which roasted parts.
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 p-8 bg-gray-200">
          <img
            src="https://us.123rf.com/450wm/visoot/visoot2306/visoot230602584/207333551-bus-luxury-vip-first-class-travel-vacation-tourism-tour-public-route-modern-art-design-vector.jpg"
            className="w-full"
            alt=""
          />
          <div className="flex gap-5 my-5 items-center">
            <FaBus className="text-4xl "></FaBus>
            <p className="text-xl font-bold">Transportations</p>
          </div>
          <div className="">
            <p className="text-xl font-bold my-5">
              There are many options to travel in the campus.
            </p>
            <p>
              There live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean. A
              small river named Duden flows by their place and supplies it with
              the necessary regelialia. It is a paradisematic. It is a paradise
              matic country, in which roasted parts of sentences fly into.
            </p>
          </div>
          <div className="flex gap-5 my-5 items-center">
            <FaCar className="text-4xl "></FaCar>
            <p className="text-xl font-bold">Parking</p>
          </div>
          <p>
            More than 1000 parking lots avilable in the west side of the compus.
            The parking is available 24 hours with 24hours security. We make
            sure that everything is under control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tradition;
