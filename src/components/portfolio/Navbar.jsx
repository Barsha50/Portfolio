import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="main-navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#07070a]/80 border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#home"
          data-testid="nav-logo"
          className="font-display text-2xl text-white tracking-tighter"
        >
          barsha<span className="text-pink">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase()}-link`}
                className={`relative font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active === l.href
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-pink to-pink-soft"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-testid="nav-cta-button"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-pink to-pink-deep text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,16,122,0.45)] hover:-translate-y-0.5"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#07070a]/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}-link`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.18em] text-white/70 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};
