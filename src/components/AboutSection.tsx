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

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Android developer who loves building clean, scalable 
                mobile applications. My journey started at <span className="text-foreground">SZABIST</span> where 
                I earned my BS in Computer Science, and since then I've been deep into the 
                Android ecosystem.
              </p>
              <p>
                I specialize in building production-grade apps using <span className="text-primary">Kotlin</span>, 
                <span className="text-primary"> Jetpack Compose</span>, <span className="text-primary">MVVM</span>, 
                and <span className="text-primary">Clean Architecture</span>. I've worked with 
                companies to deliver apps that handle payments, real-time chat, location 
                services, and complex UI systems.
              </p>
              <p>
                When I'm not coding, I write technical articles on Medium, contribute to 
                open-source, and explore the latest in mobile development.
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 rounded-lg bg-secondary border border-border flex items-center justify-center overflow-hidden">
                  <div className="font-mono text-6xl font-bold text-gradient-primary">SK</div>
                </div>
                <div className="absolute inset-0 rounded-lg border-2 border-primary/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
