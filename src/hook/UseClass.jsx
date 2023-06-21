import { useQuery } from "@tanstack/react-query";
const UseClass = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://fashion-fiesta-server-production.up.railway.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
};

export default UseClass;