import Baner from "../Components/Shayed/Baner";
import Subtitle from "../Components/Shayed/Subtitle";
import collage from "../assets/University of Toulouse.jpg";
import Banner from "./Banner";
import PageSer from "./PageSer/PageSer";
const Page = () => {
  return (
    <div className="mb-8">

      <Baner img={collage} title1={'Know Us Better'} title2={'About Us'}></Baner>

      <div className=" ">
       <Subtitle sub={'Home'} title={'About us'}></Subtitle>
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
      <div className="">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Page;
