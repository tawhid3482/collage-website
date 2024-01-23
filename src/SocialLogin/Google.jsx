import { FaGoogle } from "react-icons/fa";
import AuthHook from "../Hooks/AuthHook";
import { useNavigate } from "react-router-dom";

const Google = () => {
    const {googleLogin}=AuthHook()
    const navigate = useNavigate()
    const handleGoogle = ()=>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
            navigate('/')
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