import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";
import useInstructor from "../hook/useInstructor";
import Loader from "../Loader/Loader";

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <Loader></Loader>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;