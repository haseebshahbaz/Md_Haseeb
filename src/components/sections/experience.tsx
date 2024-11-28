'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


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
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              My journey in the tech industry and the impact I've made
            </p>
          </div>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.company} | {exp.duration}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

