import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Experience from "./Experience";
import OurGoal from "./OurGoal";
import Tradition from "./Tradition";
import UniLife from "./UniLife";

const UnivercityLife = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div className="p-6">
      <Banner></Banner>
      <Tradition></Tradition>
      <Experience></Experience>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {data?.map((uni) => (
          <UniLife key={uni.id} uni={uni}></UniLife>
        ))}
      </div>
      <OurGoal></OurGoal>
    </div>
  );
};

export default UnivercityLife;
