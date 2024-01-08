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
        element:<Admission></Admission>,
        loader:()=>fetch('/application.json')
      },
      {
        path:"page",
        element:<Page></Page>,
      },
      {
        path:"course",
        element:<Courses></Courses>,
        loader:()=>fetch('/course.json')
      },
      {
        path:"course/:id",
        element:<CourseDetails></CourseDetails>,
        loader:()=>fetch('/course.json')
      },
      {
        path:"athletics",
        element:<Athletics></Athletics>,
      },
      {
        path:"univercity",
        element:<UnivercityLife></UnivercityLife>,
        loader:()=>fetch('/unilife.json')
      },
      {
        path:'news/:id',
        element:<NewsDetails></NewsDetails>,
        loader:()=>fetch('/news.json')
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ],
  },
]);

export default Routes;
