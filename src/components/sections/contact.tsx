'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import emailjs from 'emailjs-com'
import { Loader2 } from 'lucide-react'

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!form.current) return

    emailjs
      .sendForm(
        'service_wyylu9l',
        'template_2fm39oe',
        form.current,
        '8r_Q4k5iOQ0vc11x9'
      )
      .then(
        (result) => {
          console.log(result.text)
          setSubmitMessage('Message sent successfully!')
          form.current?.reset()
        },
        (error) => {
          console.log(error.text)
          setSubmitMessage('Failed to send the message. Please try again.')
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const contactInfo = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />,
      title: "Email",
      value: "haseebshahbazpk786@gmail.com",
      href: "mailto:haseebshahbazpk786@gmail.com"
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />,
      title: "Phone",
      value: "+92 302 2951029",
      href: "tel:+923022951029"
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />,
      title: "Location",
      value: "Karachi, KHI, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan"
    }
  ]

  const socialLinks = [
    {
      icon: <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />,
      href: "https://github.com/haseebshahbaz",
      label: "GitHub"
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/mdhaseeb07/",
      label: "LinkedIn"
    },
    {
      icon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />,
      href: "https://www.instagram.com/ch.haseebshahbaz/",
      label: "Instagram"
    },
    {
      icon: <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />,
      href: "https://www.facebook.com/profile.php?id=100013907506597",
      label: "Facebook"
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Get in Touch</h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollAnimation>
            <Card className="border-primary/10 border-2">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="from_name"
                      id="name"
                      required
                      placeholder="Muhammad Shahbaz"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      name="from_email"
                      id="email"
                      required
                      placeholder="muhammadshahbaz@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  {submitMessage && (
                    <p className={`text-center ${
                      submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {submitMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="border-primary/10 border-2">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="p-2 bg-primary/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
