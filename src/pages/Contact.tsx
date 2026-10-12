import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projectTypes = [
  "Architecture",
  "Interior design",
  "Commercial space",
  "Creative direction",
  "Other",
];

const budgetRanges = [
  "Not decided yet",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const timelines = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Just exploring",
];

type ContactForm = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".contact-hero-copy",
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        gsap.utils
          .toArray<HTMLElement>(".contact-reveal", pageRef.current)
          .forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 25 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
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

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Front-end demonstration only: no email or API request is made.
    setSubmitted(true);
  };

  const fieldClassName =
    "mt-3 w-full border-0 border-b border-atelier-charcoal/20 bg-transparent px-0 py-3 text-sm text-atelier-charcoal outline-none transition-colors placeholder:text-atelier-charcoal/35 focus:border-atelier-olive";

  const labelClassName = "block text-xs font-medium text-atelier-charcoal";

  return (
    <div ref={pageRef} className="overflow-hidden bg-atelier-ivory">
      {/* Page heading */}
      <section className="px-6 pb-14 pt-32 sm:px-10 lg:px-16 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="contact-hero-copy mb-5 text-xs uppercase tracking-[0.25em] text-atelier-olive">
            Contact
          </p>

          <h1 className="contact-hero-copy max-w-5xl font-display text-5xl leading-[1.08] tracking-tight text-atelier-charcoal sm:text-6xl lg:text-8xl">
            Every good project
            <br />
            <span className="italic">starts somewhere.</span>
          </h1>

          <p className="contact-hero-copy mt-7 max-w-xl text-sm leading-7 text-atelier-charcoal/65 sm:text-base">
            Tell us a little about your idea, the space you have in mind, or the
            challenge you would like to explore.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Contact information */}
          <aside className="contact-reveal">
            <div className="border-t border-atelier-charcoal/15 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-atelier-olive">
                Get in touch
              </p>

              <h2 className="mt-5 font-display text-3xl leading-tight text-atelier-charcoal sm:text-4xl">
                Let&apos;s talk about your next idea.
              </h2>

              <p className="mt-5 text-sm leading-7 text-atelier-charcoal/65">
                Whether you have a detailed brief or are at the very beginning,
                start by telling us what you have in mind.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-1 text-sm text-atelier-olive"
                />

                <div>
                  <p className="text-xs text-atelier-charcoal/55">Email</p>

                  <a
                    href="mailto:hello@atelier.example"
                    className="mt-2 inline-block text-sm text-atelier-charcoal transition-colors hover:text-atelier-olive"
                  >
                    hello@atelier.example
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-sm text-atelier-olive"
                />

                <div>
                  <p className="text-xs text-atelier-charcoal/55">Studio</p>

                  <p className="mt-2 text-sm leading-6 text-atelier-charcoal">
                    An independent design studio concept
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-atelier-charcoal/15 pt-6">
              <p className="text-xs leading-6 text-atelier-charcoal/55">
                Prefer to explore our work first?
              </p>

              <Link
                to="/projects"
                className="mt-3 inline-flex items-center gap-3 text-sm text-atelier-charcoal transition-colors hover:text-atelier-olive"
              >
                Browse selected projects
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </aside>

          {/* Inquiry form */}
          <div className="contact-reveal">
            <div className="border-t border-atelier-charcoal/15 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-atelier-olive">
                Project inquiry
              </p>

              <h2 className="mt-4 font-display text-3xl text-atelier-charcoal sm:text-4xl">
                Tell us about it.
              </h2>
            </div>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-10 border border-atelier-olive/30 bg-[#EDEBE4] p-6 sm:p-8"
              >
                <p className="font-display text-2xl text-atelier-charcoal">
                  Thank you, {form.name}.
                </p>

                <p className="mt-3 text-sm leading-7 text-atelier-charcoal/70">
                  Your form passed the front-end validation. This is a
                  demonstration form, so your inquiry has not actually been sent
                  or saved.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-6 inline-flex items-center gap-3 border-b border-atelier-charcoal pb-2 text-xs text-atelier-charcoal transition-colors hover:text-atelier-olive"
                >
                  Start another inquiry
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                <div>
                  <label htmlFor="name" className={labelClassName}>
                    Your name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={fieldClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClassName}>
                    Email address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={fieldClassName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClassName}>
                    What type of project is it? *
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={`${fieldClassName} ${
                      form.projectType ? "" : "text-atelier-charcoal/45"
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className={labelClassName}>
                      Estimated budget
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${fieldClassName} ${
                        form.budget ? "" : "text-atelier-charcoal/45"
                      }`}
                    >
                      <option value="">Choose a range</option>

                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelClassName}>
                      Expected timeline
                    </label>

                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className={`${fieldClassName} ${
                        form.timeline ? "" : "text-atelier-charcoal/45"
                      }`}
                    >
                      <option value="">Choose a timeline</option>

                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClassName}>
                    Tell us about your project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your idea, goals, location, or anything else we should know..."
                    rows={5}
                    className={`${fieldClassName} resize-y`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-5 bg-atelier-charcoal px-7 py-4 text-xs text-white transition-colors duration-300 hover:bg-atelier-olive"
                >
                  Submit inquiry
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>

                <p className="text-xs leading-6 text-atelier-charcoal/50">
                  Demonstration only. This form does not send or store your
                  information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
