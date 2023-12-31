import { useLoaderData } from "react-router-dom";
import Course from "../Components/Course/Course";

const Courses = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {
                data?.map((course)=><Course key={course.name} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;