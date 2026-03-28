import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowDown, Download } from "lucide-react";
import profileImg from "@/assets/saif-profile.png";

const socials = [
  { icon: Github, href: "https://github.com/SaaifKhan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saifkh", label: "LinkedIn" },
  { icon: FileText, href: "https://medium.com/@saif-khan09", label: "Medium" },
];

const phrases = ["mobile.", "Android.", "the future."];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "100K+", label: "Users Impacted" },
  { value: "99.72%", label: "Crash-Free Rate" },
  { value: "5+", label: "Apps Shipped" },
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentPhrase.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(165 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(165 80% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl flex-1"
          >
            <p className="font-mono text-primary mb-4 text-sm tracking-wider">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Saif Khan
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
              I build things for{" "}
              <span className="text-gradient-primary">
                {phrases[phraseIndex].substring(0, charIndex)}
              </span>
              <span className="text-primary animate-pulse">|</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10">
              Android Engineer with 4+ years of experience crafting high-quality mobile 
              applications using Kotlin, Jetpack Compose, and Clean Architecture. 
              Currently building at{" "}
              <a href="#" className="text-primary hover:underline">Next Generation Innovation</a>.
            </p>

            <div className="flex items-center gap-4 mb-16 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary/50 hover:glow-primary text-muted-foreground hover:text-primary transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
              <a
                href="/Saif_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors glow-primary"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 glow-primary">
              <img
                src={profileImg}
                alt="Saif Khan"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-xl -z-10" />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg glass">
              <p className="text-2xl md:text-3xl font-bold text-primary font-mono">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground font-mono mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
