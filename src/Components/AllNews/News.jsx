import { Link } from "react-router-dom";
import Button from "../Shayed/Button";

const News = ({ saikat }) => {
  //   console.log(saikat);
  const {id, name, title, img, date } = saikat;
  return (
    <div>
      <div className="card w-96 my-3 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-60" alt="img" />
        </figure>
        <div className="card-body">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  ">
            {date} / {title}
          </p>
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-start">
           <Link to={`/news/${id}`}><Button text={'Read more'}></Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
