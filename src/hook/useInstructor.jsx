import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioSecure";
const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data?.instructor ?? false;
            } catch (error) {
                console.error('Error fetching instructor data:', error);
                return false;
            }
        },
    });

    return [isInstructor, isInstructorLoading];
};

export default useInstructor;
