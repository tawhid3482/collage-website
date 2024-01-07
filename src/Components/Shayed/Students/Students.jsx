import { Link } from "react-router-dom";
import students from "../../../assets/student.jpg";
import Button from "../Button";
const Students = () => {
  return (
    <div>
      <div className="hero  lg:h-[450px] bg-base-200 my-5">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img src={students} className=" w-full h-[420px]  rounded-lg shadow-2xl" />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">Apply for Admission</h1>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  mt-5">
              Fall 2019 applications are now open
            </h1>
            <p className="py-6">
              We don’t just give students an education and experiences that set
              them up for success in a career. We help them succeed in their
              career—to discover a field they’re passionate about and dare to
              lead it.
            </p>
           <Link to='/admission'> 
          <Button text={'Apply now'}></Button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
