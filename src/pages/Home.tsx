import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    number: "01",
    title: "Sol House",
    category: "Residential Architecture",
    location: "Copenhagen, Denmark",
    slug: "sol-house",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contemporary residential architecture with natural materials",
  },
  {
    number: "02",
    title: "The Quiet Residence",
    category: "Interior Architecture",
    location: "Amsterdam, Netherlands",
    slug: "quiet-residence",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Refined contemporary interior with warm neutral finishes",
  },
  {
    number: "03",
    title: "Form House",
    category: "Residential Design",
    location: "Melbourne, Australia",
    slug: "form-house",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Minimal contemporary home with sculptural architectural details",
  },
];

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "Thoughtful architectural concepts shaped around space, light, material, and the people who inhabit them.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Considered interiors that balance functionality, tactile materials, and a timeless visual language.",
  },
  {
    number: "03",
    title: "Spatial Consulting",
    description:
      "Creative direction and spatial guidance for projects seeking clarity, character, and purpose.",
  },
];

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-atelier-charcoal/60">
      <span>{number}</span>
      <span className="h-px w-8 bg-atelier-olive/60" />
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-5 pb-12 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-atelier-olive sm:text-sm">
                Independent Architecture & Design Studio
              </p>

              <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.065em]">
                Spaces
                <br />
                that <span className="italic">speak.</span>
              </h1>
            </div>

            <div className="max-w-md pb-2 lg:justify-self-end">
              <p className="text-base leading-8 text-atelier-charcoal/70 sm:text-lg">
                We create thoughtful spaces shaped by material, proportion, and
                light. Designed to feel timeless, purposeful, and distinctly
                human.
              </p>

              <Link
                to="/projects"
                className="mt-7 inline-flex items-center gap-4 border-b border-atelier-charcoal pb-2 text-sm transition-colors hover:border-atelier-olive hover:text-atelier-olive"
              >
                Explore our work
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden bg-atelier-stone sm:mt-14 lg:mt-16">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
              alt="Contemporary architecture with warm natural materials and considered proportions"
              className="h-[420px] w-full object-cover object-center sm:h-[560px] lg:h-[680px]"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between text-white sm:bottom-9 sm:left-9 sm:right-9 lg:bottom-12 lg:left-12 lg:right-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                  Our design philosophy
                </p>
                <p className="mt-2 max-w-md font-display text-2xl leading-tight sm:text-4xl">
                  Less, but considered.
                </p>
              </div>

              <span className="hidden text-xs tracking-widest sm:block">
                EST. 2020
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-atelier-charcoal/55 sm:text-xs">
            <span>Architecture / Interiors / Objects</span>
            <span>Independent by nature</span>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="01" label="Selected work" />
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Made with
                <br />
                <span className="italic">intention.</span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-3 self-start border-b border-atelier-charcoal/30 pb-2 text-sm transition-colors hover:border-atelier-olive hover:text-atelier-olive sm:self-auto"
            >
              View all projects
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project.slug}
                className="group block"
              >
                <div className="relative overflow-hidden bg-atelier-stone">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-atelier-ivory text-sm transition-colors group-hover:bg-atelier-charcoal group-hover:text-white">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-xs"
                    />
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-atelier-charcoal/60">
                      {project.category}
                    </p>
                    <p className="mt-1 text-xs text-atelier-charcoal/45">
                      {project.location}
                    </p>
                  </div>

                  <span className="pt-1 text-xs text-atelier-charcoal/45">
                    {project.number}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
              alt="Carefully composed contemporary interior with natural textures"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />

            <div className="absolute bottom-4 right-4 bg-atelier-ivory px-5 py-4 sm:bottom-6 sm:right-6">
              <p className="font-display text-2xl">Considered.</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-atelier-charcoal/55">
                In every detail
              </p>
            </div>
          </div>

          <div className="lg:py-10">
            <SectionLabel number="02" label="The studio" />

            <h2 className="mt-7 font-display text-4xl leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Good design
              <br />
              <span className="italic">feels different.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-atelier-charcoal/70">
              We believe meaningful design begins with listening. Every space
              has a story, and our role is to give that story form through
              thoughtful planning, honest materials, and a respect for its
              surroundings.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-atelier-charcoal/70">
              Our approach is deliberate rather than decorative. We look for the
              balance between what a space needs to do and how it should make
              people feel.
            </p>

            <Link
              to="/studio"
              className="mt-8 inline-flex items-center gap-4 border-b border-atelier-charcoal pb-2 text-sm transition-colors hover:border-atelier-olive hover:text-atelier-olive"
            >
              Discover our studio
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#EAE8E0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel number="03" label="What we do" />

          <div className="mt-7 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              A thoughtful
              <br />
              approach to
              <br />
              <span className="italic">every space.</span>
            </h2>

            <div>
              {services.map((service) => (
                <div
                  key={service.number}
                  className="grid gap-3 border-t border-atelier-charcoal/20 py-7 sm:grid-cols-[60px_1fr] sm:gap-5 sm:py-9"
                >
                  <span className="text-xs text-atelier-charcoal/50">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-atelier-charcoal/65 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <SectionLabel number="04" label="Start a conversation" />

          <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Have a space
              <br />
              <span className="italic">in mind?</span>
            </h2>

            <Link
              to="/contact"
              className="group inline-flex min-h-14 items-center justify-between gap-8 self-start bg-atelier-charcoal px-6 py-4 text-sm text-white transition-colors hover:bg-atelier-olive sm:min-w-64"
            >
              Tell us about it
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
