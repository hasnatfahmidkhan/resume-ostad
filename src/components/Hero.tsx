import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Shield, Eye } from "lucide-react";

export function Hero() {
  const handleCTAClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* linear orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300 font-semibold font-heading">
              2026 Resume Standards Guide
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 font-heading"
          >
            <span className="text-white">Beat the </span>
            <span className="bg-linear-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent animate-linear">
              ATS
            </span>
            <br />
            <span className="text-white">Get the </span>
            <span className="bg-linear-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Interview
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed"
          >
            Your resume has{" "}
            <span className="text-white font-semibold">two audiences</span>: an
            algorithm that scans keywords, and a human who spends{" "}
            <span className="text-white font-semibold">5–20 seconds</span> on
            first review. Learn how to satisfy both.
          </motion.p>

          {/* Audience cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl glass group hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold font-heading">
                  ATS Scanner
                </div>
                <div className="text-slate-400 text-sm">
                  Keywords & Structure
                </div>
              </div>
            </div>
            <div className="text-slate-600 text-2xl font-light">+</div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl glass group hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold font-heading">
                  Human Recruiter
                </div>
                <div className="text-slate-400 text-sm">
                  Design & Readability
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#why-ats"
              onClick={(e) => handleCTAClick(e, "#why-ats")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1 text-lg"
            >
              Start Learning
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
            <a
              href="#preview"
              onClick={(e) => handleCTAClick(e, "#preview")}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/5 transition-all duration-300 text-lg"
            >
              See Resume Example
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-2.5 rounded-full bg-primary-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
