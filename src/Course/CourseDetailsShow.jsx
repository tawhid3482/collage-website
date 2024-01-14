import Swal from "sweetalert2";
import AuthHook from "../Hooks/AuthHook";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const CourseDetailsShow = ({ course }) => {
  // console.log(course)
  const {
    id,name,Department,Campus,Level,
    Instructor,
    Semester,
    Credit,
    Method,
    description,
    description2,
    description3,
    description4,
    time,
    room,
    dateRange,
    img1,
    img2,
    fee,
  } = course;

  const navigate = useNavigate()
  const {user}=AuthHook()
  const axiosSecure = UseAxiosSecure()
  const handleFee = () => {
    // console.log(cl);
 
    if(user && user.email){

      const cartItem ={
        courseId:id,
        email:user.email,
        name,
        Department,
        Semester,
        img1,
        fee,

      }
      axiosSecure.post('carts',cartItem)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your course has been added to the carts",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

    } 
    else{
      Swal.fire({
        title: "Please login first?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login')
          
        }
      });
    }
  };

  return (
    <div className="p-6 ">
      <div className="mt-20">
        <p className="text-2xl text-slate-400 ">{id}</p>
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="text-lg my-3">
          Home {">"} Accounting Required Courses {">"}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
            {Department}
          </span>
        </p>
      </div>
      <div className="my-10">
        <div className="flex-col md:flex-row md:flex gap-5">
          <div className="lg:w-1/3">
            <img src={img1} className="w-96" alt="" />
          </div>
          <div className="lg:w-2/3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
              <p className="text-xl font-bold">
                Course Id: <span className="font-light">{id}</span>
              </p>
              <p className="text-xl font-bold">
                Campus: <span className="font-light"></span> {Campus}
              </p>

              <p className="text-xl font-bold">
                Level : <span className="font-light"></span> {Level}
              </p>
              <p className="text-xl font-bold">
                Semester : <span className="font-light"></span> {Semester}
              </p>
              <p className="text-xl font-bold">
                Credit : <span className="font-light"></span> {Credit}
              </p>
              <p className="text-xl font-bold">
                Method : <span className="font-light"></span> {Method}
              </p>
            </div>
            <div className="my-5">
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
                {description}
              </p>
              <hr className="border-2 border-purple-600 w-full my-5" />
            </div>
            <div className="text-lg my-3">
              {description2}
              <br />
              <br />
              {description3}
            </div>
            <div className=" my-8">
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl">
                      <th>Time</th>
                      <th>Room</th>
                      <th>Date Range</th>
                      <th>Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="text-lg">
                      <td>{time}</td>
                      <td>{room}</td>
                      <td>{dateRange}</td>
                      <td>{Instructor}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row md:flex justify-between items-center gap-8 bg-slate-800 text-white p-6 rounded-xl">
        <div className="w-full md:w-1/2">
          <img src={img2} className="w-full" alt="" />
        </div>
        <div className="md:w-1/2 space-y-5 my-8 md:my-0">
          <p className="text-3xl font-bold">
            The PLP in Drafting Legislation, Regulation, and Policy has been
            offered by the Institute of Advanced Legal Studies with considerable
            success since 2004.
          </p>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
            Course Fee: ${fee}
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => handleFee(course)}
              className="btn bg-gradient-to-r
             from-purple-600 to-pink-600
              text-white"
            >
              Apply
            </button>

            <button className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
      <div className="text-xl text-gray-500  font-medium my-8 ">
        {description4}
      </div>
    </div>
  );
};

export default CourseDetailsShow;
