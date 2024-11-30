'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faServer,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: faHtml5, level: 90 },
      { name: "CSS", icon: faCss3Alt, level: 90 },
      { name: "JavaScript", icon: faJs, level: 85 },
      { name: "React", icon: faReact, level: 85 },
      { name: "Next.js", icon: faServer, level: 80 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: faNodeJs, level: 60 },
      { name: "MongoDB", icon: faDatabase, level: 70 },
      { name: "Firebase", icon: faServer, level: 85 },
    ]
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Github", icon: faGithub, level: 85 },
      { name: "REST APIs", icon: faServer, level: 85 },
      { name: "TypeScript", icon: faJs, level: 75 },
      { name: "Responsive Design", icon: faCss3Alt, level: 90 },
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Skills & Expertise</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation key={categoryIndex}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={skill.icon} className="h-5 w-5 mr-2 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

