import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  // Split projects
  const productionProjects = myProjects.filter((p) => p.id === 1 || p.id === 2 || p.id === 4);
  const conceptualProjects = myProjects.filter((p) => p.id === 3 || p.id === 4);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Technical Jewels</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Production-Level Projects */}
      <h3 className="text-xl font-semibold mt-8 mb-4 underline">Production-Level Projects</h3>
      {productionProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* Conceptual Mini Projects */}
      <h3 className="text-xl font-semibold mt-12 mb-4 underline">Conceptual Mini Projects</h3>
      {conceptualProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
