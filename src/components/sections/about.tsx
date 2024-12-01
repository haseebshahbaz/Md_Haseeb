'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Mail, MapPin, Calendar } from 'lucide-react'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import AboutImg from "../../app/assets/ProfileImg.jpg"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <ScrollAnimation className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 aspect-square max-w-md w-full mx-auto"
              >
                <Image
                  src={AboutImg}
                  alt="Muhammad Haseeb"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </ScrollAnimation>
          
          {/* Content Section */}
          <ScrollAnimation className="w-full lg:w-1/2 space-y-6">
            {/* About Me Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                I'm a passionate Full Stack Developer based in Karachi, Pakistan, with a keen interest in creating 
                beautiful, functional, and user-friendly websites and applications.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">haseebshahbazpk786@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open('https://drive.google.com/file/d/1TOdluc4au2beWnA4XxH2NTJvyQj3c0_7/view', '_blank')}>
                <span className="relative z-10">Download CV</span>
                <Download className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100"></div>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 transition-colors duration-300" asChild>
                <a href="https://github.com/haseebshahbaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub}
                  style={{
                      fontSize: "1.4rem",
                      width: "1.4rem",
                      height: "1.4rem",
                    }} />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 transition-colors duration-300" asChild>
                <a href="https://www.linkedin.com/in/mdhaseeb07/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin}                   
                  style={{
                      fontSize: "1.4rem",
                      width: "1.4rem",
                      height: "1.4rem",
                    }} />
                </a>
              </Button>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-card p-6 rounded-xl shadow-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-4">Skills Highlight</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
