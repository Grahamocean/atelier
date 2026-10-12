import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCompassDrafting,
  faLayerGroup,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const displayedProjects =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".home-hero-copy",
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".home-hero-image",
          { autoAlpha: 0, scale: 1.04 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.2,
            delay: 0.2,
            ease: "power2.out",
          },
        );

        gsap.utils
          .toArray<HTMLElement>(".home-reveal", pageRef.current)
          .forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 30 },
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

        gsap.utils
          .toArray<HTMLElement>(".home-project-card", pageRef.current)
          .forEach((card, index) => {
            gsap.fromTo(
              card,
              { autoAlpha: 0, y: 35 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                delay: (index % 3) * 0.1,
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
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="overflow-hidden bg-atelier-ivory">
      {/* Hero */}
      <section className="px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="home-hero-copy mb-6 text-xs font-medium uppercase tracking-[0.25em] text-atelier-olive">
                Architecture · Interiors · Design
              </p>

              <h1 className="home-hero-copy max-w-4xl font-display text-5xl leading-[1.08] tracking-tight text-atelier-charcoal sm:text-6xl lg:text-7xl xl:text-8xl">
                Thoughtful spaces.
                <br />
                <span className="italic">Lasting impact.</span>
              </h1>

              <p className="home-hero-copy mt-7 max-w-lg text-sm leading-7 text-atelier-charcoal/65 sm:text-base">
                We explore the relationship between architecture, materials, and
                everyday living to create spaces that feel both timeless and
                personal.
              </p>

              <div className="home-hero-copy mt-9 flex flex-wrap items-center gap-6">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-4 bg-atelier-charcoal px-6 py-4 text-xs text-white transition-colors hover:bg-atelier-olive"
                >
                  Explore our work
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>

                <Link
                  to="/studio"
                  className="inline-flex items-center gap-3 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
                >
                  Discover the studio
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>

            <div className="home-hero-image relative">
              <div className="aspect-[4/5] overflow-hidden bg-atelier-stone sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                  alt="Warm, minimal contemporary interior with natural materials"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-atelier-charcoal/55">
                Form, texture, and natural light
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="home-reveal mx-auto grid max-w-7xl gap-8 border-t border-atelier-charcoal/15 pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.22em] text-atelier-olive">
            A considered approach
          </p>

          <div>
            <h2 className="max-w-4xl font-display text-3xl leading-tight text-atelier-charcoal sm:text-4xl lg:text-5xl">
              Good design is not simply how a space looks. It is how
              <span className="italic"> it makes you feel.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-atelier-charcoal/65">
              Atelier is a fictional architecture and interior design studio
              concept built around clarity, restraint, and considered details.
              Each concept explores how thoughtful design can make everyday
              spaces more meaningful.
            </p>

            <Link
              to="/studio"
              className="mt-7 inline-flex items-center gap-3 border-b border-atelier-charcoal/40 pb-2 text-xs text-atelier-charcoal transition-colors hover:border-atelier-olive hover:text-atelier-olive"
            >
              More about our approach
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="home-reveal mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                Selected work
              </p>

              <h2 className="font-display text-4xl text-atelier-charcoal sm:text-5xl">
                Ideas taking shape.
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-3 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
            >
              View all projects
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project) => (
              <article key={project.slug} className="home-project-card group">
                <Link
                  to={`/projects/${project.slug}`}
                  className="block"
                  aria-label={`View ${project.title}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-atelier-stone">
                    <img
                      src={project.image}
                      alt={`${project.title} architectural concept`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-atelier-ivory text-atelier-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-atelier-olive">
                        {project.category} / {project.year}
                      </p>

                      <h3 className="font-display text-2xl text-atelier-charcoal">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs text-atelier-charcoal/60">
                        {project.location}
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

      {/* Services */}
      <section className="bg-[#EDEBE4] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="home-reveal grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                What we explore
              </p>

              <h2 className="max-w-xl font-display text-4xl leading-tight text-atelier-charcoal sm:text-5xl">
                Design with purpose, from concept to detail.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-atelier-charcoal/65 md:justify-self-end">
              Our design approach balances the overall vision with the details
              that make a space feel complete.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="home-reveal border-t border-atelier-charcoal/20 pt-6">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="text-xl text-atelier-olive"
              />

              <h3 className="mt-7 font-display text-2xl text-atelier-charcoal">
                Architecture
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Spatial planning, architectural concepts, and considered
                relationships between built forms and their surroundings.
              </p>
            </article>

            <article className="home-reveal border-t border-atelier-charcoal/20 pt-6">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-xl text-atelier-olive"
              />

              <h3 className="mt-7 font-display text-2xl text-atelier-charcoal">
                Interior design
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Thoughtful layouts, material palettes, furniture, lighting, and
                the atmosphere that connects them.
              </p>
            </article>

            <article className="home-reveal border-t border-atelier-charcoal/20 pt-6">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-xl text-atelier-olive"
              />

              <h3 className="mt-7 font-display text-2xl text-atelier-charcoal">
                Design direction
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                A clear creative direction that brings visual references, design
                decisions, and project details into one coherent idea.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="home-reveal mx-auto max-w-7xl border-t border-atelier-charcoal/15 pt-12 lg:pt-16">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-atelier-olive">
            Have an idea in mind?
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-atelier-charcoal sm:text-5xl lg:text-6xl">
              Let&apos;s make room for
              <span className="italic"> something meaningful.</span>
            </h2>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-4 border-b border-atelier-charcoal pb-3 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
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

export default Home;
