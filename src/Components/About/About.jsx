import { Link } from "react-router-dom";
import logo from "../../assets/collage-removebg-preview.png";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Shayed/Button";

const About = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center ">
        <div className="w-1/2">
          <div className="flex justify-center items-center gap-3 ml-0">
            <img src={logo} className="w-32 h-24 " alt="" />
            <p className="text-3xl font-bold">Sylhet Polytacnic Institute</p>
          </div>
          <div className="">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  text-4xl font-bold text-center">
              About Our University
            </h2>
          </div>
        </div>
        <div className="w-3/5 space-y-3">
          <p className="text-2xl font-medium mr-1">
            We are one of the largest, most diverse universities in the USA with
            over 90,000 students in USA, and a further 30,000 studying across
            180 countries for Kingster University.
          </p>
          <p className="text-xl font-medium">
            Kingster University was established by John Smith in 1920 for the
            public benefit and it is recognized globally. Throughout our great
            history, Kingster has offered access to a wide range of academic
            opportunities. As a world leader in higher education, the University
            has pioneered change in the sector.
          </p>
          <div className="">
            <Link to={"/page"}>
              {" "}
              <Button text={"Read more"} icon={<FaArrowRight className="text-xl"></FaArrowRight>}>
                
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
