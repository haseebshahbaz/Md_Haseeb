"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    name: "Frontend",
    icon: faLaptopCode,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 85 },
    ],
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "Backend",
    icon: faServer,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "MongoDB", level: 75 },
    ],
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "DevOps",
    icon: faTools,
    skills: [
      { name: "GitHub", level: 90 },
      { name: "Version Control", level: 90 },
      { name: "Responsive Web", level: 85 },
    ],
    color: "from-blue-400 to-blue-500",
  },
];

type Skill = {
  name: string;
  level: number;
};

const SkillCard = ({
  skill,
  color,
  index,
}: {
  skill: Skill;
  color: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`p-4 rounded-lg shadow-lg bg-gradient-to-br ${color} text-white transform transition-all duration-300 hover:scale-105 hover:-rotate-2 relative group cursor-pointer`}
  >
    <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
    {/* Tooltip */}
    <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
      Proficiency: {skill.level}%
    </span>
    {/* Progress Bar */}
    <div className="w-full bg-white bg-opacity-20 h-2 rounded-full mt-4">
      <div
        className="bg-white h-2 rounded-full"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </motion.div>
);

export function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5 relative"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
          Skills Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-6">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon
                  icon={category.icon}
                  className="text-primary"
                />{" "}
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    index={categoryIndex * 5 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
