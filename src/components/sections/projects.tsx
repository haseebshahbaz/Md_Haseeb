'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, LinkIcon, Code, Layout, Database, Server, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

type Project = {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink: string
  imageUrl: string
  category: string
  details: string[]
}

const projects: Project[] = [
  {
    title: "Internee.pk Website Redesign",
    description: "Redesigned the front end of the Internee.pk website to enhance user experience as part of my second task at Internee.pk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/haseebshahbaz/Internee.pk",
    liveLink: "https://haseebshahbaz.github.io/Internee.pk/",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Frontend",
    details: [
      "Implemented responsive design principles for optimal viewing across devices",
      "Improved navigation structure for better user flow",
      "Incorporated modern design trends to enhance visual appeal"
    ]
  },
  {
    title: "Toolscape",
    description: "A comprehensive tool-based platform that offers various AI tools like image generation, icon generation, and more.",
    technologies: ["React", "Next.js", "CSS"],
    githubLink: "https://github.com/haseebshahbaz/Toolscape",
    liveLink: "https://toolscape.com",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Frontend",
    details: [
      "Integrated multiple AI APIs for diverse tool functionalities",
      "Implemented user authentication and profile management",
      "Designed an intuitive UI for easy navigation between tools"
    ]
  },
  {
    title: "Blogista",
    description: "A platform for creating and sharing blog posts, designed to offer a user-friendly experience. Developed using Next.js, Firebase, and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/haseebshahbaz/Blogista",
    liveLink: "https://blogista-blog-website.vercel.app/",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Full Stack",
    details: [
      "Implemented real-time data synchronization with Firebase",
      "Created a rich text editor for blog post creation",
      "Developed a commenting system for user engagement"
    ]
  }
]

const techIcons: Record<string, JSX.Element> = {
  HTML: <Code className="w-4 h-4" />,
  CSS: <Layout className="w-4 h-4" />,
  JavaScript: <Code className="w-4 h-4" />,
  React: <Code className="w-4 h-4" />,
  "Next.js": <Database className="w-4 h-4" />,
  Firebase: <Server className="w-4 h-4" />,
  "Tailwind CSS": <Layout className="w-4 h-4" />
}

export function Projects() {
  const [filter, setFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-8">Innovative Projects</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Explore my latest creations and technical achievements
          </p>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Frontend', 'Full Stack'].map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <h3 className="text-white text-xl font-bold p-4">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="flex items-center gap-1">
                          {techIcons[tech] || <Code className="w-4 h-4" />}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <LinkIcon className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                      className="w-full flex justify-between items-center"
                    >
                      {expandedProject === project.title ? 'Hide Details' : 'Show Details'}
                      {expandedProject === project.title ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </Button>
                    <AnimatePresence>
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                            {project.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                              >
                                {detail}
                              </motion.li>
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
  )
}

