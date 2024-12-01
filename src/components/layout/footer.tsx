'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-md text-muted-foreground">
              &copy; {currentYear} Muhammad Haseeb. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {[ 
              { icon: faGithub, href: "https://github.com/haseebshahbaz", label: "GitHub" },
              { icon: faLinkedin, href: "https://www.linkedin.com/in/mdhaseeb07/", label: "LinkedIn" },
              { icon: faInstagram, href: "https://www.instagram.com/ch.haseebshahbaz/", label: "Instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <FontAwesomeIcon icon={social.icon} className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
