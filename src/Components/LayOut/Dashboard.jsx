import { FaBook, FaHistory, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-64 min-h-full bg-gradient-to-t from-purple-600 to-pink-600">
          <ul className="menu p-4">
            <li className="text-yellow-400 uppercase">
              <NavLink to="/dashboard/userHome">
                User Home <FaHome className="text-xl ml-5"></FaHome>
              </NavLink>
            </li>
            <li className="text-yellow-400 uppercase">
              <NavLink to="/dashboard/myCourse">
                My Course <FaBook className="text-xl ml-5 "></FaBook>
              </NavLink>
            </li>
            <li className="text-yellow-400 uppercase">
              <NavLink to="/dashboard/cart">
                My Cart <FaShoppingCart className="text-xl ml-5 "></FaShoppingCart>
              </NavLink>
            </li>
            <li className="text-yellow-400 uppercase">
              <NavLink to="/dashboard/history">
                My History <FaHistory className="text-xl ml-5 "></FaHistory>
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
