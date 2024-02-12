import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseCourse = () => {
    const axiosPublic = UseAxiosPublic()
    const {data,refetch} = useQuery({
        queryKey:['department'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/department')
            return res.data
        }
    })
    return [data,refetch]
    
};

export default UseCourse;