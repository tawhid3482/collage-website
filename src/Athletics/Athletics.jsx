import Baner from "../Components/Shayed/Baner";
import Subtitle from "../Components/Shayed/Subtitle";
import athletics from '../assets/sports.jpg'
const Athletics = () => {
    return (
        <div className="p-7">
            <div className="">
                <Baner img={athletics} title1={'Go For KU Team!'} title2={'Athletics'}></Baner>
            </div>
            <div className="">
                <Subtitle sub={'Home'} title={'Athletics'}></Subtitle>
            </div>
        </div>
    );
};

export default Athletics;