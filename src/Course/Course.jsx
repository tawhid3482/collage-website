import { Link } from "react-router-dom";

const Course = ({course}) => {
    const {courseId,name,Department , Campus ,Level,Instructor,Semester,Credit,Method }= course
console.log(name)
    return (
        <div className="bg-gray-100 p-8">
           <p className="text-xl font-bold text-green-500 my-5" >{courseId} <span className="text-black">{name}</span></p>

           <p className="text-xl font-bold " > Department : <span className="text-lg font-normal">{Department}</span></p>

           <p className="text-xl font-bold " > Campus : <span className="text-lg font-normal">{Campus}</span></p>

           <p className="text-xl font-bold " > Level : <span className="text-lg font-normal">{Level}</span></p>

           <p className="text-xl font-bold " > Instructor : <span className="text-lg font-normal">{Instructor}</span></p>
           <p className="text-xl font-bold " > Semester : <span className="text-lg font-normal">{Semester}</span></p>
           <p className="text-xl font-bold " > Credit : <span className="text-lg font-normal">{Credit}</span></p>
           <p className="text-xl font-bold " > Method : <span className="text-lg font-normal">{Method}</span></p>
           <div className="">
           <Link to='/courseDetails'> <button className="btn bg-green-500 text-white my-2">More Details</button></Link>
           </div>
        </div>
    );
};

export default Course;