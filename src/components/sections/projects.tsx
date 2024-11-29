"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faCode,
  faDesktop,
  faDatabase,
  faServer,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import InterneeImg from "../../app/assets/Internee.png";
import ToolscapeImg from "../../app/assets/Toolscape.png";
import BlogistaImg from "../../app/assets/Blogista.png";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  imageUrl: any;
  category: string;
  details: string[];
};

const projects: Project[] = [
  {
    title: "Internee.pk Website Redesign",
    description:
      "Redesigned the front end of the Internee.pk website to enhance user experience as part of my second task at Internee.pk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/haseebshahbaz/Internee.pk",
    liveLink: "https://haseebshahbaz.github.io/Internee.pk/",
    imageUrl: InterneeImg,
    category: "Frontend",
    details: [
      "Implemented responsive design principles for optimal viewing across devices",
      "Improved navigation structure for better user flow",
      "Incorporated modern design trends to enhance visual appeal",
    ],
  },
  {
    title: "Toolscape",
    description:
      "A comprehensive tool-based platform that offers various AI tools like image generation, icon generation, and more.",
    technologies: ["React", "Next.js", "CSS"],
    githubLink: "https://github.com/haseebshahbaz/Toolscape",
    liveLink: "https://toolscape.com",
    imageUrl: ToolscapeImg,
    category: "Frontend",
    details: [
      "Integrated multiple AI APIs for diverse tool functionalities",
      "Implemented user authentication and profile management",
      "Designed an intuitive UI for easy navigation between tools",
    ],
  },
  {
    title: "Blogista",
    description:
      "A platform for creating and sharing blog posts, designed to offer a user-friendly experience. Developed using Next.js, Firebase, and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/haseebshahbaz/Blogista",
    liveLink: "https://blogista-blog-website.vercel.app/",
    imageUrl: BlogistaImg,
    category: "Full Stack",
    details: [
      "Implemented real-time data synchronization with Firebase",
      "Created a rich text editor for blog post creation",
      "Developed a commenting system for user engagement",
    ],
  },
];

const techIcons: Record<string, JSX.Element> = {
  HTML: <FontAwesomeIcon icon={faHtml5} className="w-4 h-4" />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} className="w-4 h-4" />,
  JavaScript: <FontAwesomeIcon icon={faJs} className="w-4 h-4" />,
  React: <FontAwesomeIcon icon={faReact} className="w-4 h-4" />,
  "Next.js": <FontAwesomeIcon icon={faDatabase} className="w-4 h-4" />,
  Firebase: <FontAwesomeIcon icon={faDatabase} className="w-4 h-4" />,
  "Tailwind CSS": <FontAwesomeIcon icon={faDesktop} className="w-4 h-4" />,
};

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
            Innovative Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8">
            Explore my latest creations and technical achievements
          </p>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {["All", "Full Stack", "Frontend"].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        <AnimatePresence mode="wait">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <h3 className="text-white text-lg md:text-xl font-bold p-4">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="flex items-center gap-1 text-xs md:text-sm"
                        >
                          {techIcons[tech] || (
                            <FontAwesomeIcon
                              icon={faCode}
                              className="w-3 h-3 md:w-4 md:h-4"
                            />
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="mr-2 h-3 w-3 md:h-4 md:w-4"
                          />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faLink}
                            className="mr-2 h-3 w-3 md:h-4 md:w-4"
                          />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.title
                            ? null
                            : project.title
                        )
                      }
                      className="w-full flex justify-between items-center text-xs md:text-sm"
                    >
                      {expandedProject === project.title
                        ? "Hide Details"
                        : "Show Details"}
                      {expandedProject === project.title ? (
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="ml-2 h-3 w-3 md:h-4 md:w-4"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-2 h-3 w-3 md:h-4 md:w-4"
                        />
                      )}
                    </Button>
                    <AnimatePresence>
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <ul className="list-disc pl-4 text-xs md:text-sm text-muted-foreground">
                            {project.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
