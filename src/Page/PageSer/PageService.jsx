// saikaet
const PageService = ({ service }) => {
  const { img, title, name } = service;
  return (
    <div className="p-4">
      <div className="text-white ">
        <div className="flex border p-3 border-green-600 justify-center">
          <img src={img} className="w-80 h-40" alt="" />
        </div>
        <p className="text-2xl font-bold my-5">{name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PageService;
