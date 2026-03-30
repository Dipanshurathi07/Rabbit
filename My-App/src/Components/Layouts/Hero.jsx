import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-white mb-5">Explore our vacation-ready outfits with fast worldwide shipping.</p>
          <button className="text-center text-black bg-white px-4 py-2 rounded-sm"><Link to="#">Shop Now</Link></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
