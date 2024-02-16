
import StCourse from "../../../Hooks/StCourse";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";

const MyCourse = () => {
    const [clas]=StCourse()
  
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"my course"}></SectionTitle>
      </div>
      <div className="">
        {clas?.map((course) => (
          <div key={course._id}>
            <div className="text-xl font-semibold grid grid-cols-2 gap-5 p-5 border border-purple-500 ">
              <p><span className="text-pink-500">Course name:</span> {course?.name}</p>
              <p><span className="text-pink-500">Department: </span> {course?.Department}</p>
              <p><span className="text-pink-500">Course Id:  </span> {course?.courseId}</p>
              <p><span className="text-pink-500">Fee:        </span> ${course?.fee}</p>
              <p><span className="text-pink-500">Semester:   </span> {course?.Semester}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
