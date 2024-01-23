import { FaGoogle } from "react-icons/fa";
import AuthHook from "../Hooks/AuthHook";

const Google = () => {
    const {googleLogin}=AuthHook()
    const handleGoogle = ()=>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
        })
    }
    return (
        <div>
            <div className="">
                <button onClick={handleGoogle} className="btn w-48 text-xl">
                    <FaGoogle className="text-2xl text-purple-500"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default Google;