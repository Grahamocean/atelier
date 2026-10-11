import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { projects, type ProjectCategory } from "../data/projects";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>(
    "All",
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-atelier-ivory text-atelier-charcoal">
      {/* Page introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-10 md:pb-20 md:pt-28 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-atelier-olive">
            Our Portfolio
          </p>

          <h1 className="font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            Spaces with
            <span className="block italic text-atelier-olive">
              purpose and presence.
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 border-t border-atelier-stone pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              A collection of architectural and interior concepts exploring
              material, light, proportion, and the way people experience a
              space.
            </p>

            <p className="shrink-0 text-xs uppercase tracking-[0.15em] text-gray-500">
              Selected work — 2023–2025
            </p>
          </div>
        </div>
      </section>

      {/* Project filters */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap gap-3 border-b border-atelier-stone pb-6">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`border px-5 py-2.5 text-xs transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "border-atelier-charcoal bg-atelier-charcoal text-atelier-ivory"
                    : "border-atelier-stone text-gray-600 hover:border-atelier-charcoal hover:text-atelier-charcoal"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between py-6">
          <p className="text-xs text-gray-500">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>

          <p className="hidden text-xs uppercase tracking-[0.15em] text-gray-500 sm:block">
            Architecture / Interiors
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 md:pb-28 lg:px-16">
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:gap-y-16">
          {filteredProjects.map((project, index) => (
            <article key={project.slug} className="group">
              <Link
                to={`/projects/${project.slug}`}
                className="block"
                aria-label={`View ${project.title} project`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-atelier-stone">
                  <img
                    src={project.image}
                    alt={`${project.title} architectural concept`}
                    loading={index > 1 ? "lazy" : "eager"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                  <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-atelier-ivory text-atelier-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-sm"
                    />
                  </span>
                </div>
              </Link>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[10px] font-semibold cursor-pointer uppercase tracking-[0.2em] text-atelier-olive">
                    {project.category}
                  </p>

                  <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="transition-colors hover:text-atelier-olive"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="mt-2 text-xs text-gray-500">
                    {project.location}
                  </p>
                </div>

                <span className="pt-1 text-xs text-gray-500">
                  {project.year}
                </span>
              </div>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-[#EAE8E0]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-end md:justify-between md:py-20 lg:px-16">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-atelier-olive">
              Have something in mind?
            </p>

            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Every good space
              <span className="italic"> starts with a conversation.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-4 border border-atelier-charcoal px-6 py-4 text-sm transition-colors hover:bg-atelier-charcoal hover:text-atelier-ivory"
          >
            Discuss a project
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
