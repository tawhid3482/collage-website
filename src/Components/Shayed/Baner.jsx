
const Baner = ({img,title1,title2}) => {
    return (
        <div className="">
            <div className="">
        <img src={img} className="w-full h-screen" alt="" />
        <div className="relative right-0 bottom-32 p-2 ">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
            {title1}
          </h2>
          <h2 className="text-6xl font-bold text-white ">{title2}</h2>
        </div>
      </div>
        </div>
    );
};

export default Baner;