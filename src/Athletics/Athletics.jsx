import { FaClock, FaLocationArrow } from "react-icons/fa";
import Baner from "../Components/Shayed/Baner";
import Subtitle from "../Components/Shayed/Subtitle";
import athletics from "../assets/sports.jpg";
const Athletics = () => {
  return (
    <div className="p-7">
      <div className="">
        <Baner
          img={athletics}
          title1={"Go For KU Team!"}
          title2={"Athletics"}
        ></Baner>
      </div>
      <div className="">
        <Subtitle sub={"Home"} title={"Athletics"}></Subtitle>
        <hr className="border-2 border-green-500 w-80" />
      </div>
      <div className="">
        <p className="text-lg text-green-500 mt-5">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, <br /> there live the blind texts. Separated
          they live in
        </p>
        <p className="text-lg mt-2">
          Bookmarksgrove right at the coast of the Semantics, a large language
          ocean. A small river named Duden flows by their place and supplies it
          with the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. Even the all-powerful
          Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the
          name of Lorem Ipsum decided to leave for the far World of Grammar. The
          Big Oxmox advised her not to do so.
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-2 items-center">
        <span className="text-4xl font-bold">News & Updates</span>
        <hr className="border border-gray-400 w-[475px]" />

        <span className="text-4xl font-bold">Upcoming Events</span>
        <hr className="border border-gray-400 w-32" />
      </div>
      <p className="text-lg text-green-500 ml-1">Read All News</p>
      <div className="flex justify-between items-start gap-7 my-8 ">
        <div className=" relative overflow-hidden group lg:w-1/3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavZYhYHiG6xw81kf49kan9xK0qALB7UaLRA&usqp=CAU"
            alt=""
            className="md:w-96 duration-300 group-hover:scale-110"
          />
          <p className=" text-slate-500 my-2 mt-8">
            JUNE 6, / 2016ADMISSION, STUDENT
          </p>
          <p className="text-2xl font-bold hover:text-green-500">
            Professor Albert joint research on mobile money in Tanzania
          </p>
        </div>

        <div className="lg:w-1/3 ">
          <div className="flex gap-5  relative overflow-hidden group">
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg"
              className="w-28 duration-300 group-hover:scale-110 "
              alt=""
            />
            <div className="">
              <p>JUNE 6, / 2016HOT, UPDATES</p>
              <p className="text-lg font-bold hover:text-green-500">
                A Global MBA for the next generation of business leaders
              </p>
            </div>
          </div>
          <div className="flex gap-5 my-5 relative overflow-hidden group">
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg"
              className="w-28 duration-300 group-hover:scale-110 "
              alt=""
            />
            <div className="">
              <p>JUNE 6, / 2016HOT, UPDATES</p>
              <p className="text-lg font-bold hover:text-green-500">
                A Global MBA for the next generation of business leaders
              </p>
            </div>
          </div>
          <div className="flex gap-5  relative overflow-hidden group">
            <img
              src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-scaled.jpg"
              className="w-28 duration-300 group-hover:scale-110 "
              alt=""
            />
            <div className="">
              <p>JUNE 6, / 2016HOT, UPDATES</p>
              <p className="text-lg font-bold hover:text-green-500">
                A Global MBA for the next generation of business leaders
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 border border-r-emerald-400 p-1">
          <div className=" flex items-center gap-5">
           <div className="">
           <p className="text-2xl text-green-500 font-bold">17 <br /> DEC</p>
            <hr className="border-2 border-green-500 w-12" />
           </div>
           <div className="">
           <p className=" text-2xl font-bold hover:text-green-500 ">
           Fintech & Key Investment Conference

            </p>
            <p className="">
              Professor Albert joint research on mobile money in Tanzania
            </p>
            <div className="flex items-center gap-3 ">
               <div className="text-green-500 flex  items-center gap-3">
                    <FaClock></FaClock>
                <p>1:00 pm - 1:00 pm</p>
               </div>
               <div className="text-green-500 flex items-center gap-2">
                    <FaLocationArrow></FaLocationArrow>
                <p>Kingster Grand Hall</p>
               </div>
            </div>
           </div>
          </div>
          <div className=" flex items-center gap-5 my-5">
           <div className="">
           <p className="text-2xl text-green-500 font-bold">27 <br /> DEC</p>
            <hr className="border-2 border-green-500 w-12" />
           </div>
           <div className="">
           <p className=" text-2xl font-bold hover:text-green-500 ">
           Sport Management Information Webinar

            </p>
            <p className="">
              Professor Albert joint research on mobile money in Tanzania
            </p>
            <div className="flex items-center gap-3 ">
               <div className="text-green-500 flex  items-center gap-3">
                    <FaClock></FaClock>
                <p>1:00 pm - 1:00 pm</p>
               </div>
               <div className="text-green-500 flex items-center gap-2">
                    <FaLocationArrow></FaLocationArrow>
                <p>Kingster Grand Hall</p>
               </div>
            </div>
           </div>
          </div>
          <div className=" flex items-center gap-5">
           <div className="">
           <p className="text-2xl text-green-500 font-bold">05 <br /> DEC</p>
            <hr className="border-2 border-green-500 w-12" />
           </div>
           <div className="">
           <p className=" text-2xl font-bold hover:text-green-500 ">
           Planning and Facilitating Effective Meetings

            </p>
            <p className="">
              Professor Albert joint research on mobile money in Tanzania
            </p>
            <div className="flex items-center gap-3 ">
               <div className="text-green-500 flex  items-center gap-3">
                    <FaClock></FaClock>
                <p>1:00 pm - 1:00 pm</p>
               </div>
               <div className="text-green-500 flex items-center gap-2">
                    <FaLocationArrow></FaLocationArrow>
                <p>Kingster Grand Hall</p>
               </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athletics;
