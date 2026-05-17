import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../../data/portfolio";
import { SectionHeader } from "./About";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }

    try {
      setSending(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);

        toast.success("Message captured! I'll reach out soon. ✨");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSent(false), 3500);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative section-glow py-12 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="05"
          title="Let's build something."
          subtitle="Get in touch"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
              Got a project, a role or just an idea you want to talk about? Drop
              a line — I read every message.
            </p>

            <div className="space-y-3 pt-2">
              <InfoRow
                Icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                testId="contact-email"
              />
              <InfoRow
                Icon={Phone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
                testId="contact-phone"
              />
              <InfoRow
                Icon={MapPin}
                label="Location"
                value={profile.location}
                testId="contact-location"
              />
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-pink mb-2">
                Currently
              </p>
              <p className="text-white font-medium">
                Open to roles & freelance
              </p>
              <p className="text-white/50 text-sm mt-1 font-light">
                Replies usually within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-white/[0.06] bg-white/[0.03] p-8 md:p-10 contact-form relative overflow-hidden"
            data-testid="contact-form"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-pink/15 blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Jane Doe"
                testId="contact-name-input"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="jane@studio.com"
                testId="contact-email-input"
              />
              <div className="md:col-span-2">
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Project enquiry"
                  testId="contact-subject-input"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-white/45 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder="Tell me a little about what you're building…"
                  data-testid="contact-message-input"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-pink focus:shadow-[0_0_0_3px_rgba(255,16,122,0.12)] transition-all resize-none font-light"
                />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between flex-wrap gap-4 relative">
              <p className="text-white/40 text-xs font-mono">
                Will be sent to {profile.email}
              </p>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit-button"
                className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 bg-gradient-to-r from-pink to-pink-deep text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,16,122,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Sent
                  </>
                ) : sending ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send message
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  testId,
}) => (
  <div>
    <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-white/45 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testid={testId}
      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-pink focus:shadow-[0_0_0_3px_rgba(255,16,122,0.12)] transition-all font-light"
    />
  </div>
);

const InfoRow = ({ Icon, label, value, href, testId }) => {
  const Inner = (
    <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-pink/30 transition-colors">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink/20 to-pink/5 border border-pink/20 flex items-center justify-center text-pink">
        <Icon size={16} />
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/45">
          {label}
        </p>
        <p className="text-white text-sm md:text-base mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} data-testid={testId} className="block">
      {Inner}
    </a>
  ) : (
    <div data-testid={testId}>{Inner}</div>
  );
};
