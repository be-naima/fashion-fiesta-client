
import { MdEmail} from "react-icons/md";
import { FaUser} from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useContext } from "react";
import { ModeContext } from "../../Providers/ModeProvider";
const OurInstructor = ({instructor}) => {
    const {image,name,email,_id,available_seats} = instructor
    useEffect(()=>{Aos.init()},[])
    const { darkMode, handleModeToggle } = useContext(ModeContext)
    return (
        
        <div>
             <div data-aos="zoom-in" className="item card w-80 bg-base-100 shadow-xl border bottom-2 " style={{objectFit: "cover", height: "100%", width: "100%" }}>
             <figure style={{ height: "200px" }}>
    <img src={image} alt="Shoes" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
  </figure>
                <div className={`card-body `}>
                    
                    
                    
                    <div className="flex font-bold text-blue-900"><FaUser className="mt-1 me-1"></FaUser><p>Name: <span className="text-black">{name}</span></p></div>
                    <div className="flex font-bold text-blue-900"><MdEmail className="mt-1 me-1"></MdEmail><p >Email: <span className="text-black ms-1">{email}</span></p></div>
                    
                </div>
            </div>
        </div>
    );
};

export default OurInstructor;