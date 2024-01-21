import AuthHook from "../../../Hooks/AuthHook";

const StHome = () => {
  const { user } = AuthHook();
  return (
    <div>
      <div className="flex justify-between">
        <div className="my-5">
          <div className="flex justify-between  gap-20 items-center">
            <div className="">
              <p className="text-4xl font-bold">Dashboard</p>
              <h2 className="text-lg font-medium">date:</h2>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 uppercase p-3 rounded-md text-white">
              jun-20-2024
            </div>
          </div>
          <div className="flex gap-20 my-5 p-5 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="">
              <img
                src={user.photoURL}
                className="w-32 h-40 rounded-full"
                alt=""
              />
            </div>
            <div className="text-left mt-10 text-white lg:w-80">
                <h3 className="text-2xl font-semibold"><span className="text-black">Hello</span>, <span>{user?.displayName}</span></h3>
                <p className="text-lg font-medium">This is your dashboard home. You can see all details in your dasboard</p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default StHome;
