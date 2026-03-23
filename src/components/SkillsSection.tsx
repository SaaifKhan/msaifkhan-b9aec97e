import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Kotlin", "Java", "Dart", "Flutter", "XML", ".NET", "Python"],
  },
  {
    title: "Architecture & Patterns",
    skills: ["MVVM", "Clean Architecture", "Dependency Injection", "Multi-Module"],
  },
  {
    title: "Android & Jetpack",
    skills: ["Jetpack Compose", "LiveData", "Navigation", "Flows", "Work Manager", "Coroutines"],
  },
  {
    title: "Networking & Data",
    skills: ["Retrofit", "OkHttp", "REST APIs", "JSON (Moshi/Gson)", "Room Database", "DataStore/SharedPreferences"],
  },
  {
    title: "Tools & Services",
    skills: ["Firebase (Crashlytics, Analytics)", "Google Maps SDK", "Stripe", "CleverTap", "Adjust", "Git", "GitLab CI/CD", "Jira"],
  },
  {
    title: "App Deployment & Release",
    skills: ["Google Play Console", "App Publishing", "Internal Testing", "Closed/Beta Testing", "Production Releases", "App Signing"],
  },
  {
    title: "AI & Data Science",
    skills: ["ChatGPT", "GitHub Copilot", "Generative AI", "Python Data Science", "Prompt Engineering"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold font-mono mb-12">
            <span className="text-primary">02.</span> Skills
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="font-mono text-primary text-sm mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
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

export default SkillsSection;
