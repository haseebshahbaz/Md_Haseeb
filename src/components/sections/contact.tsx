"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_wyylu9l",
        "template_2fm39oe",
        form.current,
        "8r_Q4k5iOQ0vc11x9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus("idle"), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "haseebshahbazpk786@gmail.com",
      href: "mailto:haseebshahbazpk786@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+92 302 2951029",
      href: "tel:+923022951029",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Karachi, KHI, Pakistan",
      href: "https://maps.google.com/?q=Karachi,Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
          Have a project in mind? Let&apos;s collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-background"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full bg-background"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <AnimatePresence>
              {submitStatus !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 p-3 rounded-lg flex items-center ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message sent successfully!
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 mr-2" />
                      Failed to send message. Please try again.
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
