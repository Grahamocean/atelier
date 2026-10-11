import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projects.findIndex((item) => item.slug === slug);

  const project = projects[projectIndex];

  if (!project) {
    return (
      <section className="flex min-h-[65vh] flex-col items-center justify-center bg-atelier-ivory px-6 text-center text-atelier-charcoal">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atelier-olive">
          Project not found
        </p>

        <h1 className="mt-5 font-display text-4xl sm:text-5xl">
          This space doesn't exist.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
          The project may have moved, or the link may be incorrect.
        </p>

        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-3 border border-atelier-charcoal px-6 py-3 text-sm transition-colors hover:bg-atelier-charcoal hover:text-atelier-ivory"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to projects
        </Link>
      </section>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  const relatedProjects = projects
    .filter(
      (item) =>
        item.slug !== project.slug && item.category === project.category,
    )
    .slice(0, 2);

  const displayedRelated =
    relatedProjects.length > 0
      ? relatedProjects
      : projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <main className="bg-atelier-ivory text-atelier-charcoal">
      {/* Project heading */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-10 md:pb-14 md:pt-24 lg:px-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-gray-500 transition-colors hover:text-atelier-charcoal"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          All projects
        </Link>

        <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-atelier-olive">
              {project.category} / {project.year}
            </p>

            <h1 className="font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              {project.title}
            </h1>

            <p className="mt-5 text-sm text-gray-500">{project.location}</p>
          </div>

          <p className="max-w-lg text-sm leading-7 text-gray-600 md:col-span-4 md:justify-self-end">
            {project.description}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-[1600px] px-0 sm:px-10 lg:px-16">
        <div className="aspect-[4/3] overflow-hidden bg-atelier-stone sm:aspect-[16/9]">
          <img
            src={project.image}
            alt={`${project.title} concept`}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Project information */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-12 md:gap-8 md:py-24 lg:px-16">
        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atelier-olive">
            The project
          </p>

          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            Designed around the way we live.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="text-base leading-8 text-gray-600">
            {project.description}
          </p>

          <p className="mt-6 text-sm leading-8 text-gray-600">
            This concept explores the relationship between material, natural
            light, proportion, and everyday experience. The design direction
            prioritises clarity and restraint, allowing each element to
            contribute to a cohesive whole.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-atelier-stone pt-7 sm:grid-cols-3">
            <div>
              <p className="text-xs text-gray-500">Discipline</p>
              <p className="mt-2 text-sm">{project.category}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="mt-2 text-sm">{project.location}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Year</p>
              <p className="mt-2 text-sm">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design approach */}
      <section className="bg-[#EAE8E0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atelier-olive">
              Design approach
            </p>

            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Less noise.
              <span className="block italic">More meaning.</span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-gray-600">
              Every design decision starts with a question: what does this space
              need to do, and how should it feel? The concept brings together
              thoughtful planning, considered materials, and a restrained visual
              language to create a space with a clear identity.
            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              The result is an exploration of timeless design principles rather
              than passing trends.
            </p>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atelier-olive">
              Continue exploring
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Related projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="hidden items-center gap-3 text-xs uppercase tracking-[0.12em] transition-colors hover:text-atelier-olive sm:inline-flex"
          >
            View all
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {displayedRelated.map((item) => (
            <Link
              key={item.slug}
              to={`/projects/${item.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-atelier-stone">
                <img
                  src={item.image}
                  alt={`${item.title} concept`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-atelier-olive">
                    {item.category} / {item.year}
                  </p>

                  <h3 className="mt-2 font-display text-2xl">{item.title}</h3>

                  <p className="mt-2 text-xs text-gray-500">{item.location}</p>
                </div>

                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mt-1 text-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link
        to={`/projects/${nextProject.slug}`}
        className="group block border-t border-atelier-stone"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-10 sm:px-10 md:py-14 lg:px-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Next project
            </p>

            <h2 className="mt-3 font-display text-3xl transition-colors group-hover:text-atelier-olive sm:text-4xl">
              {nextProject.title}
            </h2>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-atelier-stone transition-colors group-hover:border-atelier-charcoal group-hover:bg-atelier-charcoal group-hover:text-atelier-ivory">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </Link>
    </main>
  );
};

export default ProjectDetails;
