import AuthHook from "../../../Hooks/AuthHook";
import StCourse from "../../../Hooks/StCourse";

const StHome = () => {
  const { user } = AuthHook();
// Format current date
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);
const [clas]=StCourse()

  return (
    <div>
      <div className="flex-col lg:flex-row lg:flex lg:justify-between gap-5 ">
        <div className="w-full my-5  p-2 ">
          <div className="flex justify-between  gap-20 items-center">
            <div className="">
              <p className="text-4xl font-bold">Dashboard</p>
              <h2 className="text-lg font-medium">date: {formattedDate}</h2>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 uppercase p-3 rounded-md text-white">
              jun-20-2024
            </div>
          </div>
          <div className="md:flex gap-20 my-5 p-5 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="">
              <img
                src={user?.photoURL}
                className="w-40 md:h-40 rounded-full"
                alt=""
              />
            </div>
            <div className="text-left mt-10 text-white lg:w-80">
                <h3 className="text-2xl font-semibold"><span className="text-black">Hello</span>, <span>{user?.displayName}</span></h3>
                <p className="text-lg font-medium">This is your dashboard home. You can see all details in your dasboard</p>
            </div>
          </div>
        </div>
        <div className=" lg:w-80 mx-auto border-2 my-5 border-green-500 p-5">
          <p className=" text-2xl font-bold">My Profile</p>
          <h2 className="text-lg font-medium">date: {formattedDate}</h2>
          <div className="">
            <img src={user?.photoURL} className="w-40 md:h-40 rounded-full my-5 ml-20 md:ml-36 lg:ml-10" alt="" />
            {
              clas?.map(course =><div key={course._id}>
                <p className=" text-lg font-medium text-center">Name: {user?.displayName}</p>
            <p className=" text-lg font-medium text-center">Student Id: {course._id}</p>
            <p className=" text-lg font-medium text-center">Course Id: {course.courseId}</p>
            <p className=" text-lg font-medium text-center">Department: {course.Department}</p>
              </div>)
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default StHome;
