import Banner from "./Banner";
import Experience from "./Experience";
import OurGoal from "./OurGoal";
import Tradition from "./Tradition";

const UnivercityLife = () => {
    return (
        <div className="p-6">
            <Banner></Banner>
            <Tradition></Tradition>
            <Experience></Experience>
            <OurGoal></OurGoal>
        </div>
    );
};

export default UnivercityLife;