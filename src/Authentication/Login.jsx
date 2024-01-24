import { useEffect,  useState } from "react";
import Helmets from "../Helmets/Helmets";
import security from "../assets/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.avif";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthHook from "../Hooks/AuthHook";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Google from "../SocialLogin/Google";

const Login = () => {
  
  const [disabled, setDisabled] = useState(true);

  const {signInUser}= AuthHook()
  
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email,password)
    .then(result =>{
      const users = result.user
      console.log(users)
      navigate(from,{replace:true})
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are login successfully",
        showConfirmButton: false,
        timer: 1500
      });
     
    })
    .catch(error=>{

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something wrong please try again",
        showConfirmButton: false,
        timer: 1500
      });
    })
  };

  const handleValiedCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      
    } else {
      setDisabled(true);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your captcha valid unsuccessfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
  return (
    <div>
      <div className="">
        <Helmets text={"SPI - Login"}></Helmets>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row my-12">
          <div className="text-center lg:text-left">
            <img src={security} className="w-full h-[550px]" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body h-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Captcha"
                  onBlur={handleValiedCaptcha}
                  name="captcha"
                  className="input input-bordered"
                />
              
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:text-black hover:bg-gray-600"
                  value="Login"
                  disabled={false}
                />
              </div>
            </form>
            <div className="mb-5 text-center">
              <p>If you are not register member? </p>
              <p>Please <Link className="text-purple-600" to='/registration'>Sign up</Link></p>
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

export default Login;
