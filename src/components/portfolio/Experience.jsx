import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowUpRight } from "lucide-react";
import { experience } from "../../data/portfolio";
import { SectionHeader } from "./About";

export const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experience[activeIdx];

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative section-glow py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader index="02" title="Experience" subtitle="Where I've built things" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-4 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-pink/40 via-white/[0.06] to-transparent" />
            <div className="space-y-2">
              {experience.map((exp, i) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveIdx(i)}
                  data-testid={`experience-tab-${i}`}
                  className={`relative w-full text-left pl-10 pr-5 py-5 rounded-xl transition-all duration-300 ${
                    activeIdx === i
                      ? "bg-white/[0.04] border border-white/[0.08]"
                      : "hover:bg-white/[0.02] border border-transparent"
                  }`}
                >
                  <span
                    className={`absolute left-1.5 top-7 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      activeIdx === i
                        ? "bg-pink border-pink shadow-[0_0_16px_rgba(255,16,122,0.7)]"
                        : "bg-[#07070a] border-white/30"
                    }`}
                  />
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
                    {exp.period}
                  </p>
                  <p className="text-white font-display text-2xl mt-1">
                    {exp.company}
                  </p>
                  <p className="text-white/55 text-sm mt-0.5 font-light">
                    {exp.role}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Active panel */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight">
                    {active.role}{" "}
                    <span className="text-pink">@ {active.company}</span>
                  </h3>
                  <div className="flex items-center gap-5 mt-3 text-white/50 text-sm font-mono tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} /> {active.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {active.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-white/65 text-base md:text-lg leading-relaxed font-light max-w-3xl">
                {active.summary}
              </p>

              <div className="mt-10">
                <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/45 mb-5">
                  Key projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {active.projects.map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      data-testid={`project-card-${i}`}
                      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-pink/30 transition-colors duration-500 overflow-hidden"
                    >
                      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink/10 via-transparent to-transparent pointer-events-none" />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-white font-medium text-lg leading-tight">
                            {p.name}
                          </h4>
                          <ArrowUpRight
                            size={18}
                            className="text-white/40 group-hover:text-pink transition-colors duration-300 shrink-0"
                          />
                        </div>
                        <p className="text-white/55 text-sm mt-2 leading-relaxed font-light">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[10px] uppercase tracking-wider text-white/65 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
