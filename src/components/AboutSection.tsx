import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold font-mono mb-12">
            <span className="text-primary">01.</span> About Me
            <span className="h-px flex-1 bg-border max-w-xs" />
          </h2>

          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Android developer who loves building clean, scalable 
                mobile applications. My journey started at <span className="text-foreground">SZABIST</span> where 
                I earned my BS in Computer Science, and since then I've been deep into the 
                Android ecosystem.
              </p>
              <p>
                I specialize in building production-grade mobile apps using <span className="text-primary">Kotlin</span>, 
                <span className="text-primary"> Jetpack Compose</span>, <span className="text-primary">MVVM</span>, 
                <span className="text-primary">Clean Architecture</span>, and cross-platform solutions with 
                <span className="text-primary">Flutter</span> & <span className="text-primary">Dart</span>. I've worked with 
                companies to deliver apps that handle payments, real-time chat, location 
                services, and complex UI systems.
              </p>
              <p>
                When I'm not coding, I write technical articles on Medium, contribute to 
                open-source, and explore the latest in mobile development.
              </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
