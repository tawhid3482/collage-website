import { useForm } from "react-hook-form";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";
import { MdOutlineLibraryAdd } from "react-icons/md";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const AddCourse = () => {
  const { register, handleSubmit } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const axiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data)
    // 1st img host
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    });
    console.log(res.data)

    const imageFile2 = { insImage: data.insImage[0]};
    const resImage2 = await axiosPublic.post(image_hosting_api, imageFile2, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });

    console.log('Image 2 uploaded:', resImage2.data);


  };

  return (
    <div>
      <div className="text-center">
        <SectionTitle title={"add new course"}></SectionTitle>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Course name*</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Course Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Course Fee*</span>
                </div>
                <input
                  {...register("fee")}
                  type="text"
                  placeholder="Course fee"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Course id*</span>
                </div>
                <input
                  {...register("courseId")}
                  type="text"
                  placeholder="Course id"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Semester*</span>
                </div>
                <select
                  defaultValue="default"
                  className="select select-primary w-full "
                  {...register("semester")}
                >
                  <option disabled value="default">
                    Select Your Semester
                  </option>
                  <option value="1st">1st</option>
                  <option value="3rd">3rd</option>
                  <option value="5th">5th</option>
                </select>
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Department*</span>
                </div>
                <input
                  {...register("department")}
                  type="text"
                  placeholder="Department"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Course Instructor*</span>
                </div>
                <input
                  {...register("instructor")}
                  type="text"
                  placeholder="Course Instructor"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Credit</span>
                </div>
                <input
                  {...register("credit")}
                  type="text"
                  placeholder="Credit"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Course Level*</span>
                </div>
                <input
                  {...register("level")}
                  type="text"
                  placeholder="Course Level"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Campus</span>
                </div>
                <input
                  {...register("campus")}
                  type="text"
                  placeholder="Campus"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Method*</span>
                </div>
                <select
                  defaultValue="default"
                  className="select select-primary w-full "
                  {...register("method")}
                >
                  <option disabled value="default">
                    Select Your Method
                  </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="both">Online & Offline both</option>
                </select>
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Class Time*</span>
                </div>
                <input
                  {...register("time")}
                  type="text"
                  placeholder="Class Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className="">
                <div className="label">
                  <span className="label-text">Date Range*</span>
                </div>
                <input
                  {...register("dateRange")}
                  type="text"
                  placeholder="Date Range"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">About Course Description*</span>
                </div>

                <textarea
                  {...register("description1")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Course Description"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">
                    About Course Finish Description*
                  </span>
                </div>

                <textarea
                  {...register("description2")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Course Finish Description"
                ></textarea>
              </label>
            </div>
            <div className="w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">
                    About Course Instructor Description*
                  </span>
                </div>

                <textarea
                  {...register("description3")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Course Instructor Description"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className=" w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">
                    About Scholarship Description*
                  </span>
                </div>

                <textarea
                  {...register("scholarship")}
                  className="textarea textarea-bordered w-full"
                  placeholder="About Scholarship Description"
                ></textarea>
              </label>
            </div>
            <div className=" w-full my-2">
              <label className=" ">
                <div className="label">
                  <span className="label-text">Instructor Image*</span>
                </div>

                <input
                  {...register("insImage", { required: true })}
                  type="file"
                  className="file-input file-input-bordered file-input-secondary w-full "
                />
              </label>
            </div>
          </div>

          <div className="form-control w-full">
            <label className=" ">
              <div className="label">
                <span className="label-text">Course Image*</span>
              </div>

              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full "
              />
            </label>
          </div>

          <div className="my-5 text-center">
            <button className="btn btn-secondary uppercase">
              Add Course <MdOutlineLibraryAdd className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;


