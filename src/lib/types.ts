

export interface Project {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  fullDescription: {
    en: string;
    es: string;
  };
  image: string;
  category: string;
  tags: string[];
  features: {
    en: string;
    es: string;
  }[];
  demoUrl: string | null;
  githubUrl: string | null;
}

export interface ProjectFromDB {
  id: string;
  title_en: string;
  title_es: string;
  description_en: string;
  description_es: string;
  full_description_en: string;
  full_description_es: string;
  image_url: string;
  category: string;
  tags: string[];
  demo_url: string | null;
  github_url: string | null;
  project_features: {
    feature_en: string;
    feature_es: string;
  }[];
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: {
    en: string;
    es: string;
  };
  powerLevel: number;
}



export interface SkillFromDB {
  id: string;
  name: string;
  icon_url: string;
  category: string;
  description_en: string;
  description_es: string;
  power_level: number;
}

export interface Experience {
  id: string;
  company: {
    en: string;
    es: string;
  };
  position: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  startDate: string;
  endDate: string | null;
  technologies: string[];
  companyLogo: string;
}

export interface ExperienceFromDB {
  id: string;
  company_en: string;
  company_es: string;
  position_en: string;
  position_es: string;
  description_en: string;
  description_es: string;
  start_date: string;
  end_date: string | null;
  technologies: string[];
  company_logo: string;
}