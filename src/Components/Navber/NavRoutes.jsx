import { NavLink } from "react-router-dom";

const NavRoutes = ({route}) => {
  return (
    <div>
      <li className=" m-2 md:m-0 md:ml-8 p-1 rounded-lg text-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white ">
        <NavLink
          to={route.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              : ""
          }
        >
          {route.name}
        </NavLink>
      </li>
    </div>
  );
};

export default NavRoutes;
