import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-[#0A192F] to-[#020C1B] text-[#E6F1FF]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay with subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A192F]/80" />

      <div className="relative z-10 mx-auto flex h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs tracking-wider text-[#64FFDA] ring-1 ring-[#64FFDA]/30 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-[#64FFDA] shadow-[0_0_12px_#64FFDA]" />
          Available for full‑time & freelance
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl font-extrabold leading-[1.1] sm:text-6xl md:text-7xl"
          style={{ fontFamily: 'Poppins, Montserrat, Inter, system-ui' }}
        >
          Arnav Singh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-3 bg-gradient-to-r from-[#64FFDA] via-[#E6F1FF] to-[#64FFDA] bg-clip-text text-xl font-semibold text-transparent sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'Poppins, Montserrat, Inter, system-ui' }}
        >
          Data Science • AI/ML Developer • Data Analyst
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 max-w-2xl text-sm text-[#8892B0] sm:text-base"
          style={{ fontFamily: 'Inter, Open Sans, system-ui' }}
        >
          I build intelligent systems that turn data into delightful, actionable experiences — blending rigorous analysis with creative engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="group rounded-full bg-[#64FFDA] px-6 py-3 text-[#0A192F] shadow-[0_0_20px_#64FFDA] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_#64FFDA]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#64FFDA]/40 bg-white/5 px-6 py-3 text-[#E6F1FF] backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#64FFDA]/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
