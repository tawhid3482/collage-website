import Helmets from "../../Helmets/Helmets";
import About from "../About/About";
import AllNews from "../AllNews/AllNews";
import Banner from "../Banner/Banner";
import Campus from "../Campus/Campus";
import Course from "../Course/Course";
import Events from "../Events/Events";
import Qlinks from "../Q-links/Qlinks";
import Students from "../Shayed/Students/Students";
import Slider from "../Slider/Slider";
import Sponser from "../Sponser/Sponser";
import UnderPart from "../UnderBannerPart/UnderPart";

const Home = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="">
            <Helmets text={'SPI - Home'}></Helmets>
            </div>
            <br />
            <br />
            <br />
            <Banner></Banner>
            <UnderPart></UnderPart>
            <About></About>
            <Campus></Campus>
            <Students></Students>
            <Events></Events>
            <AllNews></AllNews>
            <Slider></Slider>
            <Course></Course>
            <Qlinks></Qlinks>
            <Sponser></Sponser>
        </div>
    );
};

export default Home;