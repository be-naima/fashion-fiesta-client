import CutoutBannerSolve from "../Home/CutoutBannerSolve";
import Instructor from "./Instructor";
import { useEffect, useState } from "react";
const Instructors = () => {
    const [instructors,setInstructors] = useState([]);
    useEffect(()=>{

        fetch('https://fashion-fiesta-server-production.up.railway.app/instructors')
        .then(res => res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    return (
        <div className="login_bg">
            <CutoutBannerSolve></CutoutBannerSolve>
            
           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-0 md:gap-x-10 md:max-w-screen-xl max-w-screen-sm mx-0  md:mx-auto">
              {
                instructors.map(instructor =><Instructor
                    key={instructor._id}
                    instructor={instructor}
                ></Instructor>)
              }
           </div>
        </div>
    );
};

export default Instructors;