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
          <label>First Name</label>
          <input {...register("firstName")} />
          <label>Gender Selection</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
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
