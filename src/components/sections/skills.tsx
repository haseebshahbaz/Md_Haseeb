'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Layout, Server, Database, GitGraphIcon as Git, Smartphone, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-8 w-8" />,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 85 },
    ]
  },
  {
    title: "Other Skills",
    icon: <Code className="h-8 w-8" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "RESTful APIs", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Responsive Design", level: 90 },
    ]
  }
]

export function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="py-2 bg-card rounded-lg shadow-lg overflow-hidden"
            >
              <Button
                variant="ghost"
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
              >
                <div className="flex items-center">
                  <div className=" bg-primary/10 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                {expandedCategory === category.title ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </Button>
              <AnimatePresence>
                {expandedCategory === category.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          className="bg-background rounded-lg p-4 shadow-inner"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

