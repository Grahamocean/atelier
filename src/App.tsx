import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-atelier-ivory text-atelier-charcoal">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
              <h1 className="font-display text-4xl">Page not found</h1>
              <p className="mt-4 text-atelier-charcoal/65">
                The page you are looking for does not exist.
              </p>
              <a href="/" className="mt-6 inline-block underline">
                Return home
              </a>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
