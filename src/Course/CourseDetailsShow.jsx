
const CourseDetailsShow = ({course}) => {
    // console.log(course)
    const {id,name,Department,Campus,Level,Instructor,Semester,Credit,Method,description,description2,description3,description4,time,room,dateRange,img1,img2} = course
    return (
        <div className="p-6">
            <div className="mt-20">
                <p className="text-2xl text-slate-400 ">{id}</p>
                <h2 className="text-5xl font-bold">{name}</h2>
                <p className="text-lg my-3">Home {'>'} Accounting Required Courses {'>'} <span className="text-green-500">{name}</span></p>
            </div>
            <div className="flex gap-5">
                <div className="lg:w-1/3">
                    <img src={img1} className="" alt="" />
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsShow;