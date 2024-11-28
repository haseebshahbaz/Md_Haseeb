'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Braces } from 'lucide-react'
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    name: "HTML",
    icon: <Globe className="h-6 w-6" />,
    level: "Advanced",
    percentage: 90
  },
  {
    name: "CSS",
    icon: <Code className="h-6 w-6" />,
    level: "Advanced",
    percentage: 85
  },
  {
    name: "JavaScript",
    icon: <Braces className="h-6 w-6" />,
    level: "Advanced",
    percentage: 85
  },
  {
    name: "TypeScript",
    icon: <Code className="h-6 w-6" />,
    level: "Intermediate",
    percentage: 75
  },
  {
    name: "React",
    icon: <Code className="h-6 w-6" />,
    level: "Advanced",
    percentage: 85
  },
  {
    name: "Next.js",
    icon: <Code className="h-6 w-6" />,
    level: "Advanced",
    percentage: 80
  },
  {
    name: "Firebase",
    icon: <Database className="h-6 w-6" />,
    level: "Intermediate",
    percentage: 75
  },
  {
    name: "MongoDB",
    icon: <Database className="h-6 w-6" />,
    level: "Intermediate",
    percentage: 70
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollAnimation key={skill.name}>
              <Card className="h-full">
                <CardHeader className="space-y-0 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{skill.level}</span>
                      <span className="font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
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

