



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