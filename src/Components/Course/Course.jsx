const Course = () => {
  return (
    <div className="bg-black p-5 ">
        <p className="text-3xl font-bold  text-center text-white my-4">Search For Courses</p>
      <div className="grid grid-cols-2  gap-3">
       
        <input
          type="text"
          placeholder="Course ID"
          className="bg-black text-white p-3 border"
        />
        <div className="text-white bg-black">
          <select className="text-white bg-black border p-3 w-full" name="" id="">
            <option className="text-white bg-gray-400" value="">
              Deparment
            </option>
            <option
              className="text-white bg-gray-400"
              value="Business Administration"
            >
              Business Administration
            </option>
          </select>
        </div>
    
      </div>
      <div className="text-center my-5">
        <button className="btn bg-green-500 text-lg border-none text-white">Search Course</button>
      </div>
    </div>
  );
};

export default Course;
