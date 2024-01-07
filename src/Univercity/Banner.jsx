const Banner = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src="https://www.usnews.com/object/image/00000189-da73-d234-afff-ff772a960000/gettyimages-1414982113.jpg?update-time=1691587242372&size=responsive640"
          className="w-full max-h-screen  "
          alt=""
        />
        <div className="flex  justify-between items-start gap-20 relative bottom-40 p-4  text-white" >
          <div className="">
          <p className="text-3xl lg:text-5xl font-bold">University Life</p>
          <hr className="border-2 border-purple-500 w-58 lg:w-96 my-5" />
          </div>
          <div className="lg:text-lg font-medium hidden md:block" >
          Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
