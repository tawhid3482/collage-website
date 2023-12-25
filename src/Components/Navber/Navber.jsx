import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import NavRoutes from "./NavRoutes";
import logo from '../../assets/collage.jpg'

const Navber = () => {
  const [openMenu, setMenu] = useState(false);
  const { user, isAdmin, logOut } = useState();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/About", name: "About" },
    { path: "/Contact", name: "Contact" },
  ];

  return (
    <nav className=" fixed w-full z-30 flex justify-between items-center md:justify-center md:items-center md:text-black p-1 bg-base-200">
      <div className="">
        {/* <p className="text-3xl font-bold">SPI</p> */}
        <div className="hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src="" alt="" />
              )}
            </div>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            <li className="">
              <button className="btn btn-sm uppercase">
                {user?.displayName}
              </button>
            </li>

            <li className="">
              {user && isAdmin && (
                <Link
                  to={"/dashboard/adminHome"}
                  className="btn btn-sm uppercase"
                >
                  Dashboard
                </Link>
              )}
              {user && !isAdmin && (
                <Link to={"/dashboard/home"} className="btn btn-sm uppercase">
                  Dashboard
                </Link>
              )}
            </li>

            <li className="">
              <button onClick={logOut} className="btn btn-sm uppercase">
                Logout
              </button>
            </li>
          </ul>
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
        className={` md:flex  md:justify-center rounded-md w-40  md:w-full duration-1000 absolute left-0 md:static bg-base-200 text-black p-4
      ${openMenu ? "top-16" : "-top-60"}
      `}
      >
        {routes.map((route) => (
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
