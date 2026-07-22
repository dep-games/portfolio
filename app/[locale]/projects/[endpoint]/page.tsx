import React from "react";
import projectsData from "@/db/static/projects";
import ProjectCard from "@/Pages/Projects/Cards/ProjectCard";
import { Metadata } from "next";
import { getBase64 } from "@/lib/getBase64ImageUrl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
export function generateMetadata({
  params: { locale, endpoint },
}: {
  params: { endpoint: string; locale: string };
}): Metadata {
  const project = projectsData.filter(
    (project) => project.endpoint === endpoint
  )[0];
  return {
    title: project?.title[locale as "en" | "es"],
    description: project?.description[locale as "en" | "es"],
    openGraph: {
      type: "website",
      locale: locale,
      url: `/projects/${project?.endpoint}`,
      title: `${project?.title[locale as "en" | "es"]} | Daniel Pedroza`,
      description: project?.description[locale as "en" | "es"],
      images: [
        {
          url: project?.images[0].src,
          alt: project?.images[0].alt,
        },
      ],
    },
    alternates: {
      canonical: `/projects/${project?.endpoint}`,
      languages: {
        en: `/projects/${project?.endpoint}`,
        es: `/es/proyectos/${project?.endpoint}`,
      },
    },
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ endpoint: project.endpoint }));
}

export default async function Project({
  params,
}: {
  params: { endpoint: string; locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const endpoint = params.endpoint;
  const project = projectsData.filter(
    (project) => project.endpoint === endpoint
  )[0];

  if (!project) notFound();
  const t = await getTranslations("Project");
  const blurredImage = await getBase64(project.images[0].src);
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 my-4 sm:my-12 z-20 mb-auto relative">
      <ProjectCard
        project={project}
        blurredImage={blurredImage}
        repoLinkText={
          endpoint === "Turkish-Dictionary"
            ? t("repo-link.contribute")
            : t("repo-link.visit")
        }
        liveLinkText={t("live-link")}
        contributors={t("contributors")}
        techStack={t("tech-stack")}
        status={t(`status.${project.status}`)}
        locale={params.locale}
      />
    </section>
  );
}
