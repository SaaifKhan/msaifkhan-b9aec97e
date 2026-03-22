import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Zofeur Customer App",
    description:
      "A ride-hailing platform for UAE. Built payment modules with Stripe, real-time Firebase notifications, and live data updates across multiple screens.",
    tech: ["Kotlin", "MVVM", "Firebase", "Stripe", "Google Maps"],
    link: "https://play.google.com/store/apps/details?id=com.app.zofeur",
    featured: true,
  },
  {
    title: "LadyBird Parent App",
    description:
      "School transport tracking app for parents with Clean Architecture, real-time tracking, and push notifications.",
    tech: ["Kotlin", "Clean Architecture", "Firebase", "Google Maps"],
    featured: true,
  },
  {
    title: "EAttendance",
    description:
      "Real-time GPS-based attendance management with punch in/out, break tracking, and monthly history reports.",
    tech: ["Kotlin", "MVVM", "GPS", "Work Manager"],
    link: "#",
  },
  {
    title: "Bx Loyalty App",
    description:
      "Points and rewards loyalty app with barcode scanning for clients to easily track earned points and discounts.",
    tech: ["Kotlin", "Clean Architecture", "Barcode SDK"],
    link: "#",
  },
  {
    title: "Blood Donor Finder",
    description:
      "Academic project connecting blood donors with recipients. Built as a semester project showcasing core Android fundamentals.",
    tech: ["Java", "Firebase", "Android SDK"],
    github: "https://github.com/SaaifKhan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold font-mono mb-12">
            <span className="text-primary">04.</span> Projects
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>

          {/* Featured */}
          <div className="space-y-20 mb-20">
            {projects
              .filter((p) => p.featured)
              .map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    i % 2 !== 0 ? "md:text-right" : ""
                  }`}
                >
                  <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                    <p className="font-mono text-primary text-xs mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="p-6 rounded-lg bg-card border border-border mb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className={`flex flex-wrap gap-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`h-48 rounded-lg bg-secondary/50 border border-border flex items-center justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                    <span className="font-mono text-3xl text-gradient-primary font-bold">
                      {project.title.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Other projects grid */}
          <h3 className="text-center font-mono text-lg mb-8">Other Noteworthy Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-primary text-2xl">📂</span>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Github size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
