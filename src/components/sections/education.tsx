'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    title: 'Higher Secondary School Certificate (HSSC)',
    institution: 'Board of Intermediate Education Karachi (BIEK)',
    year: '2023',
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: 'Secondary School Certificate (SSC)',
    institution: 'Board of Secondary Education Karachi (BSEK)',
    year: '2021',
    icon: <GraduationCap className="h-5 w-5" />,
  },
]

const certifications = [
  {
    title: 'Web and Mobile App Development',
    organization: 'Saylani Mass IT Training Program (SMIT)',
    details: 'Completed Front-end Development, currently learning Back-end',
    year: '2023 - Present',
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: 'Certified Cloud Applied Generative AI Engineer (GenEng)',
    organization: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse (GIAIC)',
    details: 'In progress',
    year: '2023 - Present',
    icon: <Award className="h-5 w-5" />,
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 bg-primary/5">
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
              Education & Certifications
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              My academic journey and professional certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Education</h3>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Certifications</h3>
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.organization}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.details}</p>
                      <p className="text-sm text-muted-foreground mt-2">{item.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

