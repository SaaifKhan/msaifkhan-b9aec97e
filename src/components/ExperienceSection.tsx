import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Next Generation Innovation",
    role: "Application Engineer-II",
    period: "Sep 2023 — Present",
    points: [
      "Worked as an Android Developer on the Zofeur Customer App, a UAE ride-hailing platform",
      "Built and enhanced core features including chat, maps, payments, and AI integrations (OpenAI, Google Gemini)",
      "Delivered full payment checkout flows (subscriptions, tips, fares) in 2 weeks",
      "Revamped UI using XML and Jetpack Compose, helping increase downloads from 60K to 100K+ (~40%)",
      "Improved app stability to 99.72% crash-free through performance optimization and code cleanup",
      "Implemented a reusable custom UI package (gradients, shadows, loaders, canvas components) used across the app, boosting development productivity by 40%",
      "Integrated Google Maps, Adjust, CleverTap SDKs for analytics and tracking",
    ],
  },
  {
    company: "Appiskey",
    role: "Android Developer",
    period: "Dec 2021 — Sep 2023",
    points: [
      "Developed the Perfect Day Parent App, delivering quality and timely Android solutions",
      "Built new features and user interfaces from wireframe models to improve user engagement",
      "Worked on the Rapid Order app, implementing complete order functionality with custom UI using Canvas and MVVM",
      "Reduced QA-reported bugs from 90% to 40% through cleaner architecture and improved implementation quality",
      "Implemented GitLab CI/CD pipelines for automated builds and testing",
    ],
  },
  {
    company: "TechnosysInt",
    role: "Mobile Application Developer",
    period: "May 2021 — Dec 2021",
    points: [
      "Built the Kingsway Flutter app using MVVM architecture, ensuring clean code structure and scalability",
      "Designed the UI independently, creating a user-friendly and visually consistent interface from scratch",
      "Developed an automated employee attendance system with geofence-based location tracking",
      "Developed applications using Flutter and Dart, broadening cross-platform capabilities",
      "Worked closely with team leads during review cycles, incorporating feedback to improve product quality",
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
