import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Satya Nadella",
    image: "https://picsum.photos/102/102",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    id: 2,
    name: "Virat Kohli",
    image: "https://picsum.photos/104/104",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    image: "https://picsum.photos/103/103",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    id: 4,
    name: "Victor",
    image: "https://picsum.photos/101/101",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container mx-auto p-5">
      {/* Section Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <p className="text-sm text-primary">What our customers are saying</p>
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
        </p>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="flex flex-col items-center gap-4 shadow-lg py-8 px-6 rounded-xl bg-primary/10 relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20"
              />
              <p className="text-xs text-gray-500">{testimonial.text}</p>
              <h1 className="text-xl font-bold text-black/80">{testimonial.name}</h1>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
