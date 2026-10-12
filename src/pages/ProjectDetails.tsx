import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectDetails = () => {
  const { slug } = useParams();
  const pageRef = useRef<HTMLDivElement>(null);

  const project = projects.find((item) => item.slug === slug);

  const relatedProjects = project
    ? projects
        .filter(
          (item) =>
            item.slug !== project.slug && item.category === project.category,
        )
        .slice(0, 2)
    : [];

  const nextProject = project
    ? projects[
        (projects.findIndex((item) => item.slug === project.slug) + 1) %
          projects.length
      ]
    : undefined;

  useGSAP(
    () => {
      if (!project) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero text
        gsap.fromTo(
          ".detail-hero-copy",
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        // Hero image
        gsap.fromTo(
          ".detail-hero-image",
          {
            autoAlpha: 0,
            scale: 1.035,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power2.out",
          },
        );

        // Reveal content as it enters the viewport
        gsap.utils
          .toArray<HTMLElement>(".detail-reveal", pageRef.current)
          .forEach((element) => {
            gsap.fromTo(
              element,
              {
                autoAlpha: 0,
                y: 30,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });

        // Related project cards
        gsap.utils
          .toArray<HTMLElement>(".detail-related-card", pageRef.current)
          .forEach((card, index) => {
            gsap.fromTo(
              card,
              {
                autoAlpha: 0,
                y: 25,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.12,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });
      });

      return () => media.revert();
    },
    {
      scope: pageRef,
      dependencies: [slug],
      revertOnUpdate: true,
    },
  );

  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-atelier-ivory px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-atelier-olive">
            Project not found
          </p>

          <h1 className="mt-5 font-display text-4xl text-atelier-charcoal sm:text-5xl">
            This project doesn&apos;t exist.
          </h1>

          <p className="mt-5 text-sm leading-7 text-atelier-charcoal/65">
            The project may have been moved, or the link may be incorrect.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-3 bg-atelier-charcoal px-6 py-4 text-xs text-white transition-colors hover:bg-atelier-olive"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div ref={pageRef} className="overflow-hidden bg-atelier-ivory">
      {/* Hero */}
      <section className="px-6 pb-12 pt-32 sm:px-10 lg:px-16 lg:pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="detail-hero-copy inline-flex items-center gap-3 text-xs text-atelier-charcoal/65 transition-colors hover:text-atelier-olive"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            All projects
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="detail-hero-copy mb-5 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                {project.category} / {project.year}
              </p>

              <h1 className="detail-hero-copy max-w-4xl font-display text-5xl leading-[1.08] tracking-tight text-atelier-charcoal sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <div className="detail-hero-copy lg:pb-2">
              <p className="text-xs uppercase tracking-[0.18em] text-atelier-charcoal/50">
                Location
              </p>

              <p className="mt-2 text-sm text-atelier-charcoal">
                {project.location}
              </p>

              <p className="mt-6 max-w-md text-sm leading-7 text-atelier-charcoal/65">
                {project.description}
              </p>
            </div>
          </div>

          <div className="detail-hero-image mt-10 aspect-[4/3] overflow-hidden bg-atelier-stone sm:aspect-[16/9] lg:mt-14">
            <img
              src={project.image}
              alt={`${project.title} architectural concept`}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-atelier-charcoal/50">
            Architectural concept / {project.year}
          </p>
        </div>
      </section>

      {/* Project overview */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="detail-reveal mx-auto grid max-w-7xl gap-8 border-t border-atelier-charcoal/15 pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.22em] text-atelier-olive">
            Project overview
          </p>

          <div>
            <h2 className="max-w-4xl font-display text-3xl leading-tight text-atelier-charcoal sm:text-4xl lg:text-5xl">
              A study in balance, material, and everyday experience.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-atelier-charcoal/65">
              {project.description} This concept explores how thoughtful
              proportions, natural materials, and a restrained design language
              can work together to create a cohesive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Design approach */}
      <section className="bg-[#EDEBE4] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="detail-reveal grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                Design approach
              </p>

              <h2 className="max-w-xl font-display text-4xl leading-tight text-atelier-charcoal sm:text-5xl">
                Intentional choices. A coherent whole.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-atelier-charcoal/65 md:justify-self-end">
              The design direction focuses on simplicity without losing
              character. Each decision supports the relationship between form,
              function, light, and material.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <article className="detail-reveal border-t border-atelier-charcoal/20 pt-6">
              <span className="font-display text-3xl italic text-atelier-olive">
                01
              </span>

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Spatial clarity
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                A clear sense of proportion, circulation, and connection between
                the different parts of the space.
              </p>
            </article>

            <article className="detail-reveal border-t border-atelier-charcoal/20 pt-6">
              <span className="font-display text-3xl italic text-atelier-olive">
                02
              </span>

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Material palette
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                A restrained approach to finishes and textures that creates
                visual depth without unnecessary decoration.
              </p>
            </article>

            <article className="detail-reveal border-t border-atelier-charcoal/20 pt-6">
              <span className="font-display text-3xl italic text-atelier-olive">
                03
              </span>

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Everyday function
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Design decisions guided by how people might move through, use,
                and experience the environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="detail-reveal border-t border-atelier-charcoal/15 pt-8">
            <p className="mb-8 text-xs uppercase tracking-[0.22em] text-atelier-olive">
              At a glance
            </p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-xs text-atelier-charcoal/50">Project</p>
                <p className="mt-3 text-sm text-atelier-charcoal">
                  {project.title}
                </p>
              </div>

              <div>
                <p className="text-xs text-atelier-charcoal/50">Category</p>
                <p className="mt-3 text-sm text-atelier-charcoal">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="text-xs text-atelier-charcoal/50">Year</p>
                <p className="mt-3 text-sm text-atelier-charcoal">
                  {project.year}
                </p>
              </div>

              <div>
                <p className="text-xs text-atelier-charcoal/50">Location</p>
                <p className="mt-3 text-sm text-atelier-charcoal">
                  {project.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-atelier-charcoal/50">Discipline</p>
                <p className="mt-3 text-sm text-atelier-charcoal">
                  {project.category === "Residential"
                    ? "Residential design"
                    : project.category === "Commercial"
                      ? "Commercial design"
                      : "Interior design"}
                </p>
              </div>

              <div>
                <p className="text-xs text-atelier-charcoal/50">Status</p>
                <p className="mt-3 text-sm text-atelier-charcoal">
                  Concept study
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="detail-reveal mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                  Continue exploring
                </p>

                <h2 className="font-display text-4xl text-atelier-charcoal sm:text-5xl">
                  Related concepts.
                </h2>
              </div>

              <Link
                to="/projects"
                className="inline-flex w-fit items-center gap-3 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
              >
                All projects
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {relatedProjects.map((relatedProject) => (
                <article
                  key={relatedProject.slug}
                  className="detail-related-card group"
                >
                  <Link
                    to={`/projects/${relatedProject.slug}`}
                    className="block"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-atelier-stone">
                      <img
                        src={relatedProject.image}
                        alt={`${relatedProject.title} architectural concept`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4 pt-5">
                      <div>
                        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-atelier-olive">
                          {relatedProject.category} / {relatedProject.year}
                        </p>

                        <h3 className="font-display text-2xl text-atelier-charcoal">
                          {relatedProject.title}
                        </h3>

                        <p className="mt-2 text-xs text-atelier-charcoal/60">
                          {relatedProject.location}
                        </p>
                      </div>

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mt-2 text-sm text-atelier-charcoal/60 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      {nextProject && nextProject.slug !== project.slug && (
        <section className="bg-atelier-charcoal px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="detail-reveal mb-5 text-xs uppercase tracking-[0.22em] text-white/55">
              Next concept
            </p>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="detail-reveal group flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
            >
              <div>
                <p className="mb-3 text-xs text-white/55">
                  {nextProject.category} / {nextProject.year}
                </p>

                <h2 className="max-w-4xl font-display text-4xl leading-tight text-atelier-ivory transition-colors group-hover:text-[#D8D4CB] sm:text-5xl lg:text-7xl">
                  {nextProject.title}
                </h2>
              </div>

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/30 text-atelier-ivory transition-all duration-300 group-hover:border-atelier-ivory group-hover:bg-atelier-ivory group-hover:text-atelier-charcoal">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Back to portfolio */}
      <section className="px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Return to all projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
