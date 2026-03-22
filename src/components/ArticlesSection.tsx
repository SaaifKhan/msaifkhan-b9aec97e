import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Clean Architecture in Android — A Practical Guide",
    description: "Breaking down Clean Architecture patterns for scalable Android apps with real examples.",
    tag: "Architecture",
  },
  {
    title: "Kotlin Coroutines & Flows for Android Developers",
    description: "Deep dive into reactive programming with Kotlin Flows, StateFlow, and SharedFlow.",
    tag: "Kotlin",
  },
  {
    title: "Jetpack Compose Migration Strategies",
    description: "How to incrementally adopt Jetpack Compose in existing XML-based Android projects.",
    tag: "Jetpack",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold font-mono mb-4">
            <span className="text-primary">05.</span> Articles
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>
          <p className="text-muted-foreground mb-12">
            I write about Android development on{" "}
            <a
              href="https://medium.com/@saif-khan09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Medium
            </a>
            . Here are some topics I cover:
          </p>

          <div className="space-y-4 max-w-2xl">
            {articles.map((article, i) => (
              <motion.a
                key={article.title}
                href="https://medium.com/@saif-khan09"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex items-start gap-4 p-5 rounded-lg border border-border hover:border-primary/30 hover:bg-card transition-all"
              >
                <div className="flex-1">
                  <span className="inline-block text-xs font-mono text-primary mb-2 px-2 py-0.5 rounded bg-primary/10">
                    {article.tag}
                  </span>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0"
                />
              </motion.a>
            ))}
          </div>

          <a
            href="https://medium.com/@saif-khan09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 font-mono text-sm text-primary hover:underline"
          >
            View all articles on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
