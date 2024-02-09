import { useForm } from "react-hook-form";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";

const AddCourse = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"add new course"}></SectionTitle>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Subject Name</label>
          <input {...register("SubjectName")} />
          <select className="select select-primary w-full max-w-xs" {...register("Semester")}>
            <option disabled selected value="1st">1st</option>
            <option value="3rd">3rd</option>
            <option value="5th">5th</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddCourse;

// id
// "ACC401"
// fee
// 200
// name
// "Introduction to Managerial Accounting"
// Department
// "Business Adminstration"
// Campus
// "KU2 Hill"
// Level
// "Graduate"
// Instructor
// "ohn Hagensy (PhD)"
// Semester
// "Fall 2018"
// Credit
// "3.000"
// Method
// "Lecture"
// description
// "If you’re an educational professional who are looking to progress into…"
// description2
// "Provided by the KU Institute of Education, this programme is available…"
// description3
// "The MSc Finance (EG. Banking) deepens your understanding of banks and …"
// description4
// "The MSc Finance (EG. Banking) deepens your understanding of banks and …"
// time
// "9:00am – 11:00am"
// room
// "122"
// dateRange
// "Aug 21, 2018 – Dec 15, 2018"
// img1
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqUdeq3DMB_nVFh…"
// img2
// "https
