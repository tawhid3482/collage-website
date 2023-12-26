import { ImBooks } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { FaUniversity} from 'react-icons/fa'
const Service = () => {
    return (
        <div>
            <div className="flex justify-between items-center bg-green-950 text-slate-400">
                <div className="p-8">
                    <ImBooks className="text-7xl "></ImBooks>
                    <p className="text-2xl font-bold">Education Services</p>
                    <h2>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</h2>
                </div>
                <div className="p-8">
                    <BiWorld className="text-7xl "></BiWorld>
                    <p className="text-2xl font-bold">International Hubs</p>
                    <h2>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</h2>
                </div>
                <div className="p-8">
                    <GrDocumentText className="text-7xl "></GrDocumentText>
                    <p className="text-2xl font-bold">Bachelor’s and Master’s</p>
                    <h2>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</h2>
                </div>
                <div className="p-8">
                    <FaUniversity className="text-7xl "></FaUniversity>
                    <p className="text-2xl font-bold">International Hubs</p>
                    <h2>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</h2>
                </div>
            </div>
        </div>
    );
};

export default Service;