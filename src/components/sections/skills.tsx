'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faServer,
  faPaintBrush,
  faLaptopCode,
  faCode,
  faDatabase,
  faCogs,
} from '@fortawesome/free-solid-svg-icons'
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FontAwesomeIcon icon={faLaptopCode} className="h-6 w-6 md:h-8 md:w-8 text-current" />,
    skills: [
      { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 90 },
      { name: "CSS", icon: <FontAwesomeIcon icon={faCss3Alt} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 90 },
      { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 85 },
      { name: "React.js", icon: <FontAwesomeIcon icon={faReact} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 85 },
      { name: "Next.js", icon: <FontAwesomeIcon icon={faServer} className="h-5 w-5 text-current" />, level: "Intermediate", percentage: 80 },
      { name: "Tailwind CSS", icon: <FontAwesomeIcon icon={faPaintBrush} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 90 },
    ]
  },
  {
    title: "Backend Development",
    icon: <FontAwesomeIcon icon={faServer} className="h-6 w-6 md:h-8 md:w-8 text-current" />,
    skills: [
      { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} className="h-5 w-5 text-current-500" />, level: "Intermediate", percentage: 70 },
      { name: "MongoDB", icon: <FontAwesomeIcon icon={faDatabase} className="h-5 w-5 text-current-700" />, level: "Intermediate", percentage: 60 },
      { name: "Firebase", icon: <FontAwesomeIcon icon={faServer} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 85 },
    ]
  },
  {
    title: "Programming Languages",
    icon: <FontAwesomeIcon icon={faCode} className="h-6 w-6 md:h-8 md:w-8 text-current" />,
    skills: [
      { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 90 },
      { name: "TypeScript", icon: <FontAwesomeIcon icon={faCode} className="h-5 w-5 text-current" />, level: "Intermediate", percentage: 75 },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <FontAwesomeIcon icon={faCogs} className="h-6 w-6 md:h-8 md:w-8 text-current" />,
    skills: [
      { name: "Git & GitHub", icon: <FontAwesomeIcon icon={faGitAlt} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 85 },
      { name: "VS Code", icon: <FontAwesomeIcon icon={faCode} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 90 },
      { name: "REST APIs", icon: <FontAwesomeIcon icon={faServer} className="h-5 w-5 text-current" />, level: "Advanced", percentage: 85 },
      { name: "Responsive Design", icon: <FontAwesomeIcon icon={faLaptopCode} className="h-5 w-5 text-current-500" />, level: "Advanced", percentage: 90 },
    ]
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different areas of web development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation key={category.title}>
              <Card className="h-full hover:scale-105 hover:shadow-lg transition-transform relative">
                <div className="absolute inset-0 opacity-10 text-center flex items-center justify-center text-muted-foreground">
                  {category.icon}
                </div>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {skill.icon}
                            <span className="font-medium text-sm md:text-base">{skill.name}</span>
                          </div>
                          <span className="text-xs md:text-sm font-medium">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/80"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
