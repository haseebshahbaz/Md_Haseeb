"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faPaintBrush,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites using modern technologies.",
    icon: faCode,
  },
  {
    title: "Frontend Development",
    description: "Building intuitive user interfaces with React and Next.js.",
    icon: faDesktop,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and seamless user experiences.",
    icon: faPaintBrush,
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing website speed and efficiency for better user engagement.",
    icon: faRocket,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
            My Services
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="h-8 w-8 text-primary mb-4"
                  />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
