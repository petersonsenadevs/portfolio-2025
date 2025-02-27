import type { Experience, ExperienceFromDB, Project, ProjectFromDB, Skill, SkillFromDB } from "./types";

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

export function transformProject(project: ProjectFromDB): Project {
  return {
    id: project.id,
    title: {
      en: project.title_en,
      es: project.title_es
    },
    description: {
      en: project.description_en,
      es: project.description_es
    },
    fullDescription: {
      en: project.full_description_en,
      es: project.full_description_es
    },
    image: project.image_url,
    category: project.category,
    tags: project.tags,
    features: project.project_features.map(feature => ({
      en: feature.feature_en,
      es: feature.feature_es
    })),
    demoUrl: project.demo_url,
    githubUrl: project.github_url
  };
}

export function transformSkill(skill: SkillFromDB): Skill {
  return {
    id: skill.id,
    name: skill.name,
    icon: skill.icon_url,
    category: skill.category,
    description: {
      en: skill.description_en,
      es: skill.description_es
    }
  };
}