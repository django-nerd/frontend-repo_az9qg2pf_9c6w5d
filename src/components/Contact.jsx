import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple front-end validation & fake send
    const valid = form.name.trim() && /.+@.+\..+/.test(form.email) && form.message.trim();
    if (valid) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="relative bg-[#020C1B] py-24 text-[#E6F1FF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(100,255,218,0.06),transparent_40%),radial-gradient(circle_at_10%_20%,rgba(147,51,234,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h3 className="mb-10 text-3xl font-bold" style={{ fontFamily: 'Poppins, Montserrat' }}>
          Get In Touch
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-[#8892B0]">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-[#0B1426] px-3 py-2 text-sm outline-none ring-0 placeholder:text-[#8892B0] focus:border-[#64FFDA]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-[#8892B0]">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-[#0B1426] px-3 py-2 text-sm outline-none ring-0 placeholder:text-[#8892B0] focus:border-[#64FFDA]"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-[#8892B0]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-[#0B1426] px-3 py-2 text-sm outline-none ring-0 placeholder:text-[#8892B0] focus:border-[#64FFDA]"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#64FFDA] px-5 py-2.5 text-[#0A192F] shadow-[0_0_20px_#64FFDA] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_#64FFDA]"
            >
              <Send className="h-4 w-4" /> {sent ? 'Sent!' : 'Send Message'}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="text-[#8892B0]">
              Prefer email? Reach out directly and I’ll get back within 24 hours.
            </p>
            <a href="mailto:arnav.singh@example.com" className="mt-3 inline-flex items-center gap-2 text-[#64FFDA]">
              <Mail className="h-4 w-4" /> arnav.singh@example.com
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="GitHub" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
