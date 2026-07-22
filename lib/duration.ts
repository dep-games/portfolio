export function formatDuration(totalMonths: number, locale: "en" | "es"): string {
  const months = Math.max(0, totalMonths);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0 && remainingMonths === 0) {
    return locale === "es" ? "Menos de 1 mes" : "Less than 1 month";
  }

  const parts: string[] = [];
  if (years > 0) {
    parts.push(
      locale === "es"
        ? `${years} ${years === 1 ? "año" : "años"}`
        : `${years} ${years === 1 ? "year" : "years"}`
    );
  }
  if (remainingMonths > 0) {
    parts.push(
      locale === "es"
        ? `${remainingMonths} ${remainingMonths === 1 ? "mes" : "meses"}`
        : `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`
    );
  }

  return locale === "es" ? parts.join(" y ") : parts.join(" ");
}
