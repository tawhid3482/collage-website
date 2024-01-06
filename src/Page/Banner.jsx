import { FaTeamspeak } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="my-5">
            <div className="hero lg:h-[450px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src='https://media.istockphoto.com/id/1140524579/photo/succeeding-is-what-we-do-best.jpg?s=612x612&w=0&k=20&c=DAXQB8CSQw_yZpO1sPd-FasS8738KurZXcvgNwo6mYQ='
            className="lg:w-2/3 lg:h-96 rounded-lg shadow-2xl"
          />
          <div className="space-y-3">
            <p><FaTeamspeak className="text-8xl "></FaTeamspeak></p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Powerful Alumni
            </h1>
            <p className="py-6 w-full text-lg">
            Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.
            </p>
         
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;