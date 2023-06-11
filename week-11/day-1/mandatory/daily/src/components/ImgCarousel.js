import '../ImgCarousel.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImgCarousel = () => {
    return (
        <Carousel infiniteLoop autoPlay className='card'>
            <div>
                <img src="/baby_panda.png" alt='baby panda'/>
                <p className="legend">baby panda</p>
            </div>
            <div>
                <img src="kiwi_in_the_ocean.png" alt='kiwi in the ocean'/>
                <p className="legend">kiwi in the ocean</p>
            </div>
            <div>
                <img src="mountain_with_foxes.png" alt='mountain with foxes'/>
                <p className="legend">mountain with foxes</p>
            </div>
        </Carousel>
    );
}

export default ImgCarousel