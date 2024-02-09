import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../Hooks/AuthHook";
import UseAdmin from "../Hooks/UseAdmin";

const AdminRoutes = ({children}) => {
  const { user, loading } = AuthHook();
  const [ isAdmin, isAdminLoading ] = UseAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
