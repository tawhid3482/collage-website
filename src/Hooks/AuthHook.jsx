import { useContext } from "react";
import AuthProvider from "../Providers/AuthProvider";

const AuthHook = () => {
    const all = useContext(AuthProvider)
    return all
   
};

export default AuthHook;