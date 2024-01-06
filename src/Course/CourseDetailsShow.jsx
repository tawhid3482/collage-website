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
    <div className="p-6">
      <div className="mt-20">
        <p className="text-2xl text-slate-400 ">{id}</p>
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="text-lg my-3">
          Home {">"} Accounting Required Courses {">"}{" "}
          <span className="text-green-500">{name}</span>
        </p>
      </div>
      <div className="">
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
        <div className="">
           
        </div>
       
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseDetailsShow;
