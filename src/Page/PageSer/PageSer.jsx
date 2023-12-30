import UsePage from "../../Hooks/UsePage";
import PageService from "./PageService";

const PageSer = () => {
  const [services] = UsePage();
  return (
    <div>
      <div
        className="hero ld:h-[400px] "
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2r2XiSYedi-DYysldZzD8qU9CDbHG5zPiCxlNOy1VtZ2zJODs0EzJy9PI1SgZiNRNMqU&usqp=CAU)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.map((service) => (
            <PageService key={service.title} service={service}>
              {" "}
            </PageService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSer;
