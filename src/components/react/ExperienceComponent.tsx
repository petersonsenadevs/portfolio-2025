import React, { useState, useEffect } from "react";
import type { Experience } from "../../lib/types";
import { useStore } from "@nanostores/react";
import { currentLang } from "../../i18n/store"; // Importa el store del idioma
import LanguageSync from "../react/LanguageSync"; // Importa el componente de sincronización

const formatDate = (dateString: string, lang: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  return date.toLocaleDateString(lang === "en" ? "en-US" : "es-ES", options);
};

const ExperienceComponent: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const lang = useStore(currentLang); // Obtener el idioma actual desde el store
  const [isMounted, setIsMounted] = useState(false); // Estado para manejar la hidratación

  // Marcar el componente como montado
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch experiences
  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const response = await fetch(`/api/experiences?timestamp=${Date.now()}`);
        if (!response.ok) {
          throw new Error("Failed to load experiences");
        }
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error loading experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  // Si el componente no está montado, no renderices nada (o un loader)
  if (!isMounted) return null;

  return (
    <section id="experience" className="py-20">
      <LanguageSync /> {/* Sincroniza el idioma después de la hidratación */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "en" ? "Professional Experience" : "Experiencia Profesional"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {lang === "en"
              ? "My journey in software development"
              : "Mi trayectoria en desarrollo de software"}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[color:var(--color-primary-light)] dark:bg-[color:var(--color-primary-dark)]"></div>

          <div className="relative space-y-16">
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-[color:var(--color-primary)] border-t-transparent"></div>
              </div>
            ) : (
              experiences.map((experience, index) => {
                const timelineClass = index % 2 === 0 ? "left-timeline" : "right-timeline";
                const cardWrapperClass =
                  index % 2 === 0
                    ? "mr-auto pr-8 md:mr-[50%] md:pr-12"
                    : "ml-auto pl-8 md:ml-[50%] md:pl-12";

                return (
                  <div key={experience.id} className={`relative ${timelineClass}`}>
                    {/* Line dot */}
                    <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 rounded-full bg-[color:var(--color-primary)] dark:bg-[color:var(--color-primary)]"></div>
                    </div>

                    {/* Experience card */}
                    <div className={`relative ${cardWrapperClass} w-full md:w-[90%] lg:w-full max-w-md`}>
                      <div className="bg-[color:var(--color-background)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Company info */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <img
                              src={experience.companyLogo}
                              alt={experience.company[lang]}
                              className="w-12 h-12 object-contain bg-[color:var(--color-primary-light)] dark:bg-[color:var(--color-primary-dark)] rounded-lg p-1"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-xl font-bold truncate">
                              {experience.position[lang]}
                            </h3>
                            <p className="text-primary-light dark:text-primary-dark truncate">
                              {experience.company[lang]}
                            </p>
                          </div>
                        </div>

                        {/* Date */}
                        <p className="text-sm text-primary mb-4">
                          {formatDate(experience.startDate, lang)} -{" "}
                          {experience.endDate
                            ? formatDate(experience.endDate, lang)
                            : lang === "en"
                            ? "Present"
                            : "Presente"}
                        </p>

                        {/* Description */}
                        <p className="mb-4 line-clamp-4">
                          {experience.description[lang]}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 border border-[color:var(--color-primary)] dark:border-gray-600 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;