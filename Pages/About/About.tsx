import { AboutMeParagraph } from "./AboutMeParagraph";
import Education from "./Education";
import Job from "./Jobs";
{/*import AboutImage from "./AboutImage";*/}
import { useTranslations } from "next-intl";
export default function About({ locale }: { locale: string }) {
  const t = useTranslations("About");
  return (
    <section
      className="relative z-20 my-4 sm:my-16 mx-auto max-w-6xl p-6 backdrop-blur-xs grid gap-8 break-words hyphens-auto"
      style={{ wordBreak: "break-word" }}
    >
      {/*<AboutImage />*/}
      <AboutMeParagraph
        title={t("adventure.title")}
        firstParagraph={t("adventure.p1")}
        secondParagraph={t("adventure.p2")}
        thirdParagraph={t("adventure.p3")}
      />
      <Education locale={locale} title={t("education.title")} />
      <Job locale={locale} title={t("jobs.title")} />
    </section>
  );
}
