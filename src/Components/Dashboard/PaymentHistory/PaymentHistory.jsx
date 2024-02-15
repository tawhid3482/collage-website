import { useQuery } from "@tanstack/react-query";
import AuthHook from "../../../Hooks/AuthHook";
import SectionTitle from "../../Shayed/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const PaymentHistory = () => {
    const {user}=AuthHook()
    const axiosSecure = UseAxiosSecure()
    const {data:payments =[]}=useQuery({
        queryKey:['payments', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
  return (
    <div>
      <div className="text-center">
        <SectionTitle title={" Payment History"}></SectionTitle>
      </div>
      <div className="">
        <p className="text-2xl font-semibold">Total Payment: {payments?.length}</p>
      </div>
      <div className="">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-lg font-bold">
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Fee</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className="text-base">
      {payments?.map((pay,index)=> <tr key={pay._id}>
        <th>{index + 1}</th>
        <td>{pay.email}</td>
        <td>{pay.transactionId}</td>
        <td>$ {pay.fee}</td>
        <td>{pay.date}</td>
        <td>{pay.status}</td>
      </tr>)}
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default PaymentHistory;
