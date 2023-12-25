import { NavLink } from "react-router-dom";

const NavRoutes = ({route}) => {
  return (
    <div>
      <li className=" m-2 md:m-0 md:ml-8 p-1 rounded-lg  w-full text-center hover:bg-black hover:text-white ">
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
