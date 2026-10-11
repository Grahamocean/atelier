import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Studio", path: "/studio" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-atelier-charcoal/10 bg-atelier-ivory">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          aria-label="Atelier home"
          className="font-display text-3xl tracking-[-0.06em]"
        >
          atelier<span className="text-atelier-olive">.</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-atelier-charcoal"
                    : "text-atelier-charcoal/60 hover:text-atelier-charcoal"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden items-center gap-3 border-b border-atelier-charcoal pb-1 text-sm transition-colors hover:text-atelier-olive md:flex"
        >
          Start a project
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </NavLink>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center text-lg md:hidden"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-atelier-charcoal/10 bg-atelier-ivory px-5 py-6 md:hidden sm:px-8"
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-atelier-charcoal/10 py-4 text-base ${
                    isActive
                      ? "text-atelier-charcoal"
                      : "text-atelier-charcoal/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-between py-2 text-sm"
            >
              Start a project
              <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
