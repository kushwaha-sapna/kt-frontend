
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const projects = [
  {
    id: 1,
    desc: "E-Commerce Website",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
  },
  {
    id: 2,
    desc: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    desc: "Blog Platform",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 4,
    desc: "Landing Page",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

const Project = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Projects
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={15}

          // ✅ Responsive Breakpoints
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile
            },
            640: {
              slidesPerView: 2, // tablet
            },
            1024: {
              slidesPerView: 3, // desktop
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="text-center">
                <img
                  src={project.image}
                  alt={project.desc}
                  className="w-full h-[140px] md:h-[160px] object-cover rounded-lg"
                />
                <p className="text-sm mt-2 text-gray-700">
                  {project.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;














