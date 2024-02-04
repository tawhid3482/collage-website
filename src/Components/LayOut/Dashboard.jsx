import {
  FaBook,
  FaHistory,
  FaHome,
  FaPager,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { SiCoursera } from "react-icons/si";
import { MdSportsMartialArts } from "react-icons/md";
import { GiLoveMystery } from "react-icons/gi";
import UseCart from "../../Hooks/UseCart";
import { MdOutlineManageSearch } from "react-icons/md";

// i am sorry 

const Dashboard = () => {
  const isAdmin = true;
  const isModerator = false;
  const [cart] = UseCart();

  return (
    <div>
      <div className="md:flex md:gap-5">
        <div className="md:w-64 h-full md:h-screen bg-gradient-to-t from-purple-600 to-pink-600">
          <ul className="menu p-5">
            {isAdmin && (
              <>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/AdminHome">
                    <FaHome className="text-xl mr-2"></FaHome> Admin Home
                  </NavLink>
                </li>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/addCourse">
                    <FaBook className="text-xl mr-2"></FaBook> Add course
                  </NavLink>
                </li>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/manageCourse">
                    <MdOutlineManageSearch className="text-2xl mr-2"></MdOutlineManageSearch>{" "}
                    Manage course
                  </NavLink>
                </li>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/allStudents">
                    <FaUsers className="text-xl mr-2"></FaUsers> All Students
                  </NavLink>
                </li>
              </>
            )}

            {isModerator && (
              <>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/allUser">
                    <FaUsers className="text-xl mr-2"></FaUsers> All Students
                  </NavLink>
                </li>
              </>
            )}

            {!isAdmin && !isModerator && (
              <>
                {/* Panel for User */}
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/studentHome">
                    <FaHome className="text-xl mr-2"></FaHome> Student Home
                  </NavLink>
                </li>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/myCourse">
                    <FaBook className="text-xl mr-2 "></FaBook> My Course
                  </NavLink>
                </li>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart className="text-xl mr-2 "></FaShoppingCart>{" "}
                    My Cart{" "}
                    <span className="text-yellow-500 text-lg">
                      +{cart.length}
                    </span>
                  </NavLink>
                </li>
                <li className="text-white mb-2 uppercase">
                  <NavLink to="/dashboard/history">
                    <FaHistory className="text-xl mr-2 "></FaHistory> My History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider text-white">OR</div>

            {/* Common navigation items for all roles */}
            <li className="text-white mb-2 uppercase">
              <NavLink to="/">
                <FaHome className="text-xl mr-2 "></FaHome> Home
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/page">
                <FaPager className="text-xl mr-2 "></FaPager> Page
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/course">
                <SiCoursera className="text-xl mr-2 "></SiCoursera> Course
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/athletics">
                <MdSportsMartialArts className="text-xl mr-2 "></MdSportsMartialArts>{" "}
                Athletics
              </NavLink>
            </li>
            <li className="text-white mb-2 uppercase">
              <NavLink to="/university">
                <GiLoveMystery className="text-xl mr-2 "></GiLoveMystery>{" "}
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
