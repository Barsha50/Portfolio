import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { profile } from "../../data/portfolio";

export const Footer = () => {
  return (
    <footer
      data-testid="main-footer"
      className="relative border-t border-white/[0.06] py-10 px-6 md:px-12 bg-[#07070a] lg:py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
          © {new Date().getFullYear()} {profile.name} — Built with{" "}
          <Heart size={11} className="inline text-pink fill-pink" /> & React
        </p>
        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: profile.socials.github, name: "github" },
            { Icon: Linkedin, href: profile.socials.linkedin, name: "linkedin" },
            { Icon: Twitter, href: profile.socials.twitter, name: "twitter" },
          ].map(({ Icon, href, name }) => (
            <a
              key={name}
              href={href}
              data-testid={`footer-social-${name}`}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-pink/50 hover:bg-white/[0.03] transition-all"
              aria-label={name}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
