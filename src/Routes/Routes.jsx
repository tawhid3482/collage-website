import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/LayOut/MainLayOut";
import Errorpage from "../Components/ErrorPage/Errorpage";
import Home from "../Components/Home/Home";
import Admission from "../Adminision/Admission";
import Page from "../Page/Page";
import Courses from "../Course/Courses";
import CourseDetails from "../Course/CourseDetails";
import Athletics from "../Athletics/Athletics";

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
      }
    ],
  },
]);

export default Routes;
