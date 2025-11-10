import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Database, Code2 } from 'lucide-react';

const skills = [
  { name: 'Python / Pandas', level: 90, icon: <Code2 className="h-5 w-5" /> },
  { name: 'Machine Learning', level: 85, icon: <Brain className="h-5 w-5" /> },
  { name: 'Deep Learning', level: 80, icon: <Brain className="h-5 w-5" /> },
  { name: 'Data Viz (Plotly/D3)', level: 75, icon: <BarChart3 className="h-5 w-5" /> },
  { name: 'SQL / NoSQL', level: 70, icon: <Database className="h-5 w-5" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#020C1B] py-24 text-[#E6F1FF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(100,255,218,0.05),transparent_35%),radial-gradient(circle_at_100%_20%,rgba(147,51,234,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="mb-10 text-3xl font-bold" style={{ fontFamily: 'Poppins, Montserrat' }}>
          Core Skills
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#8892B0]">
                  <span className="text-[#64FFDA]">{s.icon}</span>
                  <span className="font-medium text-[#E6F1FF]">{s.name}</span>
                </div>
                <span className="text-sm text-[#64FFDA]">{s.level}%</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#64FFDA] via-cyan-300 to-fuchsia-400 shadow-[0_0_20px_#64FFDA]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,transparent_20%,transparent_80%,rgba(255,255,255,0.15)_100%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
