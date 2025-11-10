import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0A192F] py-24 text-[#E6F1FF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(100,255,218,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.06),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h3 className="mb-4 flex items-center gap-3 text-3xl font-bold" style={{ fontFamily: 'Poppins, Montserrat' }}>
            <User className="h-7 w-7 text-[#64FFDA]" /> About Me
          </h3>
          <p className="text-[#8892B0] leading-relaxed" style={{ fontFamily: 'Inter, Open Sans' }}>
            I'm Arnav Singh, a creative technologist passionate about data, intelligence, and elegant engineering.
            I design and build systems that transform complex datasets into intuitive solutions — from predictive models
            and interactive dashboards to end‑to‑end ML pipelines. I love mixing research with craftsmanship, bringing
            a calm, futuristic aesthetic to every project.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['AI/ML', 'Data Visualization', 'MLOps', 'Full‑Stack', 'NLP', 'Computer Vision'].map((t) => (
              <span key={t} className="rounded-full border border-[#64FFDA]/30 bg-white/5 px-3 py-1 text-xs text-[#64FFDA] backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
              alt="Arnav Singh portrait"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#64FFDA]/20 via-transparent to-fuchsia-500/10" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#64FFDA]/20 blur-3xl" />
            <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#64FFDA]" /> Always learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
