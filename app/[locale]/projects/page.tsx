import React from "react";
import projectsData from "@/db/static/projects";
import ProjectCards from "@/Pages/Projects/Cards/ProjectsCard";
import { getBase64 } from "@/lib/getBase64ImageUrl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: locale,
    namespace: ["Projects.metadata"],
  });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      locale: locale,
      url: locale === "en" ? "/en/projects" : "/es/proyectos",
      title: `${t("title")} | Daniel Pedroza`,
      description: t("description"),
    },
    alternates: {
      canonical: "/projects",
      languages: {
        en: "/projects",
        es: "/es/proyectos",
      },
    },
  };
}
const images = projectsData.map((project) => project.images[0].src);
export default async function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Projects");
  const blurredImage = await Promise.all(
    images.map((image) => getBase64(image))
  );
  const projectPreviewData: ProjectPreview[] = projectsData.map((project) => ({
    title: project.title[locale as "en" | "es"],
    src: project.images[0].src,
    alt: project.images[0].alt,
    endpoint: project.endpoint,
    description: project.description[locale as "en" | "es"],
    techStack: project.techStack,
    status: project.status,
  }));

  return (
    <section className="mb-auto">
      <h1 className="text-fs-600 text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#C9A84A] to-secondary bg-300% animate-flow-gradient my-4">
        {t("title")}
      </h1>
      <div
        aria-hidden
        className="z-10 px-6 sm:px-12 lg:px-24 my-4 sm:my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectPreviewData.map((project, index) => (
          <ProjectCards
            projectPreview={project}
            blurredImage={blurredImage[index]}
            key={index}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
