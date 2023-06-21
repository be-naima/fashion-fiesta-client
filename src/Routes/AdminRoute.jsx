import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";
import Loader from "../Loader/Loader";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;