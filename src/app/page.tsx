import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Nav } from "@/components/layout/nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Muhammad Haseeb. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

