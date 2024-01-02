
const Baner = ({img,title1,title2}) => {
    return (
        <div>
            <div className="">
        <img src={img} className="w-full h-screen" alt="" />
        <div className="relative right-0 bottom-32 ">
          <h2 className="text-2xl font-semibold text-green-400">
            {title1}
          </h2>
          <h2 className="text-6xl font-bold text-white ">{title2}</h2>
        </div>
      </div>
        </div>
    );
};

export default Baner;