import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const cursorRef = useRef(null);
  const cursorSmRef = useRef(null);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dark mode toggle (class strategy)
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  // Custom cursor
  useEffect(() => {
    const big = cursorRef.current;
    const sm = cursorSmRef.current;
    if (!big || !sm) return;

    let raf;
    let bx = window.innerWidth / 2, by = window.innerHeight / 2;
    let sx = bx, sy = by;

    const move = (e) => {
      sx = e.clientX;
      sy = e.clientY;
    };

    const loop = () => {
      bx += (sx - bx) * 0.15;
      by += (sy - by) * 0.15;
      big.style.transform = `translate3d(${bx - 16}px, ${by - 16}px, 0)`;
      sm.style.transform = `translate3d(${sx - 4}px, ${sy - 4}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A192F] text-[#E6F1FF]">
      {/* Scroll progress indicator */}
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#64FFDA] via-cyan-300 to-fuchsia-400 shadow-[0_0_12px_#64FFDA] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top nav */}
      <header className="fixed inset-x-0 top-3 z-50 mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
          <a href="#home" className="text-sm font-semibold tracking-widest text-[#64FFDA]">ARNAV</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-[#8892B0] hover:text-[#E6F1FF]">About</a>
            <a href="#skills" className="text-sm text-[#8892B0] hover:text-[#E6F1FF]">Skills</a>
            <a href="#projects" className="text-sm text-[#8892B0] hover:text-[#E6F1FF]">Projects</a>
            <a href="#contact" className="text-sm text-[#8892B0] hover:text-[#E6F1FF]">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-2 text-[#E6F1FF] hover:bg-white/20"
            >
              {dark ? <Sun className="h-4 w-4 text-[#64FFDA]" /> : <Moon className="h-4 w-4 text-[#64FFDA]" />}
            </button>
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#E6F1FF] md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur md:hidden">
            <a onClick={() => setOpen(false)} href="#about" className="block rounded-lg px-3 py-2 text-[#8892B0] hover:bg-white/10">About</a>
            <a onClick={() => setOpen(false)} href="#skills" className="block rounded-lg px-3 py-2 text-[#8892B0] hover:bg-white/10">Skills</a>
            <a onClick={() => setOpen(false)} href="#projects" className="block rounded-lg px-3 py-2 text-[#8892B0] hover:bg-white/10">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block rounded-lg px-3 py-2 text-[#8892B0] hover:bg-white/10">Contact</a>
          </div>
        )}
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-[#020C1B] py-8 text-center text-xs text-[#8892B0]">
        © {new Date().getFullYear()} Arnav Singh. Crafted with data, code, and coffee.
      </footer>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#64FFDA]/50 bg-[#64FFDA]/10 shadow-[0_0_22px_#64FFDA] backdrop-blur md:block"
      />
      <div
        ref={cursorSmRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#64FFDA] shadow-[0_0_10px_#64FFDA] md:block"
      />
    </div>
  );
}

export default App;
