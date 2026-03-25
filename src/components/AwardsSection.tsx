import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import fastLearnerImg from "@/assets/fast-learner-award.png";

const awards = [
  {
    title: "Fast Learner Award",
    issuer: "Next Generation Innovation",
    date: "Feb 2025",
    description:
      "Recognized for exceptional curiosity, rapid skill acquisition, and a strong learning spirit that consistently drives team growth.",
    image: fastLearnerImg,
  },
  {
    title: "Best Presentation Award",
    issuer: "Appiskey",
    date: "Sep 2021",
    description:
      "Awarded for delivering an outstanding technical presentation, along with a PKR 5,000 cash prize.",
    image: null,
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-mono font-bold mb-12"
        >
          <span className="text-primary">06.</span>{" "}
          <span className="text-foreground">Awards & Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass border-glow rounded-xl overflow-hidden flex flex-col"
            >
              {award.image ? (
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-32 flex items-center justify-center bg-primary/10">
                  <Trophy className="w-14 h-14 text-primary" />
                </div>
              )}
              <div className="p-6 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 text-primary">
                  <Award size={18} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {award.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Issued by {award.issuer}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
