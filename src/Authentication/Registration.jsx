import { Link, useNavigate } from "react-router-dom";
import AuthHook from "../Hooks/AuthHook";
import security from "../assets/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.avif";
import { useForm } from "react-hook-form";
import Helmets from "../Helmets/Helmets";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import Google from "../SocialLogin/Google";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = AuthHook();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();

  const onSubmit = (data) => {
    // console.log(data)
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");

      updateUserProfile(data.name, data.photo)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photo
          }
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId){
              // console.log('users')
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You are register successfully",
                showConfirmButton: false,
                timer: 1500,
              });
          }else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Something wrong please try later",
              showConfirmButton: false,
              timer: 1500,
            });
          }
         

          });
        })
        .catch((error) => 
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error} Something wrong please try later`,
          showConfirmButton: false,
          timer: 1500,
        }));
    });
  };

  return (
    <div className="">
      <div className="">
        <Helmets text={"SPI - Registration"}></Helmets>
      </div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row my-12">
          <div className="text-center lg:text-left">
            <img src={security} className="w-full h-[550px]" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body h-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  {...register("photo", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">Password must be 6 char</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less then 16 char
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:text-black hover:bg-gray-600"
                  value="Sign up"
                />
              </div>
            </form>
            <div className="mb-5 text-center">
              <p className="text-lg">If you are register member? </p>
              <p>
                Please{" "}
                <Link className="text-purple-600" to="/login">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <hr className="w-20 border border-purple-600" />
              <p className="text-xl font-medium">OR</p>
              <hr className="w-20 border border-purple-600" />
            </div>
            <div className="text-center my-5">
              <Google></Google>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
