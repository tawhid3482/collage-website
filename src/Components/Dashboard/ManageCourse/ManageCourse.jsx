import { FaTrash } from "react-icons/fa";
import UseCourse from "../../../Hooks/UseCourse";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";
import { GrUpdate } from "react-icons/gr";

const ManageCourse = () => {
  const [data] = UseCourse();
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"Manage Your Course"}></SectionTitle>
      </div>
      <div className="">
        <p className="text-2xl font-semibold">Total Course: {data?.length}</p>
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg">
              <tr>
                <th>
                  No.
                </th>
                <th>
                  Course Id
                </th>
                <th>Course Name</th>
                <th>Instructor Name</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((course,index)=> <tr key={data._id}>
                <th>
                  {index+1}
                </th>
                <th>
                  {course.id}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course.img2}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.name}</div>
                      <div className="text-sm opacity-50">{course.Department}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {course.Instructor}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {course.room}
                  </span>
                </td>
                <td><button className="btn "><GrUpdate className="text-xl text-purple-600"></GrUpdate></button></td>
                <th>
                  <button className="btn "><FaTrash className="text-xl text-pink-600"></FaTrash ></button>
                </th>
              </tr>)}
             
             
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
