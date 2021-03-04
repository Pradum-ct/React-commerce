import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../picture/banner1.jpg'
import banner2 from '../picture/banner2.jpg'
import banner3 from '../picture/banner3.jpg'

const Banner = () => 

{
    return(
        
        <header>
            <div className="headerText">
            <Carousel>
                <div>
                    <img src={banner1} />
                    <p className="legend">Shopping</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">E-commerce</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Sho it now</p>
                </div>
            </Carousel>
            </div>
            

        </header>
    
    
    )

}

export default Banner;