"use client";
import { Card, CardBody, Divider } from "@nextui-org/react";
import React from "react";
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  FolderGit2,
  HardHat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Fancybox from "@/components/FancyBox";

type IntlProps = Record<
  | "repoLinkText"
  | "liveLinkText"
  | "techStack"
  | "contributors"
  | "status"
  | "locale",
  string
>;

const statusIcons = {
  completed: { Icon: CheckCircle2, color: "text-success" },
  "in-progress": { Icon: HardHat, color: "text-warning" },
  planned: { Icon: Clock3, color: "text-danger" },
} as const;

const sectionCard =
  "backdrop-blur-xs bg-opacity-90 dark:bg-opacity-90 border-t-2 border-t-gold/40";

export default function ProjectCard({
  project,
  blurredImage,
  status,
  liveLinkText,
  repoLinkText,
  contributors,
  techStack,
  locale,
}: {
  project: Project;
  blurredImage: string;
} & IntlProps) {
  if (!project) notFound();
  const { Icon: StatusIcon, color } = statusIcons[project.status];

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="grid gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <FolderGit2 className="w-6 h-6 text-gold shrink-0" />
            <h1 className="text-fs-600 font-bold">
              {project.title[locale as "en" | "es"]}
            </h1>
          </div>
          <div
            className={`inline-flex items-center gap-1.5 text-fs-200 font-semibold sm:ml-auto ${color}`}
          >
            <StatusIcon className="w-4 h-4 shrink-0" />
            <span>{status}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-fs-100 font-semibold text-foreground/60 uppercase tracking-wide">
            {techStack}
          </span>
          {project.techStack.map((tech, index) => (
            <Link
              target="_blank"
              href={tech.url ?? "#"}
              key={index}
              className="text-fs-100 text-gold bg-gold/10 hover:bg-gold/20 transition-colors rounded-full px-3 py-1"
            >
              {tech.name}
            </Link>
          ))}
        </div>
      </div>

      <Divider className="bg-foreground/10" />

      <Card className={sectionCard}>
        <CardBody className="p-6 sm:p-8">
          <Fancybox
            options={{
              Carousel: {
                infinite: true,
              },
            }}
          >
            <>
              <Image
                data-fancybox-trigger="gallery"
                className="cursor-pointer mb-4 rounded-md"
                src={project.images[0].src}
                alt={project.images[0].alt}
                width={1920}
                height={1080}
                placeholder="blur"
                blurDataURL={blurredImage}
              />
              <div
                style={{
                  display: project.images.length > 1 ? "flex" : "none",
                }}
                className="gap-4 items-center grid grid-cols-2 sm-flex sm:flex-nowrap"
              >
                {project.images.map((image, index) => (
                  <a key={index} data-fancybox="gallery" href={image.src}>
                    <Image
                      className="rounded-md transition-opacity hover:opacity-80"
                      src={image.src}
                      alt={image.alt}
                      width={1920}
                      height={1080}
                    />
                  </a>
                ))}
              </div>
            </>
          </Fancybox>
        </CardBody>
      </Card>

      <Card className={sectionCard}>
        <CardBody className="p-6 sm:p-8 grid gap-4">
          {project.description[locale as "en" | "es"]
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index} className="text-fs-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
        </CardBody>
      </Card>

      {project.contributors ? (
        <Card className={sectionCard}>
          <CardBody className="p-6 sm:p-8">
            <h2 className="text-fs-200 font-semibold text-foreground/60 uppercase tracking-wide mb-3">
              {contributors}
            </h2>
            <div className="w-full flex flex-wrap gap-3 items-center">
              {project.contributors.map((contributor, index) => (
                <Link
                  key={index}
                  href={contributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fs-200 bg-foreground-foreground hover:bg-foreground-foreground/70 transition-colors rounded-full px-4 py-2"
                >
                  {contributor.name}
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {project.repoLink ? (
          <Link
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fs-300 z-50 inline-flex items-center gap-1.5 rounded-full border border-gold/30 text-gold px-4 py-2 hover:bg-gold/10 transition-colors"
          >
            {repoLinkText}
            <ExternalLink size={16} />
          </Link>
        ) : null}
        {project.demoLink ? (
          <Link
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fs-300 z-50 inline-flex items-center gap-1.5 rounded-full border border-gold/30 text-gold px-4 py-2 hover:bg-gold/10 transition-colors"
          >
            {liveLinkText} <ExternalLink size={16} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
