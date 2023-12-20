import { NavLink } from "react-router-dom";

const NavRoutes = ({route}) => {
  return (
    <div>
      <li className=" m-2 md:m-0 md:ml-6 p-1 rounded-lg w-16 md:w-16 text-center hover:bg-black ">
        <NavLink
          to={route.path}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-black text-white p-2 rounded-lg text-center"
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
