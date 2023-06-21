import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../public/images/img1.png'
import img2 from '../../../public/images/img2.png'
import img3 from '../../../public/images/img3.png'

const Banner = () => {
    return (
        
        <Carousel showThumbs={false} >
        <div>
            <img src={img1}  />
           
        </div>
        <div>
            <img src={img2} />
            
        </div>
        <div>
            <img src={img3} />
            
        </div>
    </Carousel>
        
    );
};

export default Banner;