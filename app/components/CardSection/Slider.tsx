"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VerticleSlider({
  images,
  speed = 500,
}: {
  images: string[];
  speed: number;
}) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: speed || 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  return (
    <div>
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item} className="rounded-2xl  h-full">
              <Image
                className="rounded-2xl h-full"
                src={item}
                alt="sneakpeak"
                width={500}
                height={500}
              />
            </div>
          ))}
        </Slider>
      }
    </div>
  );
}
