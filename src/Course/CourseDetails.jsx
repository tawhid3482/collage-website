import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CourseDetailsShow from "./CourseDetailsShow";

const CourseDetails = () => {
  const data = useLoaderData();
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  
  useEffect(()=>{
    const findCourse = data?.find(data=> data.id === id)
    setCourse(findCourse)
  },[id,data])
//   console.log(data);
  return <div>
        {
            course ? <CourseDetailsShow  course={course} /> :
            <div className="text-center">
                <progress className="progress w-56"></progress>
            </div>
        }

  </div>;
};

export default CourseDetails;
