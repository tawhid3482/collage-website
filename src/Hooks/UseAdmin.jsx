import { useQuery } from "@tanstack/react-query";
import AuthHook from "./AuthHook";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
    const {user,loading} = AuthHook()
    const axiosSecure = UseAxiosSecure()
    const {data: isAdmin, isPending: isAdminLoading}=useQuery({
        queryKey:[user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default UseAdmin;