import type { Experience, ExperienceFromDB } from "./types";

export function transformExperience(experience: ExperienceFromDB): Experience {
  return {
    id: experience.id,
    company: {
      en: experience.company_en,
      es: experience.company_es
    },
    position: {
      en: experience.position_en,
      es: experience.position_es
    },
    description: {
      en: experience.description_en,
      es: experience.description_es
    },
    startDate: experience.start_date,
    endDate: experience.end_date,
    technologies: experience.technologies,
    companyLogo: experience.company_logo
  };
}