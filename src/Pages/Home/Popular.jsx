import { Fade, Slide } from "react-awesome-reveal";
import OurInstructor from "./OurInstructor";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ModeContext } from "../../Providers/ModeProvider";
import PopularCard from "./PopularCard";
const Popular = () => {
    const [popular, setpopular] = useState([]);
    const newPopular = []
    useEffect(() => {

        fetch('https://fashion-fiesta-server-production.up.railway.app/classes')
            .then(res => res.json())
            .then(data => {
                setpopular(data);
            })
    }, [])
    for(const i of popular){
        if(i.approval_status === 'approved'){
            newPopular.push(i)
        }
    }
    newPopular.sort((a, b) => b.enrolled - a.enrolled);
   
    console.log(newPopular);
    
    const { darkMode, handleModeToggle } = useContext(ModeContext)
    return (
        <div className="  mt-20 ">
            <Slide Zoom><h2 className={`  text-5xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-blue-950 '}   pt-20 text-center`}>
                Our Popular Classes
            </h2></Slide>
            <div className=" pt-20 mt-30 pb-32">


                <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-0 md:gap-x-10 md:max-w-screen-xl max-w-screen-sm mx-0  md:mx-auto">
                    {
                        newPopular.slice(0,6).map(popular => <PopularCard
                            key={popular._id}
                            popular={popular}
                        ></PopularCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;