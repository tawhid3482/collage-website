import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/LayOut/MainLayOut";
import Errorpage from "../Components/ErrorPage/Errorpage";
import Home from "../Components/Home/Home";
import Admission from "../Adminision/Admission";

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
        element:<Admission></Admission>
      },
    ],
  },
]);

export default Routes;
