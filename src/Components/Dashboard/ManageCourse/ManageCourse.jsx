import UseCourse from "../../../Hooks/UseCourse";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";

const ManageCourse = () => {
    const [data]=UseCourse()
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"Manage Your Course"}></SectionTitle>
      </div>
      <div className="">
        <p className="text-2xl font-semibold">Total Course: {data.length}</p>
      </div>
    </div>
  );
};

export default ManageCourse;
