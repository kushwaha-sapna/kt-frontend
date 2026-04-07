




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.jpg";
import { FaStar } from "react-icons/fa";

function Hero() {
  const images = [slider1, slider2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black">
      
      {/* ✅ Fully Responsive Image Slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`
            absolute inset-0 w-full h-full 
            /* 'object-cover' ensures no white gaps */
            /* 'object-top' mobile par image ka oopar ka hissa dikhayega */
            /* 'md:object-center' desktop par image ko center rakhega */
            object-cover object-top md:object-center
            transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay - To make text readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl text-white">

            <p className="bg-white/90 text-[#c79b2c] px-4 py-2 rounded-full inline-flex items-center gap-2 font-bold text-xs md:text-sm uppercase tracking-wider">
              <FaStar className="text-xs" />
              Where trust meets global reach
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-6 mb-4 drop-shadow-md">
              Next-Gen Solutions for <br className="hidden md:block" />
              <span className="text-[#d4af37]">Modern Businesses</span>
            </h1>

            <p className="text-gray-200 mb-8 text-base md:text-lg drop-shadow">
              Fuel your growth with technology designed for your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us">
                <button className="bg-[#d4af37] text-black font-bold px-8 py-3 rounded-lg hover:scale-105 transition duration-300 shadow-lg w-full sm:w-auto">
                  Get Started →
                </button>
              </Link>

              <Link to="/about-us">
                <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold px-8 py-3 rounded-lg hover:bg-white/20 transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;