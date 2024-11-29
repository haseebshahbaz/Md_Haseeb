'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import Profile from "../../app/assets/ProfileImg.jpg"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollAnimation>
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src={Profile}
                alt="Muhammad Haseeb"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                I'm a passionate Full Stack Developer based in Karachi, Pakistan, with a keen interest in creating 
                beautiful, functional, and user-friendly websites and applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
              <div>
                <h3 className="font-semibold mb-1">Name:</h3>
                <p className="text-muted-foreground">Muhammad Haseeb</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email:</h3>
                <p className="text-muted-foreground break-all">haseebshahbazpk786@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location:</h3>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Availability:</h3>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto gap-2" onClick={() => window.open('https://drive.google.com/file/d/1TOdluc4au2beWnA4XxH2NTJvyQj3c0_7/view', '_blank')}>
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                Download CV
              </Button>
              <div className="flex justify-center sm:justify-start gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="https://github.com/haseebshahbaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/mdhaseeb07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href="mailto:haseebshahbazpk786@gmail.com"
                    aria-label="Email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
