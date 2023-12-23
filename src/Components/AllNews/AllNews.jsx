import UseNews from "../../Hooks/UseNews";
import News from "./News";

const AllNews = () => {
  const [news] = UseNews();
console.log(news)
  return (
    <div className="my-5">
      <div className="flex items-center justify-center">
        <p className="text-3xl font-bold w-80 ">News & Updates</p>{" "}
        <hr className="w-full border-green-800" />
      </div>
      <p className="text-green-500 mb-2">Read All News</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {news?.map((saikat) => (
          <News key={saikat.name} saikat={saikat}></News>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
