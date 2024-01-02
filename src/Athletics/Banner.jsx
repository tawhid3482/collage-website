const Banner = () => {
  return (
    <div className=" flex-col lg:flex-row lg:flex mt-5">
      <div className="lg:w-1/2 ">
        <img src="https://eliteclubs.com/wp-content/uploads/2019/11/The-Pros-Cons-of-Exercising-with-a-Friend-e1571837163735.jpeg" className="w-full h-[450px]" alt="" />
      </div>
      <div className="p-8 lg:w-1/2">
        <span className="text-8xl font-bold text-green-500"> ?? </span>
        <p className="text-2xl font-bold my-8">
          {" "}
          Our goal is to be at the heart of the financial services industry as
          businesses expand across.
        </p>
        <p className="text-2xl font-bold"> John SmithCEO / Of Financity</p>
      </div>
    </div>
  );
};

export default Banner;
