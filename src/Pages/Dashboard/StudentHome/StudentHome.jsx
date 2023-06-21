import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import useCart from "../../../hook/UseCart";
import { AuthContext } from "../../../Providers/AuthProvider";
import { MdHotelClass } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IoMdCloudDone } from "react-icons/io";

const StudentHome = () => {
    const [classes,setclasses] = useState([])
    const [enrolled,setenrolled] = useState([])
    useEffect(()=>{

        fetch('https://fashion-fiesta-server-production.up.railway.app/classes')
        .then(res => res.json())
        .then(data=>{
            setclasses(data)
        })
    },[])
    const [cart] = useCart()
    useEffect(()=>{

        fetch('https://fashion-fiesta-server-production.up.railway.app/payments')
        .then(res => res.json())
        .then(data=>{
            setenrolled(data)
        })
    },[])
    const myEnrolledClasses = []
   
    const { user } = useContext(AuthContext)
    for (const i of enrolled) {

        if (user.email === i.email) {
            myEnrolledClasses.push(i)
        }
    }
    
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400">
            <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat bg-white">
  <div className="stat-figure text-primary">
  <MdHotelClass className="text-4xl text-yellow-500 mt-4"></MdHotelClass>
    </div>
    <div className="stat-title  font-bold">Total Classes</div>
    <div className="stat-value text-pink-500 ">{classes.length}</div>
   
  </div>
  
  <div className="stat  bg-white">
  <div className="stat-figure text-primary">
  <AiFillHeart className="text-4xl text-red-500 mt-5"></AiFillHeart>
    </div>
  
    <div className="stat-title  font-bold">Total Selected Classes</div>
    <div className="stat-value text-green-500 ">{cart.length}</div>
   
  </div>
  
  <div className="stat bg-white">
  <div className="stat-figure text-primary">
  <IoMdCloudDone className="text-4xl text-blue-400 mt-5"></IoMdCloudDone>
    </div>
    <div className="stat-title  font-bold">Total Enrolled Classes</div>
    <div className="stat-value text-purple-800">{myEnrolledClasses.length}</div>
   
  </div>
  
</div>
        </div>
    );
};

export default StudentHome;