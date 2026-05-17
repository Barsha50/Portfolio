import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Twitter } from "lucide-react";
import { profile, stack } from "../../data/portfolio";
import resume from "../../Asset/Resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen hero-glow overflow-hidden pt-28 pb-20 lg:pt-36"
    >
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -top-20 -left-24 h-[420px] w-[420px] rounded-full bg-pink/20 blur-[120px] float-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-pink-deep/15 blur-[140px] float-blob" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-8">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.3em] uppercase text-pink mb-7 flex items-center gap-3"
            data-testid="hero-overline"
          >
            <span className="inline-block w-10 h-px bg-pink" />
            Portfolio · 2025
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-[0.95] tracking-tighter"
            data-testid="hero-title"
          >
            Hi, I'm <span className="gradient-text">Barsha</span>
            <br />
            <span className="text-white/95">crafting smooth</span>
            <br />
            <span className="text-white/60">digital experiences.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-xl text-base md:text-lg text-white/55 leading-relaxed font-light"
            data-testid="hero-subtitle"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              download
              href={resume}
              data-testid="hero-cta-primary"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 bg-gradient-to-r from-pink to-pink-deep text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(255,16,122,0.5)]"
            >
              Download Resume
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:rotate-[-45deg]"
              />
            </a>
            <a
              href="#projects"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 border border-white/10 text-white/85 font-medium hover:border-pink/50 hover:text-white transition-colors duration-300"
            >
              See my work
            </a>

            <div className="flex items-center gap-1.5 ml-2">
              {[
                { Icon: Github, href: profile.socials.github, name: "github" },
                {
                  Icon: Linkedin,
                  href: profile.socials.linkedin,
                  name: "linkedin",
                },
              ].map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  data-testid={`hero-social-${name}`}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-pink/50 hover:bg-white/[0.03] transition-all"
                  aria-label={name}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Stats / visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-md p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-pink/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-pink pulse-dot" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">
                  Available for work
                </span>
              </div>
              <div className="space-y-5">
                <Stat label="B.Tech CGPA" value="8.94" />
                <Stat label="Experience" value="1yr+" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee
      <div className="relative mt-24 border-y border-white/[0.06] py-6 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-white/20 tracking-tighter"
            >
              {s} <span className="text-pink">✦</span>
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div className="flex items-end justify-between border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
      {label}
    </span>
    <span className="font-display text-3xl text-white">{value}</span>
  </div>
);
