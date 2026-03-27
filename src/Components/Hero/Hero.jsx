import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";

function Hero() {
  const images = [slider1, slider2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] mt-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-heroZoom transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl text-white">

            <p className="bg-white text-[#c79b2c] px-4 py-2 rounded-full inline-block font-semibold text-sm">
              ⭐ Trusted by 120+ Clients Worldwide
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-4">
              Drive Business Growth with Expert Technology Solutions
            </h1>

            <p className="text-gray-200 mb-8 text-base md:text-lg">
              Unlock your business's full potential with cutting-edge technology
              solutions tailored to your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

             
               <Link to="/contact-us">
                 <button className="bg-[#d4af37] text-black px-6 py-3 rounded-lg hover:scale-105 transition duration-300">
               Get Started →
                  </button>
                    </Link> 

                   < Link to="/about-us">
                 <button className="bg-[#d4af37] text-black px-6 py-3 rounded-lg hover:scale-105 transition duration-300">
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