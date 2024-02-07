import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token')
      console.log('saikat',token)
      config.headers.authorization = `Bearer ${token}`
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(function (response) {
   
   return response;
 }, function (error) {
   console.log('error status',error)
   
   return Promise.reject(error);
 });

  return axiosSecure;
};

export default UseAxiosSecure;
