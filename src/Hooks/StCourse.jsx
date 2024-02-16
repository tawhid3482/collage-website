import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const StCourse = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: clas, refetch } = useQuery({
    queryKey: ["myCourse"],
    queryFn: async () => {
      const res = await axiosSecure.get("/myCourse");
      return res.data;
    },
    
  });
  return [clas,refetch]
};

export default StCourse;
