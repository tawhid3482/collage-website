const UnderCard = ({ under }) => {
  const {name,title,img}=under
  return (
    <div>
      
      <div className="hero-overlay w-72 h-52  rounded-md">
        <div className="absolute">
            <img src={img} className="w-72 h-52 opacity-60 " alt="" />
        </div>
        <div className="relative text-white top-20 text-center">
            <p className="text-3xl  font-bold">{name}</p>
            <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default UnderCard;
