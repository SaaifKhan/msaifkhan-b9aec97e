import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
          <p className="font-mono text-primary text-sm mb-4">06. What's Next?</p>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently open to new opportunities and collaborations. Whether you have a 
            project in mind, a job opportunity, or just want to say hi — my inbox is always open.
          </p>
          <a
            href="mailto:saif_khan09@hotmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
