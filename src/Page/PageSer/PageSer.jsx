import PageService from "./PageService";

const PageSer = () => {
  return (
    <div>
      <div
        className="hero h-[400px] "
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2r2XiSYedi-DYysldZzD8qU9CDbHG5zPiCxlNOy1VtZ2zJODs0EzJy9PI1SgZiNRNMqU&usqp=CAU)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="">
                {
                    data.map((data)=><PageService key={}></PageService>)
                }
            </div>
      </div>
    </div>
  );
};

export default PageSer;
