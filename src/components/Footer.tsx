import { AnimatedSection } from "./AnimatedSection";
import { FileText, Heart, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection className="text-center">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight font-heading">
              Resume<span className="text-primary-400">Ostad</span>
            </span>
          </div>

          <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
            Built with the goal of helping designers and developers create
            resumes that pass ATS systems and impress human recruiters. Your
            dream job starts with the right resume.
          </p>

          {/* Confidence badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-slate-300">
              Aligned with common ATS parsing practices
            </span>
          </div>

          <div className="section-divider mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 text-danger-400 fill-danger-400" />{" "}
              for job seekers in 2026
            </p>
            <p>
              {/* style something */}
              <a
                href="https://github.com/hasnatfahmidkhan/resume-ostad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                Developed by Hasnat Fahmid Khan
              </a>
            </p>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Resume Ostad. All guidelines are
              recommendations.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-2xl shadow-primary-500/30 hover:bg-primary-500 transition-colors z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
