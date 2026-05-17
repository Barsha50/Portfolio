import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Layers, Star } from "lucide-react";
import { projects } from "../../data/portfolio";
import { SectionHeader } from "./About";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const categoryColors = {
  "Machine Learning": "from-violet-500/20 to-purple-500/10 border-violet-500/20 text-violet-300",
  "Frontend": "from-cyan-500/20 to-blue-500/10 border-cyan-500/20 text-cyan-300",
  "Full Stack": "from-pink/20 to-pink-deep/10 border-pink/20 text-pink",
  "Backend": "from-emerald-500/20 to-teal-500/10 border-emerald-500/20 text-emerald-300",
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-pink/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          index="03"
          title="Projects"
          subtitle="Things I've shipped"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative font-mono text-[11px] uppercase tracking-[0.22em] px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-pink to-pink-deep text-white border-pink/60 shadow-[0_0_20px_rgba(255,16,122,0.35)]"
                  : "border-white/10 text-white/55 hover:border-pink/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const colorClass = categoryColors[project.category] || "from-white/10 to-white/5 border-white/10 text-white/60";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-7 overflow-hidden transition-all duration-500 hover:border-pink/20 hover:bg-white/[0.035]"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br from-pink/8 via-transparent to-violet-500/5 pointer-events-none" />

      {/* Top glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink/20 to-pink/5 border border-pink/15 flex items-center justify-center shadow-[0_0_16px_rgba(255,16,122,0.12)]">
              <Layers className="w-5 h-5 text-pink" strokeWidth={2} />
            </div>
            <div>
              <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] px-3 py-1 rounded-full bg-gradient-to-r border ${colorClass}`}>
                {project.featured && <Star className="w-2.5 h-2.5 fill-current" />}
                {project.category}
              </span>
            </div>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-1.5 shrink-0">
            {project.github && (
              <a
                href={project.github}
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pink/40 hover:bg-pink/10 transition-all duration-300"
              >
                <Github size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                aria-label="Live demo"
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-pink/40 hover:bg-pink/10 transition-all duration-300"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight group-hover:text-pink transition-colors duration-300 flex items-center gap-2">
          {project.name}
          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 text-pink transition-all duration-300 -translate-y-1 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-1.5" />
        </h3>

        {/* Description */}
        <p className="mt-3 text-white/55 text-sm leading-relaxed font-light">
          {project.desc}
        </p>

        {/* Highlight stat */}
        <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-pink mb-1">Highlight</p>
          <p className="text-white/70 text-sm font-light leading-relaxed">{project.highlights}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider text-white/60 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:border-pink/30 hover:text-white/80 transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
