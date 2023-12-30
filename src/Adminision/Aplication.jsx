
const Aplication = ({application}) => {
    // console.log(application)
    const {title,description,num}=application
    return (
        <div>
            
            <div className="flex justify-start gap-5 p-4 ">
                <div className="">
                    <h2 className="text-7xl font-bold text-green-500">{num}</h2>
                </div>
                <div className="">
                    <p className="text-xl font-bold mb-5">{title}</p>
                    <p className=" ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Aplication;