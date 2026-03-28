import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-4">07. What's Next?</p>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-sm font-mono mb-6">
            Let's build something great together.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently open to new opportunities and collaborations. Whether you have a 
            project in mind, a job opportunity, or just want to say hi — my inbox is always open.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:saif_khan09@hotmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              <Mail size={18} />
              Say Hello
            </a>
            <a
              href="https://linkedin.com/in/saifkh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-muted-foreground font-mono text-sm hover:border-primary/50 hover:text-primary transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/SaaifKhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-muted-foreground font-mono text-sm hover:border-primary/50 hover:text-primary transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
