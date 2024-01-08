import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import NavRoutes from "./NavRoutes";
import logo from "../../assets/collage.jpg";
import Login from "../../Authentication/Login";

const Navber = () => {
  const [openMenu, setMenu] = useState(false);
  const { user, isAdmin, logOut } = useState();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/admission", name: "Admission" },
    { path: "/page", name: "Page" },
    { path: "/course", name: "Course" },
    { path: "/athletics", name: "Athletics" },
    { path: "/univercity", name: "UnivercityLife" },
    { path: "/login", name: "Login" },
  ];

  return (
    <nav className=" fixed w-full z-30 flex justify-between items-center md:justify-center md:items-center md:text-black p-1 bg-base-200">
      <div className="">
        <div className="dropdown ">
          {
            user? <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
           : <button className="btn">login</button>
          }
           {
            user ?  <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> : <p></p>
           }

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
