import { FaGoogle } from "react-icons/fa";
import AuthHook from "../Hooks/AuthHook";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Google = () => {
    const {googleLogin}=AuthHook()
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()
    const handleGoogle = ()=>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
            navigate('/')
            const userInfo ={
                email:res.user?.email,
                name:res.user?.displayName,
                photo:res.user?.photoURL,
                
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
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