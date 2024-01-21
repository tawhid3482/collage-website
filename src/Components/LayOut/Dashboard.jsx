import { FaBook, FaHistory, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-64 min-h-full bg-gradient-to-t from-purple-600 to-pink-600">
          <ul className="menu p-5">
            <li className="text-white mb-2 uppercase">
              <NavLink to="/dashboard/userHome">
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
                 Home 
              </NavLink>
            </li>
           
            <li className="text-white mb-2 uppercase">
              <NavLink to="/page">
                 Page 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/course">
                 course 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/athletics">
                 Athletics 
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/university">
                 University Life 
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
