'use client';

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
    github: "/",
  },
  { 
    image: "/work/CanChu.png",
    category: "next js",
    name: "CanChu",
    description: "A social media website for people to communicat each other.",
    link: "/",
    github: "/",
  },
  { 
    image: "/work/WhatToPlay.png",
    category: "vue js",
    name: "What To Play",
    description: "An e-commerce website specializing in selling toys.",
    link: "https://jacky010080.github.io/what_to_play/",
    github: "https://github.com/jacky010080/what_to_play",
  },
  { 
    image: "/work/WhatToPlay.png",
    category: "react js",
    name: "Weather",
    description: "It is a weather forecast website",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];

export default function Projects() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter(project => category === "all projects" ? project : project.category === category);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full h-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger 
                  className="capitalize w-[162px] md:w-auto" 
                  key={index} 
                  value={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent  value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}