import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faCompassDrafting,
  faLayerGroup,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Studio = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".studio-hero-copy",
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".studio-hero-image",
          { autoAlpha: 0, scale: 1.04 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1.1,
            delay: 0.2,
            ease: "power2.out",
          },
        );

        gsap.utils
          .toArray<HTMLElement>(".studio-reveal", pageRef.current)
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
                  start: "top 87%",
                  once: true,
                },
              },
            );
          });

        gsap.utils
          .toArray<HTMLElement>(".studio-principle", pageRef.current)
          .forEach((element, index) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                delay: (index % 3) * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
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
          <p className="studio-hero-copy mb-5 text-xs uppercase tracking-[0.25em] text-atelier-olive">
            About the studio
          </p>

          <h1 className="studio-hero-copy max-w-5xl font-display text-5xl leading-[1.08] tracking-tight text-atelier-charcoal sm:text-6xl lg:text-8xl">
            Less, but
            <span className="italic"> considered.</span>
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div className="studio-hero-image aspect-[16/10] overflow-hidden bg-atelier-stone lg:aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                alt="Minimal contemporary architecture with natural textures"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>

            <div className="studio-hero-copy pb-2 lg:pl-4">
              <p className="text-sm leading-7 text-atelier-charcoal/70 sm:text-base">
                We believe thoughtful design begins with listening, observation,
                and a clear understanding of how people experience the spaces
                around them.
              </p>

              <p className="mt-5 text-sm leading-7 text-atelier-charcoal/70 sm:text-base">
                Atelier is a fictional design studio concept exploring
                architecture and interiors through simplicity, natural
                materials, and enduring forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="studio-reveal mx-auto grid max-w-7xl gap-8 border-t border-atelier-charcoal/15 pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.22em] text-atelier-olive">
            Our philosophy
          </p>

          <div>
            <h2 className="max-w-4xl font-display text-3xl leading-tight text-atelier-charcoal sm:text-4xl lg:text-5xl">
              Every detail has a reason. Every space tells a story.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-atelier-charcoal/65">
              Our approach values clarity over excess. We explore proportion,
              natural light, texture, and function to develop design concepts
              that feel balanced rather than overworked.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#EDEBE4] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="studio-reveal mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
              What guides us
            </p>

            <h2 className="font-display text-4xl text-atelier-charcoal sm:text-5xl">
              Principles behind the work.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="studio-principle border-t border-atelier-charcoal/20 pt-6">
              <span className="font-display text-3xl italic text-atelier-olive">
                01
              </span>

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Purposeful simplicity
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Removing unnecessary elements allows the essential qualities of
                a space to become more visible.
              </p>
            </article>

            <article className="studio-principle border-t border-atelier-charcoal/20 pt-6">
              <span className="font-display text-3xl italic text-atelier-olive">
                02
              </span>

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Material honesty
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Wood, stone, metal, and textiles each contribute their own
                character, texture, and sense of permanence.
              </p>
            </article>

            <article className="studio-principle border-t border-atelier-charcoal/20 pt-6">
              <span className="font-display text-3xl italic text-atelier-olive">
                03
              </span>

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Human experience
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                A successful space should support the routines, interactions,
                and moments that make it useful.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="studio-reveal grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-atelier-olive">
                Areas of exploration
              </p>

              <h2 className="font-display text-4xl text-atelier-charcoal sm:text-5xl">
                One vision, different disciplines.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-atelier-charcoal/65 md:justify-self-end">
              From the first spatial idea to the smallest visual detail, each
              discipline contributes to a more coherent design.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="studio-principle border-t border-atelier-charcoal/20 pt-6">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="text-xl text-atelier-olive"
              />

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Architecture
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Building concepts, spatial relationships, and the connection
                between a structure and its environment.
              </p>
            </article>

            <article className="studio-principle border-t border-atelier-charcoal/20 pt-6">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-xl text-atelier-olive"
              />

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Interior design
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Interior concepts shaped by layout, furniture, materials,
                lighting, and atmosphere.
              </p>
            </article>

            <article className="studio-principle border-t border-atelier-charcoal/20 pt-6">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-xl text-atelier-olive"
              />

              <h3 className="mt-6 font-display text-2xl text-atelier-charcoal">
                Creative direction
              </h3>

              <p className="mt-4 text-sm leading-7 text-atelier-charcoal/65">
                Visual research, references, and a consistent creative language
                that holds the overall concept together.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="studio-reveal mx-auto max-w-7xl border-t border-atelier-charcoal/15 pt-12 lg:pt-16">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-atelier-olive">
            Start a conversation
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-atelier-charcoal sm:text-5xl lg:text-6xl">
              Have a space in mind?
              <span className="italic"> Let&apos;s explore it.</span>
            </h2>

            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-4 border-b border-atelier-charcoal pb-3 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
            >
              Get in touch
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
