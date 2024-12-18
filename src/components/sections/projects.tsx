"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MorentImg from "../../app/assets/Morent.png";
import ExclusiveImg from "../../app/assets/ExclusiveImg.png";
import InterneeImg from "../../app/assets/Internee.png";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  imageUrl: StaticImageData;
  category: string;
};

const projects: Project[] = [
  {
    id: "exclusive",
    title: "Exclusive",
    description:
      "Exclusive is a sleek and modern e-commerce platform crafted with precision to ensure a seamless shopping experience. Designed with pixel-perfect accuracy from Figma, it features a responsive layout, intuitive navigation, and optimized performance. This project demonstrates expertise in delivering a visually appealing and user-friendly interface that elevates the online shopping experience.",
    technologies: ["Next.js", "Tailwind CSS", "shadecn/ui"],
    githubLink: "https://github.com/haseebshahbaz/Exclusive",
    liveLink: "https://shopexclusive.vercel.app/",
    imageUrl: ExclusiveImg,
    category: "Frontend",
  },

  {
    id: "morent",
    title: "Morent",
    description:
      "Morent is a modern car rental platform that prioritizes exceptional UI/UX design, ensuring seamless user interactions and an intuitive experience. During the Morent UI/UX Hackathon, I replicated the provided Figma design pixel-perfect, earning recognition for its precision and accessibility. The platform delivers an enhanced car rental booking experience, built with a strong focus on both aesthetics and usability.",
    technologies: ["Next.js", "Tailwind CSS", "shadecn/ui"],
    githubLink: "https://github.com/haseebshahbaz/Morent_NextjsHackathonUI",
    liveLink: "https://morent-nextjs-hackathon-ui.vercel.app/",
    imageUrl: MorentImg,
    category: "Frontend",
  },
  {
    id: "internee-pk",
    title: "Internee.pk Website Redesign",
    description:
      "Redesigned the front end of the Internee.pk website to enhance user experience as part of my second task at Internee.pk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/haseebshahbaz/Internee.pk",
    liveLink: "https://haseebshahbaz.github.io/Internee.pk/",
    imageUrl: InterneeImg,
    category: "Frontend",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
          Innovative Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-card rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="relative p-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <h3 className="text-2xl font-bold mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
