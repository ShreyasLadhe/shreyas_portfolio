import { workflowProjects } from "../constants";

const WorkflowChronicles = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">Workflow Chronicles</h2>
      <p className="mt-3 text-sand">Discover innovative n8n automation workflows that solve real-world problems and streamline complex processes.</p>

      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {workflowProjects.map((workflow) => (
          <button
            key={workflow.slug}
            onClick={() => {
              if (!workflow.hashnodeUrl) return;
              window.open(workflow.hashnodeUrl, "_blank", "noopener,noreferrer");
            }}
            className="text-left group bg-storm/40 hover:bg-storm/60 rounded-xl overflow-hidden ring-1 ring-gray-700 hover:shadow-lg hover:shadow-black/30 transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={workflow.image} 
                alt={workflow.title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{workflow.title}</h3>
              <p className="mt-1 text-sm text-sand">{workflow.subtitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {workflow.tags?.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default WorkflowChronicles;
