import { useQuery } from "@tanstack/react-query";
import AuthHook from "../../../Hooks/AuthHook";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import { FaElementor, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = AuthHook();
  const axiosSecure = UseAxiosSecure();
  const { data: stats  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl my-2 font-bold">
        Hi,welcome <span>{user ? user.displayName : "back"}</span>{" "}
      </h2>
      <div className="mt-10 grid grid-cols-1 md:flex md:items-start  gap-3 md:gap-10 lg:gap-20">
        <div className="">
          <img src={user.photoURL} className="w-52 rounded-full" alt="" />
        </div>
        <div className="">
          <h2 className="text-xl font-medium">
            Position: <span className="text-pink-500">Admin</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Full Name: <br />{" "}
            <span className="text-pink-500 ">{user.displayName}</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Email: <br /> <span className="text-pink-500">{user.email}</span>
          </h2>
        </div>
        <div className="">
          <Link to='/dashboard/updateProfile'>
            <button className="btn btn-secondary">Update</button>
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 ">
        <div className=" flex gap-8 md:gap-5 lg:gap-10 bg-pink-400 text-white p-3 rounded-xl">
          <div className=" ">
            <FaMoneyCheckAlt className="text-7xl "></FaMoneyCheckAlt>
          </div>
          <div className="">
            <p className="text-4xl font-bold">${stats?.revenue}</p>
            <p className="text-2xl font-bold"> Revenue</p>
          </div>
        </div>
        <div className=" flex gap-8 md:gap-5 lg:gap-10 bg-purple-500 text-white p-3 rounded-xl">
          <div className="">
            <FaUsers className="text-6xl "></FaUsers>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{stats?.students}</p>
            <p className="text-2xl font-bold">Users</p>
          </div>
        </div>
        <div className=" flex gap-8 md:gap-5 lg:gap-10 bg-yellow-300 text-white p-3 rounded-xl">
          <div className="">
            <FaElementor className="text-6xl "></FaElementor>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{stats?.course}</p>
            <p className="text-2xl font-bold">Course</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminHome;
