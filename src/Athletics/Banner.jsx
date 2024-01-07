const Banner = ({img,title, subTitle}) => {
  return (
    <div className=" flex-col lg:flex-row lg:flex mt-5">
      <div className="lg:w-1/2 ">
        <img src={img} className="w-full h-[450px]" alt="" />
      </div>
      <div className="p-8 lg:w-1/2">
        <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 "> ?? </span>
        <p className="text-2xl font-bold my-8">{title}
        </p>
        <p className="text-2xl font-bold">{subTitle}</p>
      </div>
    </div>
  );
};

export default Banner;
