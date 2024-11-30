'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

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
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
              Education & Certifications
            </h2>
            <p className="text-base md:text-lg lg:text-xl mx-auto max-w-[700px] text-muted-foreground">
              My academic journey and professional certifications
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Education</h3>
            {education.map((item, index) => (
              <ScrollAnimation key={index}>
                <Card className="border-primary/10 border-2">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Certifications</h3>
            {certifications.map((item, index) => (
              <ScrollAnimation key={index}>
                <Card className="border-primary/10 border-2">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.year}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

