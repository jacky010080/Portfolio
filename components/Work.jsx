'use client';
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  { 
    image: "/work/AlphaTeam.png",
    category: "next js",
    name: "Alpha Team",
    description: "Develop internationalization and automatic email sending features for the website.",
    link: "https://www.alphateam.tw/",
  },
  { 
    image: "/work/DaoDin.png",
    category: "next js",
    name: "DaoDin",
    description: "A platform for organizing group activities and making friends.",
    link: "/",
    github: "https://github.com/jacky010080/DaoDin",
  },
  { 
    image: "/work/CanChu.png",
    category: "next js",
    name: "CanChu",
    description: "A social media website for people to communicate.",
    link: "/",
    github: "https://github.com/jacky010080/CanChu",
  },
  { 
    image: "/work/WhatToPlay.png",
    category: "vue js",
    name: "What To Play",
    description: "An e-commerce website for toys.",
    link: "https://jacky010080.github.io/what_to_play/",
    github: "https://github.com/jacky010080/what_to_play",
  },
];

export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Here are some of my projects.</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper 
            className="h-[480px]" 
            slidesPerView={1} 
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}