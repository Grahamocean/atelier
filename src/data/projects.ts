export type ProjectCategory = "Residential" | "Commercial" | "Interior";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "the-stone-house",
    title: "The Stone House",
    category: "Residential",
    location: "Cotswolds, England",
    year: "2025",
    description:
      "A contemporary country residence shaped by natural materials, quiet proportions, and a strong connection to its landscape.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    featured: true,
  },
  {
    slug: "stillwater-residence",
    title: "Stillwater Residence",
    category: "Residential",
    location: "Copenhagen, Denmark",
    year: "2024",
    description:
      "A calm residential retreat balancing soft textures, natural light, and understated contemporary detailing.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    featured: true,
  },
  {
    slug: "form-and-function",
    title: "Form & Function",
    category: "Commercial",
    location: "London, England",
    year: "2025",
    description:
      "A considered workspace designed around flexibility, material honesty, and everyday collaboration.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "the-olive-apartment",
    title: "The Olive Apartment",
    category: "Interior",
    location: "Milan, Italy",
    year: "2024",
    description:
      "A restrained apartment interior combining warm neutrals, tactile finishes, and carefully selected furniture.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    category: "Residential",
    location: "Lisbon, Portugal",
    year: "2023",
    description:
      "A modern home organised around a private courtyard that brings daylight and greenery into daily life.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
  },
  {
    slug: "the-gallery-studio",
    title: "The Gallery Studio",
    category: "Commercial",
    location: "Amsterdam, Netherlands",
    year: "2025",
    description:
      "A minimalist creative studio with a gallery-like atmosphere, subtle finishes, and adaptable work areas.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
  },
];
