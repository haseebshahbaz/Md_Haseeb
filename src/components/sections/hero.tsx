'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Hero() {
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1TOdluc4au2beWnA4XxH2NTJvyQj3c0_7/view', '_blank')
  }

  const socialLinks = [
    {
      href: "https://github.com/haseebshahbaz",
      icon: faGithub,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/mdhaseeb07/",
      icon: faLinkedin,
      label: "LinkedIn"
    },
    {
      href: "mailto:haseebshahbazpk786@gmail.com",
      icon: faEnvelope,
      label: "Email"
    }
  ]

  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background px-4">
      {/* Background grid with animation */}
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] animate-slow-pulse" />

      {/* Main container */}
      <div className="container relative z-10 mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary tracking-wide">
              Muhammad Haseeb
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto">
              Full Stack Developer & <span className="text-primary font-semibold">UI/UX Enthusiast</span>
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
              Let’s collaborate on building something extraordinary!
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button
              size="lg"
              className="group text-base sm:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-transform"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg w-full sm:w-auto shadow-md hover:shadow-lg transition-transform"
              onClick={handleDownloadCV}
              aria-label="Download CV"
            >
              Download CV
              <FontAwesomeIcon icon={faDownload} className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4 sm:gap-6"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
