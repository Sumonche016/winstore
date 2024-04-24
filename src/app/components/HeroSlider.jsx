"use client";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/banner/banner1.png";
import Image from "next/image";
const HeroSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Image className="w-full" src={ExampleCarouselImage} alt="image1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="w-full" src={ExampleCarouselImage} alt="image 2" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="w-full" src={ExampleCarouselImage} alt="image 3" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
