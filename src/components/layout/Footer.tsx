import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUp,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-atelier-charcoal text-atelier-ivory">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block font-display text-3xl tracking-tight"
            >
              atelier<span className="text-atelier-olive">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Thoughtful architecture and considered interiors, designed to
              bring lasting character to the spaces we inhabit.
            </p>

            <a
              href="mailto:hello@atelier.example"
              className="mt-7 inline-flex items-center gap-3 text-sm transition-colors hover:text-atelier-stone"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              hello@atelier.example
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>

            <nav className="mt-6 flex flex-col items-start gap-4">
              <Link
                to="/"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Projects
              </Link>
              <Link
                to="/studio"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Studio
              </Link>
              <Link
                to="/contact"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Have a project in mind?
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Let's create something thoughtful, functional, and lasting.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-sm transition-colors hover:border-white hover:bg-white hover:text-atelier-charcoal"
            >
              Start a conversation
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {currentYear} Atelier Studio. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            An independent design concept.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-3 self-start text-xs uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white sm:self-auto"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center border border-white/20">
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
