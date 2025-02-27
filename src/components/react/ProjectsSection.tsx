import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { currentLang } from "../../i18n/store";
import LanguageSync from "../react/LanguageSync"; 
import {translations} from "../../i18n/translations";


const categories = [
  { value: "all", label: { en: "All", es: "Todos" } },
  { value: "web", label: { en: "Web", es: "Web" } },
  { value: "backend", label: { en: "Backend", es: "Backend" } },
  { value: "mobile", label: { en: "Mobile", es: "Móvil" } },
];



const Projects = () => {
  interface Project {
    id: number;
    category: string;
    image: string;
    title: { en: string; es: string };
    description: { en: string; es: string };
  }

  const lang = useStore(currentLang); // Get the current language
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMounted, setIsMounted] = useState(false); // State to handle hydration

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true when the component mounts
  }, []);

  useEffect(() => {
    // Load projects from the API
    const loadProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    loadProjects();
  }, []);

  const renderProjects = () => {
    const filteredProjects =
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return filteredProjects.map((project) => (
      <div
        key={project.id}
        className="project-card rounded-lg overflow-hidden shadow-md flex-shrink-0"
        style={{ width: "350px" }}
      >
        <a href={`/projects/${project.id}`} className="block">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {project.title[lang]} 
            </h3>
            <p className="mb-4">{project.description[lang]}</p>
          </div>
        </a>
      </div>
    ));
  };

  // Si el componente no está montado, no renderices nada (o un loader)
  if (!isMounted) return null;

  return (
    <section id="projects" className="py-20">
      <LanguageSync /> {/* Sincroniza el idioma después de la hidratación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 min-h-[36px]">
            {translations.projects.title[lang]}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[28px]">
            {translations.projects.subtitle[lang]}
          </p>

          <div className="md:hidden mb-6">
            <select
              className="category-select w-full px-4 py-2 rounded-lg border-2"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label[lang]}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`category-filter px-4 py-2 rounded-lg border-2 ${
                  activeCategory === category.value
                    ? "bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] text-white"
                    : ""
                } hover:bg-primary/80 transition-colors`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div
            id="projects-grid"
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ maxWidth: "100%" }}
          >
            <div
              id="projects-container"
              className="flex gap-6 pb-4"
              style={{ minWidth: "min-content" }}
            >
              {renderProjects()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;