import React from 'react';
import Slider from 'react-slick';
import CardKonsulComp from './CardKonsul'; // Adjust the path according to your project structure
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CarouselKonsulComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set the autoplay speed (in milliseconds)
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="w-[325px] md:w-[375px]">
      <Slider {...settings}>
        <CardKonsulComp />
        <CardKonsulComp />
        <CardKonsulComp />
      </Slider>
    </div>
  );
}

export default CarouselKonsulComp;
