'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink: string
  imageUrl: string
  category: string
}

const projects: Project[] = [
  {
    id: "internee-pk",
    title: "Internee.pk Website Redesign",
    description: "Redesigned the front end of the Internee.pk website to enhance user experience as part of my second task at Internee.pk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/haseebshahbaz/Internee.pk",
    liveLink: "https://haseebshahbaz.github.io/Internee.pk/",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Frontend"
  },
  {
    id: "toolscape",
    title: "Toolscape",
    description: "A comprehensive tool-based platform that offers various AI tools like image generation, icon generation, and more.",
    technologies: ["React", "Next.js", "CSS"],
    githubLink: "https://github.com/haseebshahbaz/Toolscape",
    liveLink: "https://toolscape.com",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Frontend"
  },
  {
    id: "blogista",
    title: "Blogista",
    description: "A platform for creating and sharing blog posts, designed to offer a user-friendly experience. Developed using Next.js, Firebase, and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/haseebshahbaz/Blogista",
    liveLink: "https://blogista-blog-website.vercel.app/",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Full Stack"
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
          Innovative Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {projects.map((project) => (
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all duration-300 ${selectedProject?.id === project.id ? 'border-primary shadow-lg' : 'hover:border-primary/50 hover:shadow-md'}`}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                  <ChevronRight className={`h-6 w-6 transition-transform duration-300 ${selectedProject?.id === project.id ? 'rotate-90' : ''}`} />
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                    <ScrollArea className="h-32 mb-4">
                      <p className="text-muted-foreground">{selectedProject.description}</p>
                    </ScrollArea>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button asChild>
                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

