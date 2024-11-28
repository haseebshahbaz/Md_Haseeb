'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    window.open('/cv.pdf', '_blank')
  }

  const socialLinks = [
    {
      href: "https://github.com/haseebshahbaz",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/mdhaseeb07/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:haseebshahbazpk786@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email"
    }
  ]

  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Muhammad Haseeb
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button
              size="lg"
              className="group text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
              onClick={handleDownloadCV}
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="lg"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

