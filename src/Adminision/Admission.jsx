import { useLoaderData } from "react-router-dom";
import AdmissionBanner from "./AdmissionBanner";
import Aplication from "./Aplication";
import Service from "./Service";

const Admission = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="">
      <AdmissionBanner></AdmissionBanner>
      <div className="my-4 p-8">
        <p className="text-xl text-slate-400">
          {" "}
          Home {">"} <span className="text-green-600">Apply To SPI</span>
        </p>
      </div>
      <div className="mt-10 p-8">
        <h2 className="text-3xl font-bold mb-4">Detail About How To Apply</h2>
        <div className="flex-col md:flex-row flex justify-between gap-6 ">
          <div className="md:w-[550px] text-lg">
            If you would like to study in the university in the heart of the
            city that focus on chaning the world for better to morrow, you’re
            choosin the right place. We do not use special formulas to select
            students. We look at every single applicant’s application, academic
            and personal, to select students who suit to our community with a
            full range of backgrounds. If you would like to study in the
            university in the heart of the city.
          </div>
          <div className="md:w-[550px] text-lg">
            If you would like to study in the university in the heart of the
            city that focus on chaning the world for better to morrow, you’re
            choosin the right place. We do not use special formulas to select
            students. We look at every single applicant’s application, academic
            and personal, to select students who suit to our community.
          </div>
        </div>
      </div>
      <div className="">
        <Service></Service>
      </div>
      <div className=" p-4">
        <p className="text-4xl font-bold my-8 ">The Application Process</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 ">
          {data?.map((application) => (
            <Aplication
              key={application.title}
              application={application}
            ></Aplication>
          ))}
        </div>
        <hr className="border border-green-600 w-full my-5" />
      </div>
      <div className="flex-col md:flex-row flex justify-between items-start gap-10 md:p-8">
        <div className="md:w-1/2">
          <p className="text-3xl font-bold mb-5">Things To Know First</p>
          <h2 className="text-lg text-slate-500">
            The Common Application is required for students applying to any or
            all of KU’s three degree. You’ll be able to choose your campus and
            program s that you are interested.
          </h2>
          <p className="text-lg text-slate-500 my-8">You will need :</p>

          <li className="text-lg text-slate-500 mb-4">
            Contact information for the counselor or other school representative
            who will complete your Common Application School Report and submit
            your official high school transcript.
          </li>

          <li className="text-lg text-slate-500 mb-4">
            Contact information for one teacher (or two, maximum) who will
            complete the Teacher Evaluation form.
          </li>

          <li className="text-lg text-slate-500 mb-4">
            Nonrefundable $50 application fee. Students who are unable to pay
            the application fee can request a fee waiver.
          </li>
          <div className="flex-col lg:flex-row flex gap-5 ">
            <button className="btn text-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 ">
              Request a campus tour
            </button>
            <button className="btn text-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 ">
              Request Information
            </button>
          </div>
        </div>
        <div className="w-full p-3 md:w-1/2">
          <p className="text-3xl font-bold mb-5">When To Apply?</p>
          <div className="w-4/5 md:w-full overflow-x-auto my-8">
            <table className="table">
              {/* head */}
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg">
                <tr>
                  <th></th>
                  <th>Application Deadline</th>
                  <th>Decision</th>
                </tr>
              </thead>
              <tbody className="text-lg font-medium">
                {/* row 1 */}
                <tr>
                  <td>Early Decision 1</td>
                  <td>November 1</td>
                  <td>December 15</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Early Decision 2</td>
                  <td>January 1</td>
                  <td>February 15</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Regular Decision</td>
                  <td>January 1</td>
                  <td>April 1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <p className="text-3xl font-bold mb-5">
              Where to submit necessary documents?
            </p>
            <h2 className="text-xl text-slate-500">
              Documents not submitted through the online method can be mailed
              to:
            </h2>
            <h2 className="md:text-lg text-slate-500">
              Box 35300 <br /> 1810 Campus Way NE <br /> Bothell, WA 98011-8246
              USA
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
