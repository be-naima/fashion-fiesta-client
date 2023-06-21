import OurInstructor from "./OurInstructor";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ModeContext } from "../../Providers/ModeProvider";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
const OurInstructors = () => {
    
    const [instructors,setInstructors] = useState([]);
    
    
    useEffect(()=>{

        fetch('https://fashion-fiesta-server-production.up.railway.app/instructors')
        .then(res => res.json())
        .then(data=>{
            setInstructors(data.slice(0, 6));
        })
    },[])
    
    
    const { darkMode, handleModeToggle } = useContext(ModeContext)
    return (
        <div className="  mt-20 ">
         <Slide animate__fadeInDownBig>   <h2 className={`  text-5xl font-bold leading-tight ${darkMode? 'text-white': 'text-blue-950 '}   pt-20 text-center`}>
  Our Instructors
</h2></Slide>
            <div className=" pt-20 mt-30 pb-32">
            
            
            <div className=" grid grid-cols-1 md:grid-cols-3  gap-y-14 gap-x-0 md:gap-x-10 md:max-w-screen-xl max-w-screen-sm mx-0  md:mx-auto">
               {
                 instructors.map(instructor =><OurInstructor
                     key={instructor._id}
                     instructor={instructor}
                 ></OurInstructor>)
               }
            </div>
         </div>
        </div>
    );
};

export default OurInstructors;


