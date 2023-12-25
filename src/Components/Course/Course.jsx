const Course = () => {
  return (
    <div className="bg-gray-500 p-5 ">
        <p className="text-3xl font-bold  text-center text-white my-4">Search For Courses</p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-3">
        <input
          type="text"
          placeholder="Keywords"
          className="bg-gray-400 text-white p-3 "
        />
        <input
          type="text"
          placeholder="Course ID"
          className="bg-gray-400 text-white p-3"
        />
        <div className="text-white bg-gray-400">
          <select className="text-white bg-gray-400 p-3 w-full" name="" id="">
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
        <div className="text-white bg-gray-400">
          <select className="text-white bg-gray-400 p-3 w-full" name="" id="">
            <option className="text-white bg-gray-400" value="">
              Campus
            </option>
            <option className="text-white bg-gray-400" value="Adman's Hall">
              Admans Hall
            </option>
            <option className="text-white bg-gray-400" value="SPI Hall">
              SPI Hall
            </option>
            <option className="text-white bg-gray-400" value="Roqaya Hall">
              Roqaya Hall
            </option>
          </select>
        </div>

        <div className="text-white bg-gray-400">
          <select className="text-white bg-gray-400 p-3 w-full" name="" id="">
            <option className="text-white bg-gray-400" value="">
              Lavel
            </option>
            <option className="text-white bg-gray-400" value="Adman's Hall">
              Graduate
            </option>
            <option className="text-white bg-gray-400" value="SPI Hall">
              Undergraduate
            </option>
          </select>
        </div>
        <div className="text-white bg-gray-400">
          <select className="text-white bg-gray-400 p-3 w-full" name="" id="">
            <option className="text-white bg-gray-400" value="">
              Instructor
            </option>
            <option className="text-white bg-gray-400" value="Adman's Hall">
              Saikat
            </option>
            <option className="text-white bg-gray-400" value="SPI Hall">
              Tawhidul Islam
            </option>
          </select>
        </div>
        <div className="text-white bg-gray-400">
          <select className="text-white bg-gray-400 p-3 w-full" name="" id="">
            <option className="text-white bg-gray-400" value="">
              Semester
            </option>
            <option className="text-white bg-gray-400" value="Adman's Hall">
              Fall
            </option>
            <option className="text-white bg-gray-400" value="SPI Hall">
              Spring 2022
            </option>
          </select>
        </div>
        <div className="text-white bg-gray-400">
          <select className="text-white bg-gray-400 p-3 w-full" name="" id="">
            <option className="text-white bg-gray-400" value="">
              Method
            </option>
            <option className="text-white bg-gray-400" value="Adman's Hall">
              Seminar
            </option>
            <option className="text-white bg-gray-400" value="SPI Hall">
              Lecture
            </option>
            <option className="text-white bg-gray-400" value="Roqaya Hall">
              Online
            </option>
          </select>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="btn bg-green-500 border-none text-white">Search Course</button>
      </div>
    </div>
  );
};

export default Course;
