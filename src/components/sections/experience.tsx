'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const experiences = [
  {
    company: 'Internee.pk',
    role: 'Front-end Development Intern',
    duration: 'June 2023 - August 2023',
    achievements: [
      'Redesigned company website, improving user engagement by 30%',
      'Implemented responsive design principles',
      'Collaborated with cross-functional design teams'
    ]
  },
  {
    company: 'HI-SKY Tech',
    role: 'Front-end Development Intern',
    duration: 'September 2023 - November 2023',
    achievements: [
      'Developed modular and reusable React components',
      'Implemented advanced state management with Redux',
      'Participated in comprehensive code review processes'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Professional Experience</h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in the tech industry and the impact I've made
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={index}>
              <Card className="h-full border-primary/10 border-2">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg md:text-xl">{exp.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm md:text-base text-muted-foreground"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

