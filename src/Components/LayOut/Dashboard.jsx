import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-64 min-h-full bg-gradient-to-t from-purple-600 to-pink-600">
          <ul className="menu p-4">
            <li className="">
              <NavLink to="/dashboard/userHome">
                User Home <FaShoppingCart className="text-xl text-purple-600"></FaShoppingCart>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/myCourse">
                My Course<FaShoppingCart className="text-xl text-purple-600"></FaShoppingCart>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard/cart">
                My Cart <FaShoppingCart className="text-xl text-purple-600"></FaShoppingCart>
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
