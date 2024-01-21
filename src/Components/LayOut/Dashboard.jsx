import { FaBook, FaHistory, FaHome, FaPager, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { SiCoursera } from "react-icons/si";
import { MdSportsMartialArts } from "react-icons/md";
import { GiLoveMystery } from "react-icons/gi";


const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-64  min-h-full h-screen bg-gradient-to-t from-purple-600 to-pink-600">
          <ul className="menu p-5">
            <li className="text-white mb-2 uppercase">
              <NavLink to="/dashboard/studentHome">
              <FaHome className="text-xl mr-2"></FaHome>  Student Home 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/dashboard/myCourse">
              <FaBook className="text-xl mr-2 "></FaBook>  My Course 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/dashboard/cart">
              <FaShoppingCart className="text-xl mr-2 "></FaShoppingCart> My Cart 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/dashboard/history">
              <FaHistory className="text-xl mr-2 "></FaHistory>  My History 
              </NavLink>
            </li>
            <div className="divider text-white">OR</div>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/">
              <FaHome className="text-xl mr-2 "></FaHome>   Home 
              </NavLink>
            </li>
           
            <li className="text-white mb-2 uppercase">
              <NavLink to="/page">
              <FaPager className="text-xl mr-2 "></FaPager>  Page 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/course">
              <SiCoursera className="text-xl mr-2 "></SiCoursera> course 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/athletics">
              <MdSportsMartialArts className="text-xl mr-2 "></MdSportsMartialArts>  Athletics 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/university">
              <GiLoveMystery className="text-xl mr-2 "></GiLoveMystery>  University Life 
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
