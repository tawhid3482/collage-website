import { Link } from "react-router-dom";
import AuthHook from "../Hooks/AuthHook";
import security from '../assets/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.avif'
const Registration = () => {
    const {createUser} = AuthHook()

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photo = form.photo.value
        const email= form.email.value
        const password = form.password.value 
        // console.log(name,photo,email,password)
        createUser(email,password)
        .then( result =>{
            const user = result.user
            console.log(user)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={security} className="w-full" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleRegister} className="card-body h-full">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:text-black hover:bg-gray-600"
                  value="Sign up"
                />
              </div>
            </form>
            <div className="mb-5 text-center">
              <p className="text-lg">If you are  register member? </p>
              <p>Please <Link className="text-purple-600" to='/registration'>Sign in</Link></p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <hr className="w-20 border border-purple-600" />
                <p className="text-xl font-medium">OR</p>
                <hr className="w-20 border border-purple-600" />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Registration;