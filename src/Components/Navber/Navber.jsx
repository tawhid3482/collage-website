import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import NavRoutes from "./NavRoutes";
import logo from "../../assets/collage.jpg";
import AuthHook from "../../Hooks/AuthHook";
import { Link } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";

const Navber = () => {
  const [openMenu, setMenu] = useState(false);
  const { user, logoutUser } = AuthHook();
  const [isAdmin]= UseAdmin()
  const routes = [
    { path: "/", name: "Home" },
    { path: "/admission", name: "Admission" },
    { path: "/page", name: "Page" },
    { path: "/course", name: "Course" },
    { path: "/athletics", name: "Athletics" },
    { path: "/university", name: "University Life" },
  ];

  return (
    <nav className=" fixed w-full z-30 flex justify-between items-center md:justify-center md:items-center md:text-black p-1 bg-base-200">
      <div className="">
        <div className="dropdown ">
          {user ? (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                />
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">login</button>
            </Link>
          )}
          {user ? (
            <ul
              tabIndex={0}
              className="mt-3 z-[1] bg-gradient-to-r from-purple-600 to-pink-600  text-white p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="hover:bg-gradient-to-t hover:from-pink-600 hover:to-purple-600 rounded-lg">
                <p className="">{user?.displayName}</p>
              </li>
              {
                user && isAdmin ? <li className="hover:bg-gradient-to-t hover:from-pink-600 hover:to-purple-600 rounded-lg">
                <Link to='/dashboard/adminHome'>Dashboard</Link>
              </li> : <li className="hover:bg-gradient-to-t hover:from-pink-600 hover:to-purple-600 rounded-lg">
              <Link to='/dashboard/stHome'>Dashboard</Link>
            </li>
              }
              <li className="hover:bg-gradient-to-t hover:from-pink-600 hover:to-purple-600 rounded-lg" onClick={logoutUser}>
                <Link>Logout</Link>
              </li>
            </ul>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="">
        <div
          className="md:hidden flex justify-start mr-20 items-center"
          onClick={() => setMenu(!openMenu)}
        >
          {openMenu === true ? (
            <RxCross1 className="text-3xl text-black"></RxCross1>
          ) : (
            <MdOutlineMenuOpen className="text-3xl text-black"></MdOutlineMenuOpen>
          )}
        </div>
      </div>
      <ul
        className={` md:flex md:justify-center rounded-md md:w-full duration-1000 absolute left-0 md:static bg-base-200 text-black p-4
      ${openMenu ? "top-16" : "-top-72"}
      `}
      >
        {routes?.map((route) => (
          <NavRoutes key={route.path} route={route}></NavRoutes>
        ))}
      </ul>
      <div className="">
        <img src={logo} className="h-14 w-28 rounded-full" alt="LOGO" />
      </div>
    </nav>
  );
};

export default Navber;
