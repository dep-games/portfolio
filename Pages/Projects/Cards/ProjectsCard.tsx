import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { CheckCircle2, Clock3, FolderGit2, HardHat } from "lucide-react";

const statusIcons = {
  completed: { Icon: CheckCircle2, color: "text-success" },
  "in-progress": { Icon: HardHat, color: "text-warning" },
  planned: { Icon: Clock3, color: "text-danger" },
} as const;

export default async function ProjectCards({
  blurredImage,
  locale,
  projectPreview: project,
}: {
  projectPreview: ProjectPreview;
  blurredImage: string;
  locale: string;
}) {
  const t = await getTranslations("Project");
  const { Icon: StatusIcon, color } = statusIcons[project.status];

  return (
    <section className="h-full w-full">
      <Card
        isBlurred
        isFooterBlurred
        isPressable
        as={Link}
        href={`/projects/${project.endpoint}`}
        className="shadow-md backdrop-blur-xs relative z-20 h-full w-full transition-transform hover:scale-[1.03]"
      >
        <CardHeader className="flex-col items-start gap-2 py-3 px-4 shadow-small">
          <div className="w-full flex items-start gap-2">
            <FolderGit2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <h2 className="text-fs-300 font-bold leading-snug">{project.title}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className={`inline-flex items-center gap-1.5 text-fs-100 font-semibold shrink-0 ${color}`}>
              <StatusIcon className="w-4 h-4 shrink-0" />
              <span>{t(`status.${project.status}`)}</span>
            </div>
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-[11px] leading-none bg-foreground-foreground rounded-full px-2 py-1"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardBody className="w-full overflow-visible relative p-0 min-h-[180px] sm:min-h-[220px] 2xl:min-h-[260px]">
          <figure>
            <Image
              src={project.src}
              alt={project.alt}
              className="w-full object-cover"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              placeholder="blur"
              quality={90}
              blurDataURL={blurredImage}
              fill={true}
            />
          </figure>
        </CardBody>
        <CardFooter className="flex-col items-start py-3 px-4 shadow-small">
          <p className="text-fs-200 line-clamp-6">{project.description}</p>
        </CardFooter>
      </Card>
    </section>
  );
}
