import React from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./About";
import { Code2, Server, Database, Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "C# / .NET", level: 88 },
      { name: "Java", level: 72 },
      { name: "C / C++", level: 70 },
      { name: "SQL", level: 86 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    skills: [
      { name: "React.js", level: 92 },
      { name: "ASP.NET Core", level: 88 },
      { name: "Node.js / Express", level: 80 },
      { name: "Fluent UI", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL Server", level: 88 },
      { name: "Azure", level: 72 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman / Swagger", level: 85 },
    ],
  },
];

export const Skills = () => {
  const ref = React.useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-24 lg:py-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <SectionHeader
          index="04"
          title="Skills"
          subtitle="Tools of the trade"
        />

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-7
                  shadow-[0_0_40px_rgba(255,16,122,0.06)]
                  hover:border-pink/25
                  transition-all
                  duration-500
                "
              >
                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,16,122,0.14),transparent_50%)] pointer-events-none" />

                {/* Top row: icon + sparkle */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      flex items-center justify-center
                      bg-gradient-to-br from-pink/25 to-pink/5
                      border border-pink/20
                      shadow-[0_0_24px_rgba(255,16,122,0.18)]
                    "
                  >
                    <Icon className="w-6 h-6 text-pink" strokeWidth={2} />
                  </div>

                  <Sparkles className="w-5 h-5 text-pink/35" />
                </div>

                {/* Title + divider */}
                <div className="relative z-10 mb-8">
                  <h3 className="font-display text-[1.6rem] font-black text-white tracking-tight leading-none">
                    {group.title}
                  </h3>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-pink/35 to-transparent" />
                </div>

                {/* Skill rows */}
                <div className="relative z-10 space-y-6">
                  {group.skills.map((skill, i) => (
                    <div key={skill.name}>
                      {/* Name + % */}
                      <div className="flex items-center justify-between mb-[7px]">
                        <span className="text-white/90 text-[15px] font-medium tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-pink text-xs font-mono font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress track */}
                      <div className="relative h-[5px] w-full rounded-full bg-white/5 overflow-hidden">
                        {/* Animated fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay: gi * 0.12 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            relative h-full rounded-full
                            bg-gradient-to-r from-pink via-[#ff4fa0] to-[#ffd6ea]
                            shadow-[0_0_12px_rgba(255,16,122,0.5)]
                          "
                        >
                          {/* Shimmer overlay */}
                          <span className="absolute inset-0 shimmer-overlay opacity-60" />
                        </motion.div>

                        {/* Glow dot at tip */}
                        <motion.div
                          initial={{ left: 0 }}
                          animate={
                            inView
                              ? { left: `calc(${skill.level}% - 5px)` }
                              : { left: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay: gi * 0.12 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
                            absolute top-1/2 -translate-y-1/2
                            w-2.5 h-2.5 rounded-full
                            bg-white
                            shadow-[0_0_14px_rgba(255,16,122,0.85)]
                          "
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink/40 to-transparent opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};