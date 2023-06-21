import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CutoutBannerSolve from "./CutoutBannerSolve";

import Review from "./Review"
import OurInstructors from "./OurInstructors";
import { useLocation } from "react-router-dom";
import { ModeContext } from "../../Providers/ModeProvider";
import { useContext } from "react";
import Popular from "./Popular";
import Slider from "./Slider";


const Home = () => {
    const { darkMode, handleModeToggle } = useContext(ModeContext)
    return (
        <div className={`${darkMode? 'bg-black'  : 'bg-blue-200'}`}>
            <Helmet>
                <title>Fashion Fiesta | Home</title>
            </Helmet>
            <CutoutBannerSolve></CutoutBannerSolve>
            <Banner></Banner>
            <OurInstructors></OurInstructors>
            <Popular></Popular>
            <Slider></Slider>
        </div>
    );
};

export default Home;