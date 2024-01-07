const UniLife = ({ uni }) => {
  const { name, img, description } = uni;
  return (
    <div>
      <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  text-lg">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniLife;
