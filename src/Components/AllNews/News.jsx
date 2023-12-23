const News = ({ saikat }) => {
  //   console.log(saikat);
  const { name, title, img, date } = saikat;
  return (
    <div>
      <div className="card w-96 my-3 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-60" alt="img" />
        </figure>
        <div className="card-body">
          <p className="text-green-400 ">
            {date} / {title}
          </p>
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-start">
            <button className="btn bg-green-600 text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
