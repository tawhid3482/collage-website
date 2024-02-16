import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/LayOut/MainLayOut";
import Errorpage from "../Components/ErrorPage/Errorpage";
import Home from "../Components/Home/Home";
import Admission from "../Adminision/Admission";
import Page from "../Page/Page";
import Courses from "../Course/Courses";
import CourseDetails from "../Course/CourseDetails";
import Athletics from "../Athletics/Athletics";
import UnivercityLife from "../Univercity/UnivercityLife";
import NewsDetails from "../Components/AllNews/NewsDetails";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Components/LayOut/Dashboard";
import MyCart from "../Components/Dashboard/MYCart/MyCart";
import StHome from "../Components/Dashboard/StudentsHome/StHome";
import AllStudents from "../Components/Dashboard/AllStudents/AllStudents";
import AdminRoutes from "./AdminRoutes";
import AddCourse from "../Components/Dashboard/AddCourse/AddCourse";
import ManageCourse from "../Components/Dashboard/ManageCourse/ManageCourse";
import UpdateCourse from "../Components/Dashboard/UpdateCourse/UpdateCourse";
import Payment from "../Components/Dashboard/Payment/Payment";
import PaymentHistory from "../Components/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Components/Dashboard/AdminHome/AdminHome";
import MyCourse from "../Components/Dashboard/MyCourse/MyCourse";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "admission",
        element: <Admission></Admission>,
        loader: () => fetch("https://collage-website-server.vercel.app/application"),
      },
      {
        path: "page",
        element: <Page></Page>,
      },
      {
        path: "course",
        element: <Courses></Courses>,
        loader: () => fetch("https://collage-website-server.vercel.app/department"),
      },
      {
        path: "course/:id",
        element: (
          <PrivateRoutes>
            <CourseDetails></CourseDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://collage-website-server.vercel.app/department"),
      },
      {
        path: "athletics",
        element: <Athletics></Athletics>,
      },
      {
        path: "university",
        element: <UnivercityLife></UnivercityLife>,
        loader: () => fetch("https://collage-website-server.vercel.app/uniEvents"),
      },
      {
        path: "news/:id",
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "studentHome",
        element: <StHome></StHome>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "myCourse",
        element: <MyCourse></MyCourse>,
      },
      {
        path: "allStudents",
        element: (
          <AdminRoutes>
            <AllStudents></AllStudents>
          </AdminRoutes>
        ),
      },
      {
        path: "addCourse",
        element: (
          <AdminRoutes>
            <AddCourse></AddCourse>
          </AdminRoutes>
        ),
      },
      {
        path: "manageCourse",
        element: (
          <AdminRoutes>
            <ManageCourse></ManageCourse>
          </AdminRoutes>
        ),
      },
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: "update/:id",
        element: (
          <AdminRoutes>
            <UpdateCourse></UpdateCourse>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://collage-website-server.vercel.app/department/${params.id}`),
      },
    ],
  },
]);

export default Routes;
