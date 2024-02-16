import Swal from "sweetalert2";
import StCourse from "../../../Hooks/StCourse";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";

const MyCourse = () => {
  const [clas, refetch] = StCourse();
  const axiosSecure = UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/myCourse/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="text-center ">
        <SectionTitle title={"my course"}></SectionTitle>
      </div>
      <div className="">
        {clas?.map((course) => (
          <div key={course._id}>
            <div className="text-xl my-3 font-semibold grid grid-cols-2 gap-5 p-5 border border-purple-500 ">
              <p>
                <span className="text-pink-500">Course name:</span>{" "}
                {course?.name}
              </p>
              <p>
                <span className="text-pink-500">Department: </span>{" "}
                {course?.Department}
              </p>
              <p>
                <span className="text-pink-500">Course Id: </span>{" "}
                {course?.courseId}
              </p>
              <p>
                <span className="text-pink-500">Fee: </span> ${course?.fee}
              </p>
              <p>
                <span className="text-pink-500">Semester: </span>{" "}
                {course?.Semester}
              </p>
              <button onClick={() => handleDelete(course._id)} className="btn w-40 bg-purple-200">
                <FaTrash className="text-xl text-pink-600"></FaTrash>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
