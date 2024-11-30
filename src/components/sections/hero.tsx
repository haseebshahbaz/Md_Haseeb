"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1TOdluc4au2beWnA4XxH2NTJvyQj3c0_7/view",
      "_blank"
    );
  };

  const socialLinks = [
    {
      href: "https://github.com/haseebshahbaz",
      icon: faGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/mdhaseeb07/",
      icon: faLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:haseebshahbazpk786@gmail.com",
      icon: faEnvelope,
      label: "Email",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-center [mask-image:radial-gradient(white,transparent_85%)] blur-3xl"></div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Animated title without gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary">
              Muhammad Haseeb
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/70 font-bold max-w-3xl mx-auto">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", // Type this text
                  1000, // Wait 2 seconds
                  "Web Specialist", // Replace with this text
                  1000, // Wait 2 seconds
                ]}
                wrapper="span"
                speed={10} // Typing speed in ms
                repeat={Infinity} // Loop animation
              />
            </p>
          </motion.div>

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl"
          >
            Crafting digital experiences that leave a lasting impression
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button
              size="lg"
              className="group text-lg sm:text-xl w-full sm:w-auto shadow-lg hover:scale-105 transition-transform duration-300 bg-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Work
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg sm:text-xl w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300 border-primary text-primary hover:bg-primary/10"
              onClick={handleDownloadCV}
            >
              Download CV
              <FontAwesomeIcon icon={faDownload} className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-6 mt-8"
          >
            {socialLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.2 }} // Increased scale on hover
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full hover:bg-primary/20 transition-colors duration-300"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="h-8 w-8" // Increased icon size to h-8 w-8
                    />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
