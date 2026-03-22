import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Next Generation Innovation",
    role: "Application Engineer-II",
    period: "Sep 2023 — Present",
    points: [
      "Contributing to ZOFUER-based product in UAE, a ride-hailing platform",
      "Built chat systems, location services, and payment gateway integrations",
      "Implemented Google Maps, Adjust, CleverTap SDKs for analytics and tracking",
      "Revamping UI using XML and Jetpack Compose while maintaining code integrity",
      "Leveraged Jetpack components (LiveData, Navigation, Flows) within MVVM architecture",
    ],
  },
  {
    company: "Appiskey",
    role: "Android Developer",
    period: "Dec 2021 — Sep 2023",
    points: [
      "Developed new features and user interfaces from wireframe models",
      "Used Kotlin with Clean Architecture, Coroutines, Flows, and multi-module structure",
      "Built EAttendance app with real-time GPS tracking and attendance management",
      "Built Bx Loyalty App with barcode scanning and points management",
      "Implemented GitLab CI/CD pipelines for automated builds and testing",
    ],
  },
  {
    company: "TechnosysInt",
    role: "Mobile Application Developer",
    period: "May 2021 — Dec 2021",
    points: [
      "Improved and expanded project platforms using XML-based rich UIs",
      "Utilized Java/Kotlin with MVVM architecture, LiveData, and Coroutines",
      "Played a major role in layout modifications to improve functionality",
      "Developed cross-platform features using Flutter and Dart",
    ],
  },
];

const ExperienceSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold font-mono mb-12">
            <span className="text-primary">03.</span> Experience
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="flex flex-col md:flex-row gap-8 max-w-3xl">
            {/* Tab list */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, i) => (
                <button
                  key={exp.company}
                  onClick={() => setActive(i)}
                  className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors ${
                    active === i
                      ? "text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="min-h-[300px]">
              <h3 className="text-lg font-semibold mb-1">
                {experiences[active].role}{" "}
                <span className="text-primary">@ {experiences[active].company}</span>
              </h3>
              <p className="text-sm font-mono text-muted-foreground mb-6">
                {experiences[active].period}
              </p>
              <ul className="space-y-3">
                {experiences[active].points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
