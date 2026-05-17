import React from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import { Code2, Palette, Sparkles, GraduationCap, Briefcase, MapPin } from "lucide-react";

const cards = [
  {
    Icon: Code2,
    title: "Engineering",
    body: "Clean, scalable code with attention to performance, accessibility and developer ergonomics.",
    color: "from-pink/20 to-pink/5 border-pink/20 text-pink",
  },
  {
    Icon: Palette,
    title: "Design Eye",
    body: "Pixel-perfect interfaces with thoughtful spacing, motion and micro-interactions.",
    color: "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
  },
  {
    Icon: Sparkles,
    title: "Curious Mind",
    body: "Always exploring new tools, patterns and experimental UI to keep work fresh.",
    color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative section-glow py-24 md:py-32 lg:py-4"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="01"
          title="About"
          subtitle="Who is behind the keyboard"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2
              data-testid="about-heading"
              className="font-display text-3xl md:text-5xl text-white tracking-tight leading-[1.05]"
            >
              I build interfaces that feel{" "}
              <span className="gradient-text">alive</span> — fast, fluid and
              focused.
            </h2>

            <p className="mt-7 text-base md:text-lg text-white/60 leading-relaxed font-light max-w-2xl">
              I'm <span className="text-white">{profile.name}</span>, a{" "}
              {profile.role.toLowerCase()} based in {profile.location}. I love
              the intersection of engineering and design — turning rough ideas
              into smooth, performant products. Outside work, you'll find me
              experimenting with motion libraries, sketching UI ideas and
              breaking things just to learn how to fix them better.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {profile.highlights.map((h) => (
                <span
                  key={h}
                  className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/70 border border-white/10 rounded-full px-4 py-2 hover:border-pink/40 hover:text-white transition-colors"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Quick info pills */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-pink" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Briefcase size={14} className="text-pink" />
                {profile.role}
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <GraduationCap size={14} className="text-pink" />
                B.Tech CSE · CGPA 8.94
              </div>
            </div>
          </motion.div>

          {/* Right: Cards instead of photo */}
          <div className="lg:col-span-5 space-y-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br border flex items-center justify-center ${card.color}`}>
                  <card.Icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-base">{card.title}</h4>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed font-light">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({ index, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="flex items-end justify-between gap-6 flex-wrap"
  >
    <div>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-pink flex items-center gap-3">
        <span className="inline-block w-8 h-px bg-pink" />
        {index} — {subtitle}
      </p>
      <h2 className="font-display text-4xl md:text-6xl text-white tracking-tighter mt-4">
        {title}
      </h2>
    </div>
  </motion.div>
);
