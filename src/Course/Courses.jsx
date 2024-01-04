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
        <p className="text-lg">
          Home {">"} <span className="text-green-500">Course Search</span>
        </p>
      </div>
      <div className="flex justify-between  gap-5 my-8">
        <div className="lg:w-1/3 border border-green-600 p-6 text-white bg-black  flex-col flex items-center justify-center">
          <p className="text-4xl font-bold">Search Your Courses</p>
          <div className="bg">
            <input
              type="text"
              placeholder="Course Id"
              className="my-5 p-2 bg-gray-500 text-lg w-full"
            />
            <div className="text-white bg-gray-500 w-full">
              <select
                className="text-white bg-gray-500 p-3 w-full"
                name=""
                id=""
              >
                <option className="text-white bg-gray-400" value="">
                  Deparment
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                  Business Administration
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                  Computer Science & Engineering
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                 Civil
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                 Electronics
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                 Electrical
                </option>
              </select>
            </div>
            <div className="text-white bg-gray-500 w-full my-5">
              <select
                className="text-white bg-gray-500 p-3 w-full"
                name=""
                id=""
              >
                <option className="text-white bg-gray-400" value="">
                  Semester
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                  2021-2022
                </option>
                <option
                  className="text-white bg-gray-400"
                  value="Business Administration"
                >
                  2015-2016
                </option>
              
              </select>
            </div>
            <div className="text-center ">
              <button className="btn text-lg text-white bg-green-500">Search </button>
            </div>
          </div>
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
