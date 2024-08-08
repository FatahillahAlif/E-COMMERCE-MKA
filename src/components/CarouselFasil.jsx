import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardFasilComp from './CardFasil';
import CardFasil2Comp from './CardFasil2';

function CarouselFasilComp() {
    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Number of cards to show at once
        slidesToScroll: 1, // Number of cards to scroll at once
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Duration for each slide (in milliseconds)
        pauseOnHover: true, // Pause autoplay when hovering over the slides
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,  // Adjust for medium screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,  // Adjust for small screens
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="carousel-container w-80 sm:w-auto">
            <Slider {...settings}>
                <CardFasilComp />
                <CardFasil2Comp />
                <CardFasilComp />
                <CardFasil2Comp />
                <CardFasilComp />
            </Slider>
        </div>
    );
}

export default CarouselFasilComp;
