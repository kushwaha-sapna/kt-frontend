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
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        Our Projects
      </h2>

      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          slidesPerView={2}   // 👉 2 images in one row
          spaceBetween={15}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              
              <div className="text-center">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-[150px] object-cover rounded-lg"
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