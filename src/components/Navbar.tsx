import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Why ATS", href: "#why-ats" },
  { label: "Structure", href: "#structure" },
  { label: "Formatting", href: "#formatting" },
  { label: "Typography", href: "#typography" },
  { label: "Preview", href: "#preview" },
  { label: "Keywords", href: "#keywords" },
  { label: "HR Tips", href: "#hr-tips" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isClickScrolling = useRef(false);

  const handleMoveLink = (href: string) => {
    const id = href.replace("#", "");
    setActiveSection(id);
  };

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scroll-spy: calculate active section from scroll position ── */
  useEffect(() => {
    const handleScrollSpy = () => {
      // Skip detection during click-scrolling to avoid fighting
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY + window.innerHeight * 0.3;

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // initial check
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleLinkClick = (href: string) => {
    const id = href.replace("#", "");
    setMobileOpen(false);
    setActiveSection(id);

    // Temporarily pause scroll-spy so it doesn't fight the click
    isClickScrolling.current = true;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-accent-400 rounded-full border-2 border-slate-950" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight font-heading">
                Resume<span className="text-primary-400">Ostad</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {/* Active background — simple CSS, no spring animation */}
                    <span
                      className={`absolute inset-0 rounded-lg transition-opacity duration-200 ${
                        isActive
                          ? "opacity-100 bg-white/8 border border-white/8"
                          : "opacity-0"
                      }`}
                    />
                    {/* Active bottom accent line */}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-primary-400 transition-all duration-200 ${
                        isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#preview"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#preview");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
              >
                See Example
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-20 px-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                      handleMoveLink(link.href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 text-lg rounded-xl transition-colors ${
                      isActive
                        ? "text-white bg-white/10 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-primary-400" : "bg-slate-600"
                      }`}
                    />
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
