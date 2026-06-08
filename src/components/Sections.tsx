import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Type,
  Ruler,
  AlignLeft,
  FileText,
  Briefcase,
  User,
  Wrench,
  FolderOpen,
  GraduationCap,
  Award,
  Info,
  Target,
  Zap,
  Eye,
  Clock,
  Search,
  Layout,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────── WHY ATS ─────────────────────────── */
export function WhyATS() {
  const stats = [
    { value: "98.8%", label: "of Fortune 500 use ATS", icon: Search },
    { value: "75%", label: "resumes never seen by humans", icon: Eye },
    { value: "6–10", label: "seconds average recruiter scan", icon: Clock },
    { value: "1", label: "page ideal for junior roles", icon: FileText },
  ];

  return (
    <section
      id="why-ats"
      className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-semibold font-heading mb-4">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Why Most Designer Resumes{" "}
            <span className="bg-linear-to-r from-danger-400 to-danger-500 bg-clip-text text-transparent">
              Fail
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Many designers create visually beautiful resumes that ATS cannot
            read properly. For online applications,{" "}
            <span className="text-white font-semibold">
              ATS compatibility should come first
            </span>
            .
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-400 mb-4" />
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
                <div className="absolute inset-0 rounded-2xl border border-primary-500/0 group-hover:border-primary-500/20 transition-colors" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Visual comparison */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What fails */}
            <div className="relative p-8 rounded-2xl border border-danger-500/20 bg-danger-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-danger-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-danger-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  ATS Rejects These
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Two-column layouts",
                  "Icons for contact info",
                  "Text boxes & tables",
                  "Graphics showing skill %",
                  "Complex infographics",
                  "Headers/footers with info",
                  "Non-standard fonts",
                  "Images & decorative elements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <XCircle className="w-4 h-4 text-danger-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What works */}
            <div className="relative p-8 rounded-2xl border border-accent-500/20 bg-accent-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  ATS Loves These
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Single-column layout",
                  "Black text on white background",
                  "Standard section headings",
                  "PDF format (or DOCX)",
                  "Professional fonts",
                  "Clear hierarchy",
                  "Keyword-rich content",
                  "Simple, clean formatting",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────── RESUME STRUCTURE ─────────────────────────── */
const resumeSections = [
  {
    number: "01",
    icon: User,
    title: "Header",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Keep it simple and professional. Use plain text — no icons.
        </p>
        <div className="p-3 rounded-xl bg-slate-800/50 text-xs text-slate-300 space-y-1 leading-relaxed">
          <div className="text-white font-extrabold font-heading tracking-wide text-sm">
            HASNAT FAHMID KHAN
          </div>
          <div className="text-primary-400 font-medium">
            Graphic Designer | Brand Designer | Visual Designer
          </div>
          <div className="text-slate-400">
            hasnat@email.com | +8801XXXXXXXXX
          </div>
          <div className="text-slate-400">
            Portfolio Website | LinkedIn | Behance
          </div>
          <div className="mt-2 pt-2 border-t border-white/5 text-emerald-400/70 text-[10px] font-semibold">
            ✓ No icons — ATS can read every character
          </div>
        </div>
      </>
    ),
  },
  {
    number: "02",
    icon: AlignLeft,
    title: "Professional Summary",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Write 3–4 impactful lines summarizing your value.
        </p>
        <div className="p-3 rounded-xl bg-slate-800/50 text-xs text-slate-400 italic">
          Creative Graphic Designer with 2+ years of experience creating
          branding, social media creatives, marketing materials, and digital
          assets. Proficient in Adobe Photoshop, Illustrator, InDesign, and
          Figma...
        </div>
      </>
    ),
  },
  {
    number: "03",
    icon: Wrench,
    title: "Core Skills",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Extremely important for ATS keyword matching.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Branding",
            "Logo Design",
            "Typography",
            "Print Design",
            "UI Design",
            "Illustration",
            "Photoshop",
            "Illustrator",
            "Figma",
            "InDesign",
          ].map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20"
            >
              {s}
            </span>
          ))}
        </div>
      </>
    ),
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Work Experience",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Use achievement-based bullet points with metrics.
        </p>
        <div className="space-y-1 text-xs text-slate-400">
          <div className="text-orange-400 font-semibold">
            Designed 150+ social media creatives
          </div>
          <div>Created brand identity systems including logos</div>
          <div>Collaborated with marketing teams</div>
        </div>
      </>
    ),
  },
  {
    number: "05",
    icon: FolderOpen,
    title: "Portfolio Projects",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    textColor: "text-pink-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Recruiters love this section. Show your best work.
        </p>
        <div className="space-y-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ArrowRight className="w-3 h-3 text-pink-400" />
            <span>Brand Identity Design – Coffee Shop</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-3 h-3 text-pink-400" />
            <span>Social Media Campaign Design</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-3 h-3 text-pink-400" />
            <span>Event Branding Project</span>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Education",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Keep it concise. Include relevant coursework.
        </p>
        <div className="p-3 rounded-xl bg-slate-800/50 text-xs text-slate-300">
          <div className="font-bold">Diploma in Computer Science</div>
          <div className="text-slate-400">NACTAR / Polytechnic Institute</div>
          <div className="text-slate-500">Expected Graduation: 2027</div>
        </div>
      </>
    ),
  },
  {
    number: "07",
    icon: Award,
    title: "Certifications",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Boost credibility with industry certifications.
        </p>
        <div className="space-y-1 text-xs text-slate-400">
          <div>• Google UX Design Certificate</div>
          <div>• Adobe Certified Professional</div>
          <div>• Graphic Design Masterclass</div>
          <div>• Figma UI Design Course</div>
        </div>
      </>
    ),
  },
  {
    number: "08",
    icon: Info,
    title: "Additional Info",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    textColor: "text-teal-400",
    content: (
      <>
        <p className="text-slate-300 text-sm mb-3">
          Soft skills and languages.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "English Communication",
            "Team Collaboration",
            "Time Management",
            "Creative Problem Solving",
          ].map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-400 text-xs border border-teal-500/20"
            >
              {s}
            </span>
          ))}
        </div>
      </>
    ),
  },
];

export function ResumeStructure() {
  return (
    <section
      id="structure"
      className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            <Layout className="w-4 h-4" />
            Resume Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ATS-Friendly Resume{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Structure
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            8 essential sections every Graphic Designer's resume needs,
            optimized for both ATS and human readers.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeSections.map((section, index) => (
            <AnimatedSection
              key={section.number}
              delay={index * 0.08}
              className={
                section.number === "08" && index % 2 === 0
                  ? "md:col-span-2 md:max-w-lg md:mx-auto"
                  : ""
              }
            >
              <div
                className={`group relative p-6 rounded-2xl border ${section.borderColor} ${section.bgColor} hover:bg-opacity-20 transition-all duration-300 h-full`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${section.color} flex items-center justify-center shadow-lg`}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold font-mono ${section.textColor} opacity-60`}
                      >
                        {section.number}
                      </span>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {section.title}
                      </h3>
                    </div>
                    {section.content}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FORMATTING RULES ─────────────────────────── */
export function FormattingRules() {
  return (
    <section
      id="formatting"
      className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Do's & Don'ts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ATS Formatting{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Rules
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DO */}
          <AnimatedSection direction="left">
            <div className="p-8 rounded-2xl border border-accent-500/20 bg-accent-500/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Use These ✅</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Single-column layout",
                    desc: "Simple top-to-bottom flow",
                  },
                  {
                    title: "Black text on white background",
                    desc: "Maximum readability",
                  },
                  {
                    title: "Standard section headings",
                    desc: "e.g., Work Experience, Education",
                  },
                  {
                    title: "PDF format",
                    desc: "Unless employer requests DOCX",
                  },
                  {
                    title: "Professional fonts",
                    desc: "Calibri, Arial, Inter, Aptos",
                  },
                  {
                    title: "Clear hierarchy",
                    desc: "Consistent sizing & spacing",
                  },
                  {
                    title: "Keyword-rich content",
                    desc: "Match job description terms",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium text-sm">
                        {item.title}
                      </div>
                      <div className="text-slate-400 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* DON'T */}
          <AnimatedSection direction="right">
            <div className="p-8 rounded-2xl border border-danger-500/20 bg-danger-500/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-danger-500/20 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-danger-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Avoid These ❌
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Two-column resumes",
                    desc: "ATS can't parse multi-column layouts",
                  },
                  {
                    title: "Icons for contact info",
                    desc: "Use plain text labels instead",
                  },
                  {
                    title: "Text boxes & tables",
                    desc: "Often ignored by ATS parsers",
                  },
                  {
                    title: "Skill percentage graphics",
                    desc: "Use keyword lists instead",
                  },
                  {
                    title: "Complex infographics",
                    desc: "Beautiful but unreadable by ATS",
                  },
                  {
                    title: "Headers/footers with info",
                    desc: "Critical info should be in body",
                  },
                  {
                    title: "Non-standard fonts",
                    desc: "May not render correctly",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-danger-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium text-sm">
                        {item.title}
                      </div>
                      <div className="text-slate-400 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Resume length guide */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="p-8 rounded-2xl glass">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Ideal Resume Length
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  years: "0–3 Years",
                  length: "1 Page",
                  badge: "Junior",
                  color: "bg-accent-500",
                },
                {
                  years: "3–7 Years",
                  length: "1–2 Pages",
                  badge: "Mid",
                  color: "bg-primary-500",
                },
                {
                  years: "7+ Years",
                  length: "2 Pages",
                  badge: "Senior",
                  color: "bg-orange-500",
                },
              ].map((item) => (
                <div
                  key={item.badge}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/5"
                >
                  <div
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full ${item.color} text-white text-xs font-bold mb-3`}
                  >
                    {item.badge}
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    {item.length}
                  </div>
                  <div className="text-slate-400 text-sm">{item.years}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────────────── TYPOGRAPHY GUIDE ─────────────────────────── */
export function TypographyGuide() {
  const fontSizeRows = [
    {
      section: "Name (Top Header)",
      size: "20–24 pt",
      example: "text-2xl font-extrabold",
      text: "HASNAT FAHMID KHAN",
    },
    {
      section: "Job Title",
      size: "12–14 pt",
      example: "text-sm",
      text: "Graphic Designer | Brand Designer",
    },
    {
      section: "Section Headings",
      size: "12–14 pt",
      example: "text-sm font-bold uppercase",
      text: "PROFESSIONAL SUMMARY",
    },
    {
      section: "Company Name",
      size: "11–12 pt",
      example: "text-xs font-semibold",
      text: "ABC Creative Agency",
    },
    {
      section: "Job Position",
      size: "11–12 pt",
      example: "text-xs font-bold",
      text: "Graphic Designer",
    },
    {
      section: "Body Text / Bullets",
      size: "10–11 pt",
      example: "text-xs",
      text: "Designed 150+ social media creatives...",
    },
    {
      section: "Contact Information",
      size: "10–11 pt",
      example: "text-xs",
      text: "hasnat@email.com • +8801XXXXXXXXX",
    },
  ];

  return (
    <section
      id="typography"
      className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            <Type className="w-4 h-4" />
            Typography
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Font Sizes &{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Typography
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Clear hierarchy helps recruiters scan quickly and ATS read without
            issues.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Font size table */}
          <AnimatedSection direction="left">
            <div className="p-6 rounded-2xl glass overflow-hidden">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-primary-400" />
                Recommended Font Sizes
              </h3>
              <div className="space-y-0">
                <div className="grid grid-cols-3 gap-2 text-xs font-semibold font-heading text-slate-500 uppercase tracking-wider pb-3 border-b border-white/5">
                  <div>Section</div>
                  <div>Size</div>
                  <div>Example</div>
                </div>
                {fontSizeRows.map((row) => (
                  <div
                    key={row.section}
                    className="grid grid-cols-3 gap-2 py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="text-sm text-slate-300 font-medium font-heading">
                      {row.section}
                    </div>
                    <div className="text-sm text-primary-400 font-mono">
                      {row.size}
                    </div>
                    <div className={`${row.example} text-slate-400 truncate`}>
                      {row.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Fonts & margins */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              {/* Font recommendations */}
              <div className="p-6 rounded-2xl glass">
                <h3 className="text-lg font-bold text-white mb-4 font-heading">
                  Best Font Choices
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-heading">
                      Most ATS-Friendly
                    </div>
                    <div className="space-y-2">
                      {[
                        "Calibri",
                        "Arial",
                        "Aptos",
                        "Helvetica",
                        "Verdana",
                      ].map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                          <span className="font-mono text-xs">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-heading">
                      Designer Recommended
                    </div>
                    <div className="space-y-2">
                      {["Aptos", "Calibri", "Inter", "Source Sans Pro"].map(
                        (f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-sm text-slate-300"
                          >
                            <Zap className="w-3.5 h-3.5 text-primary-400" />
                            <span className="font-mono text-xs">{f}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Margins & spacing */}
              <div className="p-6 rounded-2xl glass">
                <h3 className="text-lg font-bold text-white mb-4 font-heading">
                  Margins & Spacing
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-heading">
                      Margins
                    </div>
                    <div className="space-y-1.5 text-sm text-slate-300">
                      <div>
                        Top:{" "}
                        <span className="text-primary-400 font-mono">
                          0.5–0.75"
                        </span>
                      </div>
                      <div>
                        Bottom:{" "}
                        <span className="text-primary-400 font-mono">
                          0.5–0.75"
                        </span>
                      </div>
                      <div>
                        Left:{" "}
                        <span className="text-primary-400 font-mono">
                          0.75"
                        </span>
                      </div>
                      <div>
                        Right:{" "}
                        <span className="text-primary-400 font-mono">
                          0.75"
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-heading">
                      Line Spacing
                    </div>
                    <div className="space-y-1.5 text-sm text-slate-300">
                      <div>
                        Body:{" "}
                        <span className="text-primary-400 font-mono">1.15</span>
                      </div>
                      <div>
                        Sections:{" "}
                        <span className="text-primary-400 font-mono">
                          8–12 pt
                        </span>
                      </div>
                      <div>
                        Bullets:{" "}
                        <span className="text-primary-400 font-mono">
                          0–3 pt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended combination */}
              <div className="p-6 rounded-2xl bg-linear-to-br from-primary-600/20 to-primary-500/10 border border-primary-500/20">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 font-heading">
                  <Sparkles className="w-5 h-5 text-primary-400" />
                  Recommended Combination
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    ["Font", "Inter"],
                    ["Name", "22pt Bold"],
                    ["Job Title", "13pt"],
                    ["Section Heading", "13pt Bold"],
                    ["Body Text", "10.5pt"],
                    ["Line Spacing", "1.15"],
                    ["Length", "1 page"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-slate-400 font-heading">
                        {label}:
                      </span>
                      <span className="text-primary-300 font-semibold font-mono">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ATS KEYWORDS ─────────────────────────── */
export function ATSKeywords() {
  const keywords = [
    "Graphic Design",
    "Visual Design",
    "Brand Identity",
    "Logo Design",
    "Typography",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Figma",
    "Social Media Design",
    "Marketing Design",
    "Print Design",
    "Packaging Design",
    "Layout Design",
    "Creative Direction",
    "Motion Graphics",
    "UI Design",
    "Digital Design",
    "Color Theory",
    "Brand Strategy",
    "Visual Communication",
    "Design Systems",
    "Responsive Design",
    "Wireframing",
    "Prototyping",
    "A/B Testing",
  ];

  return (
    <section
      id="keywords"
      className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            <Search className="w-4 h-4" />
            Keywords
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            ATS Keywords to{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Include
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Use only skills you genuinely have. These keywords help ATS systems
            match your resume to job descriptions.
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {keywords.map((keyword, i) => {
            const colors = [
              "bg-primary-500/10 text-primary-400 border-primary-500/20 hover:bg-primary-500/20",
              "bg-accent-500/10 text-accent-400 border-accent-500/20 hover:bg-accent-500/20",
              "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
              "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20",
              "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20",
              "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20",
            ];
            const colorClass = colors[i % colors.length];
            return (
              <StaggerItem key={keyword}>
                <span
                  className={`inline-block px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 cursor-default ${colorClass}`}
                >
                  {keyword}
                </span>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────── HR CHECKLIST ─────────────────────────── */
export function HRChecklist() {
  const checks = [
    {
      icon: Briefcase,
      title: "Job Title Relevance",
      desc: "Does your title match the role you're applying for?",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FolderOpen,
      title: "Portfolio Link",
      desc: "Is your portfolio URL clickable and working?",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Wrench,
      title: "Design Software Skills",
      desc: "Are your tools clearly listed with proficiency?",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Briefcase,
      title: "Recent Experience",
      desc: "Is your most recent role prominently featured?",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Target,
      title: "Quality of Projects",
      desc: "Do you showcase 5–8 high-quality projects?",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Is your education section clear and relevant?",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Type,
      title: "Grammar & Spelling",
      desc: "Zero typos. Proofread everything twice.",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section
      id="hr-tips"
      className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            Insider Knowledge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            What HR Looks For{" "}
            <span className="bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              First
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Within the first{" "}
            <span className="text-white font-semibold">10 seconds</span>,
            recruiters usually check these things:
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {checks.map((item, i) => (
            <StaggerItem
              key={item.title}
              className={
                i >= checks.length - 1 && checks.length % 4 !== 0 ? "" : ""
              }
            >
              <div className="group relative p-5 rounded-2xl glass hover:bg-white/10 transition-all duration-300 h-full">
                <div
                  className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-accent-500/30 flex items-center justify-center group-hover:border-accent-500 group-hover:bg-accent-500/10 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pro tip */}
        <AnimatedSection delay={0.4} className="mt-12">
          <div className="p-8 rounded-2xl bg-linear-to-br from-primary-600/20 to-accent-500/10 border border-primary-500/20 text-center">
            <Sparkles className="w-8 h-8 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Pro Tip</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              For designers, your{" "}
              <span className="text-primary-400 font-bold">
                portfolio often matters more
              </span>{" "}
              than the resume itself. A strong portfolio with{" "}
              <span className="text-accent-400 font-bold">
                5–8 high-quality projects
              </span>{" "}
              can outweigh a less experienced resume.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
