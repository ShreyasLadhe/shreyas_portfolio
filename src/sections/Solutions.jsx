import { solutionsProjects } from "../constants";

const Solutions = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">Solutions Architect Heaven</h2>
      <p className="mt-3 text-sand">Deep-dives into cloud architectures and designs, by understandings based on scenarios.</p>

      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {solutionsProjects.map((proj) => (
          <button
            key={proj.slug}
            onClick={() => {
              if (!proj.hashnodeUrl) return;
              window.open(proj.hashnodeUrl, "_blank", "noopener,noreferrer");
            }}
            className="text-left group bg-storm/40 hover:bg-storm/60 rounded-xl overflow-hidden ring-1 ring-gray-700 hover:shadow-lg hover:shadow-black/30 transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img src={proj.image} alt={proj.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="mt-1 text-sm text-sand">{proj.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Solutions;


