"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { formatDuration } from "@/lib/duration";

type Job = {
  title: {
    en: string;
    es: string;
  };
  place: string;
  description: {
    en: string;
    es: string;
  };
  durationMonths: number;
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
  const jobs: Job[] = [
    {
      title: {
        en: "Developer",
        es: "Programador",
      },
      place: "Hecort Manufactura",
      description: {
        en: "Developed an internal project tracking tool that let the team manage tasks, log issues, and monitor time spent on each project. I also built an IoT monitoring system for industrial machines, using smart sensors with Bluetooth connectivity to detect anomalies in real time, helping the team log incidents early and prevent equipment failures.",
        es: "Desarrollé una herramienta interna de seguimiento de proyectos que permitía al equipo administrar tareas, registrar incidencias y monitorear el tiempo invertido en cada proyecto. También construí un sistema IoT de monitoreo para maquinaria industrial, con sensores inteligentes y conectividad Bluetooth para detectar anomalías en tiempo real, ayudando al equipo a registrar incidencias a tiempo y prevenir fallos en el equipo.",
      },
      durationMonths: 19,
    },
    {
      title: {
        en: "Developer",
        es: "Programador",
      },
      place: "MegaPCs",
      description: {
        en: "Developed a multiplatform system for managing computer equipment, with features for adding images, printing receipts, and supporting multiple employees.",
        es: "Desarrollé un sistema multiplataforma para gestionar equipos de cómputo, con funcionalidades para agregar imágenes, imprimir recibos y soportar múltiples empleados.",
      },
      durationMonths: 6,
    },
    {
      title: {
        en: "Assistant",
        es: "Auxiliar",
      },
      place: "Jachi",
      description: {
        en: "Performed hardware and software maintenance, installed operating systems and Office, and cleaned printers.",
        es: "Realicé mantenimiento y limpieza de hardware y software, instalación de sistemas operativos y Office, y limpieza de impresoras.",
      },
      durationMonths: 12,
    },
  ];
  return (
    <section className="grid relative gap-4">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center rounded-full bg-gold/15 text-gold p-2">
          <Briefcase className="w-5 h-5" />
        </span>
        <h2 className="text-fs-500 font-bold">{title}</h2>
      </div>
      <div className="grid gap-6">
        {jobs.map((job, i) => (
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
                <CardTitle>{job.title[locale as "en" | "es"]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-gold fs-300">{job.place}</p>
                <p className="fs-300">
                  {job.description[locale as "en" | "es"]}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <time className="inline-flex w-fit items-center rounded-full bg-gold/10 text-gold text-fs-100 font-semibold px-3 py-1">
                  {formatDuration(job.durationMonths, locale as "en" | "es")}
                </time>
              </CardFooter>
            </Card>
            <div className="flex flex-col items-center shrink-0 w-8">
              <span className="grid place-items-center rounded-full bg-gold/15 text-gold p-1.5 shrink-0">
                <Briefcase className="w-5 h-5" />
              </span>
              {i !== jobs.length - 1 && (
                <span className="w-0.5 flex-1 bg-gold/30 mt-2 rounded-full" />
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
