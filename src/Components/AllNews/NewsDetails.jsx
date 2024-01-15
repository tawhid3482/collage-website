import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewDetailsShow from "./NewDetailsShow";

const NewsDetails = () => {
  const data= useLoaderData();
  console.log(data)
  const [newS, setNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findData = data?.find((news) => news.id === id);
    setNews(findData);
  }, [id,data]);
  return (
    <div>
      {newS ? (
        <NewDetailsShow newS={newS}></NewDetailsShow>
      ) : (
        <div className="text-center">
          <progress className="progress w-56"></progress>
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
