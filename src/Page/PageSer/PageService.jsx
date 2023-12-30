
const PageService = ({service}) => {
    // console.log(service)
    const {img,title,name}=service
    return (
        <div>
            <div className="text-white">
                <img src={img} className="w-60 h-40" alt="" />
                <p className="text-2xl font-bold my-5">{name}</p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default PageService;