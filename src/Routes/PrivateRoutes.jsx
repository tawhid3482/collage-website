import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../Hooks/AuthHook";

const PrivateRoutes = ({children}) => {
    const {user,loading}=AuthHook()
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;