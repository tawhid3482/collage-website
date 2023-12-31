import { useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="p-8">
      <div className="space-y-4">
        <br />
        <br />
        
        
        <p className="text-xl ">Find course that suit you</p>
        <p className="text-4xl md:text-5xl font-bold ">Course Search</p>
        <p className="text-lg">Home  {">"} <span className="text-green-500">Course Search</span></p>
      </div>
      <div className="flex justify-between  gap-5 my-8">
        <div className="lg:w-1/3 border border-green-600 p-4">
        <p className="text-2xl font-bold">Search For Courses</p>

        </div>
        <div className="lg:w-2/3 grid  grid-cols-1 gap-5 p-4">
        {data?.map((course) => (
          <Course key={course.courseId} course={course}></Course>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Courses;
