const NewDetailsShow = ({ newS }) => {
  const { name, title, date, img } = newS;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
            {title}
            </p>
            <p className="py-6">
            {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetailsShow;
