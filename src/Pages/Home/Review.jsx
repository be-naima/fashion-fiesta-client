import { Rating } from "@smastrom/react-rating";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useContext } from "react";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { ModeContext } from "../../Providers/ModeProvider";

const Review = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        })
    }, [])
    const { darkMode, handleModeToggle } = useContext(ModeContext)
    return (

        <div className='md:w-9/12 md:mx-auto mx-9 pb-20'>

<Slide Zoom> <h2 className={`mb-14  text-5xl font-bold leading-tight ${darkMode? 'text-white': 'text-blue-950 '}   pt-20 text-center`}>Review</h2></Slide>

            <div className="grid md:grid-cols-3 grid-cols-1" >
            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10" data-aos="fade-right">
            <figure><img src="https://img.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg" className="w-96 h-96" alt="Shoes" /></figure>
                    <div className="avatar ">
                        <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSsM_zWNlyk48PDkksBkB-OkK988cUMEME0f1jTmblGuKAwMSNc2ujrDXjz_pHiZZX5E&usqp=CAU" className="" />
                        </div>
                    </div>
                    <div className="card-body relative bottom-10">

                        <h2 className="card-title">Alena Mirza</h2>
                        <p>The camp cultivates teamwork, communication skills, and confidence through engaging activities and group projects.❤️❤️</p>

                    </div>
                    
                </div>
            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10" data-aos="fade-right">
            <figure><img src="https://img.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg" className="w-96 h-96" alt="Shoes" /></figure>
                    <div className="avatar ">
                        <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.freepik.com/free-photo/time-manage-business-portrait-confident-ready-good-looking-redhead-female-entrepreneur-with-freckles-standing-warm-stylish-sweater-holding-hands-crossed-chest-assured-pose-smiling_1258-80986.jpg?t=st=1684597168~exp=1684597768~hmac=32322d75eb266b7654383b68d192eaa657ab5a2a4127362550e5e9f7a91991c7" className="" />
                        </div>
                    </div>
                    <div className="card-body relative bottom-10">

                        <h2 className="card-title">Nitu Rity</h2>
                        <p>Fashion Kids Summer Camp offers a creative and educational experience, teaching children about fashion styles, fabric selection, and garment design.!👍❤️</p>

                    </div>
                  
                </div>
            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10" data-aos="fade-right">
            <figure><img src="https://img.freepik.com/free-vector/winter-background-with-pastel-color-brushes-leaves_220290-42.jpg" className="w-96 h-96" alt="Shoes" /></figure>
                    <div className="avatar ">
                        <div className="w-20 rounded-full mx-auto relative bottom-12 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.freepik.com/premium-photo/spring-beauty-young-beautiful-stylish-female-model-posing-against-pink-background-cross-arms_1258-88398.jpg?w=2000" className="" />
                        </div>
                    </div>
                    <div className="card-body relative bottom-10">

                        <h2 className="card-title">Ridi Nupur</h2>
                        <p>Fashion Kids Summer Camp provides a fun and immersive environment where children can explore their passion for fashion.🔥🔥</p>

                    </div>
                   
                </div>




            </div>

        </div>
    );
};

export default Review;