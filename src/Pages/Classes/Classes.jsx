import CutoutBannerSolve from "../Home/CutoutBannerSolve";

import { useEffect, useState } from "react";
import Class from "./Class";


    

const Classes = () => {
    
    const [classes,setclasses] = useState([]);
    const approvedClass = [];
    useEffect(()=>{

        fetch('https://fashion-fiesta-server-production.up.railway.app/classes')
        .then(res => res.json())
        .then(data=>{
            setclasses(data)
        })
    },[])
    for(const i of classes){
        if(i.approval_status === 'approved'){
            approvedClass.push(i)
        }
    }
    return (
        <div className="login_bg ">
            <CutoutBannerSolve></CutoutBannerSolve>
            
           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-0 md:gap-x-10 md:max-w-screen-xl max-w-screen-sm mx-0  md:mx-auto pb-20">
              {
                approvedClass.map(classs =><Class
                    key={classs._id}
                    classs={classs}
                ></Class>)
              }
           </div>
        </div>
    );
};

export default Classes;