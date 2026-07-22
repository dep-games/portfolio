"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { SchoolIcon } from "lucide-react";

type Education = {
  title: {
    en: string;
    es: string;
  };
  place: string;
  description: {
    en: string;
    es: string;
  };
};
const variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
    },
  }),
  hidden: (i: number) => ({
    opacity: 0,
    x: -10,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  }),
};

export default function Education({
  title,
  locale,
}: Record<"title" | "locale", string>) {
  const educations: Education[] = [
    {
      title: {
        en: "Bachelor's Degree in Computer Systems Engineering",
        es: "Ingeniería en Sistemas Computacionales",
      },
      place: "Universidad Politécnica de Aguascalientes",
      description: {
        en: "A program covering the full software development lifecycle: structured and object-oriented programming, web and mobile applications, databases, computer networks, artificial intelligence, data science, and information security, reinforced by an integrative project each term.",
        es: "Un programa que abarcó todo el ciclo de desarrollo de software: programación estructurada y orientada a objetos, aplicaciones web y móviles, bases de datos, redes de cómputo, inteligencia artificial, ciencia de datos y seguridad informática, reforzado con un proyecto integrador en cada cuatrimestre.",
      },
    },
    {
      title: {
        en: "Technical Degree in Programming",
        es: "Técnico en Programación",
      },
      place: "CECyTEJ 10",
      description: {
        en: "High school program with a technical specialization in programming, including courses in programming languages, web development, database management, and computer maintenance.",
        es: "Programa de preparatoria con especialización técnica en programación, que incluyó cursos de lenguajes de programación, desarrollo web, gestión de bases de datos y mantenimiento de computadoras.",
      },
    },
  ];

  return (
    <section className="grid relative gap-4">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center rounded-full bg-gold/15 text-gold p-2">
          <SchoolIcon className="w-5 h-5" />
        </span>
        <h2 className="text-fs-500 font-bold">{title}</h2>
      </div>
      <div className="grid gap-6">
        {educations.map((education, i) => (
          <motion.article
            aria-description="styling element"
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.25 }}
            key={i}
            className="flex items-stretch gap-4"
          >
            <Card className="flex-1 backdrop-blur-xs bg-opacity-90 dark:bg-opacity-90 flex flex-col border-t-2 border-t-gold/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-gold/70">
              <CardHeader>
                <CardTitle>{education.title[locale as "en" | "es"]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-gold fs-300">{education.place}</p>
                <p className="fs-300">
                  {education.description[locale as "en" | "es"]}
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-col items-center shrink-0 w-8">
              <span className="grid place-items-center rounded-full bg-gold/15 text-gold p-1.5 shrink-0">
                <SchoolIcon className="w-5 h-5" />
              </span>
              {i !== educations.length - 1 && (
                <span className="w-0.5 flex-1 bg-gold/30 mt-2 rounded-full" />
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
