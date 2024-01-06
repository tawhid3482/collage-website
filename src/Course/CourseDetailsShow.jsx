const CourseDetailsShow = ({ course }) => {
  // console.log(course)
  const {
    id,
    name,
    Department,
    Campus,
    Level,
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
  } = course;
  return (
    <div className="p-6 ">
      <div className="mt-20">
        <p className="text-2xl text-slate-400 ">{id}</p>
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="text-lg my-3">
          Home {">"} Accounting Required Courses {">"}{" "}
          <span className="text-green-500">{name}</span>
        </p>
      </div>
      <div className="my-10">
        <div className="flex gap-5">
          <div className="lg:w-1/3">
            <img src={img1} className="w-96" alt="" />
          </div>
          <div className="lg:w-2/3">
            <div className="bg-green-600 text-white grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
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
              <p className="text-xl text-green-400">{description}</p>
              <hr className="border-2 border-green-600 w-full my-5" />
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
                    <tr className="bg-green-600 text-white text-xl">
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
      <div className="flex justify-between items-center gap-8 bg-slate-800 text-white p-6 rounded-xl">
        <div className="md:w-1/2">
          <img src={img2} className="w-full" alt="" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <p className="text-3xl font-bold">
            The PLP in Drafting Legislation, Regulation, and Policy has been
            offered by the Institute of Advanced Legal Studies with considerable
            success since 2004.
          </p>
          <div className="flex gap-6">
            <button className="btn bg-green-600 text-white">Apply</button>
            <button className="btn bg-green-600 text-white">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
      <div className="text-xl text-gray-500  font-medium my-8 ">{description4}</div>
    </div>
  );
};

export default CourseDetailsShow;
