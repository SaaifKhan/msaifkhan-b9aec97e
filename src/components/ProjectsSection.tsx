import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Smartphone } from "lucide-react";

const featuredProjects = [
  {
    title: "Zofeur Customer App",
    subtitle: "Ride-Hailing Platform · UAE",
    description:
      "A high-performance ride-hailing platform serving 100K+ users across the UAE. Contributed to end-to-end development — from feature implementation to crash monitoring and performance optimization.",
    impact: [
      "Integrated Adyen & Checkout payment flows for seamless transactions",
      "Built real-time Firebase notifications & live data updates across screens",
      "Improved app stability through crash monitoring & performance tuning",
    ],
    tech: ["Kotlin", "MVVM", "Firebase", "Adyen", "Checkout", "Google Maps"],
    link: "https://play.google.com/store/apps/details?id=production.zofeur.customer&hl=en",
    abbr: "ZCA",
    users: "100K+ Users",
  },
  {
    title: "LadyBird Parent App",
    subtitle: "Childcare Management Platform",
    description:
      "Perfect Day is the only true all-in-one childcare management software on the market. It provides real-time live HD video monitoring and a social media style daily activity feed so parents can see what their child is up to at any time throughout the day.",
    impact: [
      "Integrated Stripe payments & built the subscription module end-to-end",
      "Fixed memory leaks & resolved production bugs for app stability",
      "Delivered production-readiness improvements across the platform",
    ],
    tech: ["Kotlin", "Clean Architecture", "Firebase", "Stripe"],
    link: "https://play.google.com/store/apps/details?id=com.perfectday.parent",
    abbr: "LPA",
    users: "Parents & Childcare",
  },
];

const otherProjects = [
  {
    title: "Kingsway",
    subtitle: "Mobile App",
    description:
      "A published Android application available on the Google Play Store.",
    tech: ["Kotlin", "Android SDK"],
    link: "https://play.google.com/store/apps/details?id=com.technosys.kingsway",
  },
  {
    title: "EAttendance",
    subtitle: "GPS-Based Attendance",
    description:
      "Real-time GPS-based attendance management with punch in/out, break tracking, and monthly history reports.",
    tech: ["Kotlin", "MVVM", "GPS", "Work Manager"],
  },
  {
    title: "Bx Loyalty App",
    subtitle: "Points & Rewards",
    description:
      "Loyalty app with barcode scanning for clients to track earned points and redeem discounts effortlessly.",
    tech: ["Kotlin", "Clean Architecture", "Barcode SDK"],
  },
  {
    title: "Blood Donor Finder",
    subtitle: "Academic Project",
    description:
      "Connects blood donors with recipients. Built as a semester project showcasing core Android fundamentals.",
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
          <h2 className="flex items-center gap-4 text-2xl font-bold font-mono mb-16">
            <span className="text-primary">04.</span> Projects
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-10 mb-20">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative rounded-xl border border-primary/20 bg-card overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-primary/10 border-l border-b border-primary/20 px-4 py-1.5 rounded-bl-lg">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-primary">
                    <Star size={12} className="fill-primary" /> Featured Project
                  </span>
                </div>

                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-secondary/30 border-r border-border flex flex-col items-center justify-center p-10 min-h-[280px]">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Smartphone className="text-primary" size={36} />
                    </div>
                    <span className="font-mono text-2xl font-bold text-gradient-primary tracking-tight">
                      {project.abbr}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono mt-2">{project.users}</span>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="mb-1">
                      <span className="text-xs font-mono text-muted-foreground">{project.subtitle}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                      {project.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {project.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                          <span className="text-primary mt-1 flex-shrink-0">▹</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
                      >
                        View on Play Store <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-center font-mono text-lg mb-10 text-muted-foreground">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground">{project.subtitle}</span>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground">
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
