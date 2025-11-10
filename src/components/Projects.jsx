import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Predictive Maintenance',
    desc: 'ML pipeline predicting equipment failure using sensor telemetry.',
    stack: ['Python', 'XGBoost', 'Airflow'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'NLP Insights',
    desc: 'Topic modeling and sentiment analysis for customer feedback.',
    stack: ['Python', 'spaCy', 'BERTopic'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'Vision QA',
    desc: 'Interactive visual question answering on product images.',
    stack: ['PyTorch', 'Transformers', 'FastAPI'],
    links: { github: '#', demo: '#' },
  },
];

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative bg-[#0A192F] py-24 text-[#E6F1FF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(100,255,218,0.06),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(147,51,234,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="mb-10 text-3xl font-bold" style={{ fontFamily: 'Poppins, Montserrat' }}>
          Selected Projects
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition will-change-transform hover:scale-[1.02]"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#0A192F] to-[#020C1B] ring-1 ring-white/10" />
              <h4 className="mt-4 text-xl font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-[#8892B0]">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-[#64FFDA]/30 bg-white/5 px-2.5 py-0.5 text-xs text-[#64FFDA]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B1426] p-6 text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-2xl font-bold">{active.title}</h4>
              <p className="mt-2 text-[#8892B0]">{active.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span key={s} className="rounded-full border border-[#64FFDA]/30 bg-white/5 px-2.5 py-0.5 text-xs text-[#64FFDA]">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={active.links.github} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={active.links.demo} className="inline-flex items-center gap-2 rounded-lg bg-[#64FFDA] px-3 py-2 text-sm text-[#0A192F] shadow-[0_0_20px_#64FFDA] hover:shadow-[0_0_30px_#64FFDA]">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
              <button onClick={() => setActive(null)} className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
