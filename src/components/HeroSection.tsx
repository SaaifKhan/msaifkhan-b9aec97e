import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";
import profileImg from "@/assets/saif-profile.png";

const socials = [
  { icon: Github, href: "https://github.com/SaaifKhan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saifkh", label: "LinkedIn" },
  { icon: FileText, href: "https://medium.com/@saif-khan09", label: "Medium" },
];

const HeroSection = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-mono text-primary mb-4 text-sm tracking-wider">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Saif Khan
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
            I build things for <span className="text-gradient-primary">mobile.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10">
            Android Engineer with 4+ years of experience crafting high-quality mobile 
            applications using Kotlin, Jetpack Compose, and Clean Architecture. 
            Currently building at{" "}
            <a href="#" className="text-primary hover:underline">Next Generation Innovation</a>.
          </p>

          <div className="flex items-center gap-6 mb-16">
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
          </div>
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
