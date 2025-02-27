import { useState, useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { currentLang } from "../../i18n/store";
import LanguageSync from "../react/LanguageSync";
import { translations } from "../../i18n/translations";
import type {Project} from '../../lib/types';

const categories = [
  { value: "all", label: { en: "All", es: "Todos" } },
  { value: "web", label: { en: "Web", es: "Web" } },
  { value: "backend", label: { en: "Backend", es: "Backend" } },
  { value: "mobile", label: { en: "Mobile", es: "Móvil" } },
];

const Projects = () => {


  const lang = useStore(currentLang);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMounted, setIsMounted] = useState(false);

  // Reference to the projects grid container
  const projectsGridRef = useRef<HTMLDivElement>(null);
  // State to track arrow states
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);
  const scrollAmount = 350 + 24; // Card width + gap

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Fetch projects from the API
    const loadProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
        // Delay the update of arrow states
        setTimeout(() => {
          updateArrowStates();
        }, 100);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    loadProjects();
  }, []);

  const updateArrowStates = () => {
    if (projectsGridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = projectsGridRef.current;
      setLeftDisabled(scrollLeft <= 0);
      setRightDisabled(scrollLeft >= scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const grid = projectsGridRef.current;
    if (grid) {
      grid.addEventListener("scroll", updateArrowStates);
      updateArrowStates();
    }
    return () => {
      if (grid) {
        grid.removeEventListener("scroll", updateArrowStates);
      }
    };
  }, [projectsGridRef]);

  const handleLeftClick = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleRightClick = () => {
    if (projectsGridRef.current) {
      projectsGridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

  if (!isMounted) return null;

  return (
    <section id="projects" className="py-20">
      <LanguageSync />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 min-h-[36px]">
            {translations.projects.title[lang]}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[28px]">
            {translations.projects.subtitle[lang]}
          </p>

          {/* Mobile select */}
          <div className="md:hidden mb-6">
            <select
              className="category-select w-full px-4 py-2 rounded-lg bg-[color:var(--color-background-alt)] dark:bg-[color:var(--color-background)] border-2 "
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

          {/* Buttons */}
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
          {/* Left arrow */}
          <button
            className="scroll-arrow left-arrow absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
            onClick={handleLeftClick}
            disabled={leftDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            className="scroll-arrow right-arrow absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30"
            onClick={handleRightClick}
            disabled={rightDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            id="projects-grid"
            ref={projectsGridRef}
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
