import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, type ProjectCategory } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All",
  );

  const projectsGridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".project-card",
        projectsGridRef.current,
      );

      if (!cards.length) return;

      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 32,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    {
      scope: projectsGridRef,
      dependencies: [activeCategory],
      revertOnUpdate: true,
    },
  );

  return (
    <div className="bg-atelier-ivory">
      {/* Page heading */}
      <section className="px-6 pb-14 pt-32 sm:px-10 lg:px-16 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-atelier-olive">
            Our portfolio
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h1 className="max-w-3xl font-display text-5xl leading-[1.08] tracking-tight text-atelier-charcoal sm:text-6xl lg:text-7xl">
              Spaces designed
              <br />
              to <span className="italic">feel different.</span>
            </h1>

            <p className="max-w-sm text-sm leading-7 text-atelier-charcoal/65">
              A collection of considered architectural and interior concepts
              shaped by light, material, proportion, and the way people live.
            </p>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border-y border-atelier-charcoal/15 py-5">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-5 py-2.5 text-xs transition-colors duration-300 ${
                  activeCategory === category
                    ? "border-atelier-charcoal bg-atelier-charcoal text-white"
                    : "border-atelier-charcoal/20 text-atelier-charcoal hover:border-atelier-charcoal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div
            ref={projectsGridRef}
            className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:gap-y-16"
          >
            {filteredProjects.map((project, index) => (
              <article
                key={project.slug}
                className={`project-card group ${
                  index % 2 === 1 ? "sm:mt-16" : ""
                }`}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="block"
                  aria-label={`View ${project.title} project`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-atelier-stone">
                    <img
                      src={project.image}
                      alt={`${project.title} architectural concept`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-atelier-ivory text-atelier-charcoal opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-sm"
                      />
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-atelier-olive">
                        {project.category} / {project.year}
                      </p>

                      <h2 className="font-display text-2xl text-atelier-charcoal sm:text-3xl">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-xs text-atelier-charcoal/60">
                        {project.location}
                      </p>
                    </div>

                    <span className="mt-2 text-atelier-charcoal/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-atelier-charcoal/65">
                    {project.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="py-20 text-center text-sm text-atelier-charcoal/60">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-24 pt-12 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl border-t border-atelier-charcoal/15 pt-12 lg:pt-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                Have a project in mind?
              </p>

              <h2 className="max-w-2xl font-display text-4xl leading-tight text-atelier-charcoal sm:text-5xl lg:text-6xl">
                Let&apos;s create something
                <span className="italic"> meaningful.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-4 border-b border-atelier-charcoal pb-3 text-sm text-atelier-charcoal transition-colors hover:text-atelier-olive"
            >
              Start a conversation
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
