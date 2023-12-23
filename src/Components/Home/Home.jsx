import About from "../About/About";
import AllNews from "../AllNews/AllNews";
import Banner from "../Banner/Banner";
import Campus from "../Campus/Campus";
import Events from "../Events/Events";
import Students from "../Shayed/Students/Students";
import UnderPart from "../UnderBannerPart/UnderPart";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <UnderPart></UnderPart>
            <About></About>
            <Campus></Campus>
            <Students></Students>
            <Events></Events>
            <AllNews></AllNews>
        </div>
    );
};

export default Home;