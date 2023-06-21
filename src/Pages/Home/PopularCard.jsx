
import { Fade } from "react-awesome-reveal";

import { BsCoin } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const PopularCard = ({popular}) => {
   
    const { image, name, _id, instructor, price, available_seats,enrolled } = popular
    return (
        
        <div>
            <div  className={`item card w-80 shadow-xl border bottom-2 bg-white `} style={{ objectFit: "cover", height: "100%", width: "100%" }}>
                <figure style={{ height: "200px" }} >
                    <img src={image} alt="Shoes" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                </figure>
                <div className="card-body ">



                    <div className="flex font-bold text-blue-900"><SiGoogleclassroom className="mt-1 me-1"></SiGoogleclassroom><p>Course Name: <span className="text-black">{name}</span></p></div>
                    <div className="flex font-bold text-blue-900"><FaUser className="mt-1 me-1"></FaUser><p >Instructor: <span className="text-black ms-1">{instructor}</span></p></div>
                    <div className="flex font-bold text-blue-900"><FaUsers className="mt-1 me-1"></FaUsers><p >Enrolled: <span className="text-black ms-1">{enrolled}</span></p></div>
                    <div className="flex font-bold text-red-600"><BsCoin className="mt-1 me-1"></BsCoin><p >Price: <span className="text-red-600 ms-1">${price}</span></p></div>
                    <div className="badge badge-secondary font-bold pt-4 py-4 bg-teal-700 border-0 text-white">Seats:{available_seats}</div>
                   
                </div>

            </div>
        </div>
    );
};

export default PopularCard;