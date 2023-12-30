import collage from "../assets/University of Toulouse.jpg";
import PageSer from "./PageSer/PageSer";
const Page = () => {
  return (
    <div className="mb-8">
      <div className="">
        <img src={collage} className="w-full h-screen" alt="" />
        <div className="relative right-0 bottom-32 ">
          <h2 className="text-2xl font-semibold text-green-400">
            Know Us Better
          </h2>
          <h2 className="text-6xl font-bold text-white ">About Us</h2>
        </div>
      </div>
      <div className=" ">
        <p className="text-lg text-slate-500 mb-7">
          Home {">"} <span className="text-green-600">About Us</span>
        </p>
        <div className=" flex-col lg:flex-row flex justify-between items-start  p-5 ">
          <div className="mb-3">
            <p className="text-4xl font-bold mb-3">SPI History</p>
            <hr className="border-2 border-green-500" />
          </div>
          <div className="lg:w-1/3 text-lg mb-3">
            If you would like to study in the university in the heart of the
            city that focus on chaning the world for better to morrow, you’re
            choosin the right place. We do not use special formulas to select
            students. We look at every single applicant’s application, academic
            and personal, to select students who suit to our community with a
            full range of backgrounds. If you would like to study
          </div>
          <div className="lg:w-1/3 text-lg">
          If you would like to study in the university in the heart of the city
          that focus on chaning the world for better to morrow, you’re choosin
          the right place. We do not use special formulas to select students. We
          look at every single applicantt’s application, academic and personal,
          to select students who suit to our community.
          </div>
         
        </div>
      </div>
     
      <div className="">
        <PageSer></PageSer>
      </div>
    </div>
  );
};

export default Page;
