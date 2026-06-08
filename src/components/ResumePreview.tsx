import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { FileText, Code2, Paintbrush } from "lucide-react";

type ResumeType = "designer" | "developer";

export function ResumePreview() {
  const [activeResume, setActiveResume] = useState<ResumeType>("developer");

  return (
    <section id="preview" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Live Preview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-heading">
            Resume{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Example
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-8">
            See exactly how an ATS-friendly resume looks. Switch between designer and developer examples.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl glass">
            <button
              onClick={() => setActiveResume("designer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeResume === "designer"
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Paintbrush className="w-4 h-4" />
              Designer
            </button>
            <button
              onClick={() => setActiveResume("developer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeResume === "developer"
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4" />
              Developer
            </button>
          </div>
        </AnimatedSection>

        {/* Resume container */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeResume === "designer" ? (
              <motion.div
                key="designer"
                initial={{ opacity: 0, y: 20, rotateY: -5 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -20, rotateY: 5 }}
                transition={{ duration: 0.4 }}
              >
                <DesignerResume />
              </motion.div>
            ) : (
              <motion.div
                key="developer"
                initial={{ opacity: 0, y: 20, rotateY: 5 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -20, rotateY: -5 }}
                transition={{ duration: 0.4 }}
              >
                <DeveloperResume />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function DesignerResume() {
  return (
    <div className="resume-paper rounded-2xl p-8 sm:p-10 leading-relaxed">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-4">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide font-heading">
          HASNAT FAHMID KHAN
        </h1>
        <p className="text-sm text-gray-600 mt-1 font-heading">
          Graphic Designer | Brand Designer | Visual Designer
        </p>
        <p className="text-xs text-gray-500 mt-2">
          hasnat@email.com • +8801XXXXXXXXX • Portfolio Website • LinkedIn • Behance
        </p>
      </div>

      {/* Summary */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Professional Summary
        </h2>
        <p className="text-xs text-gray-700 leading-relaxed">
          Creative Graphic Designer with 2+ years of experience creating branding, social media creatives, 
          marketing materials, and digital assets. Proficient in Adobe Photoshop, Illustrator, InDesign, and Figma. 
          Strong understanding of visual communication, typography, color theory, and brand identity design.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Core Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-8">
          <div>
            <p className="text-xs text-gray-800 font-semibold mb-1">Design Skills:</p>
            <p className="text-xs text-gray-600">
              Branding, Logo Design, Visual Identity Design, Typography, Print Design, 
              Packaging Design, Social Media Design, Layout Design, UI Design, Illustration
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-800 font-semibold mb-1">Software Skills:</p>
            <p className="text-xs text-gray-600">
              Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Figma, Canva, 
              Adobe After Effects, Adobe XD
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Work Experience
        </h2>
        <div className="mb-3">
          <div className="flex justify-between items-baseline">
            <p className="text-xs font-bold text-gray-900">Graphic Designer</p>
            <p className="text-xs text-gray-500">January 2024 – Present</p>
          </div>
          <p className="text-xs text-gray-600 italic">ABC Creative Agency</p>
          <ul className="mt-1 space-y-0.5">
            <li className="text-xs text-gray-700">• Designed 150+ social media creatives for clients across multiple industries</li>
            <li className="text-xs text-gray-700">• Created brand identity systems including logos, color palettes, and typography guidelines</li>
            <li className="text-xs text-gray-700">• Collaborated with marketing teams to improve campaign visual performance</li>
            <li className="text-xs text-gray-700">• Developed print materials including brochures, flyers, banners, and packaging designs</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-baseline">
            <p className="text-xs font-bold text-gray-900">Freelance Graphic Designer</p>
            <p className="text-xs text-gray-500">2022 – Present</p>
          </div>
          <ul className="mt-1 space-y-0.5">
            <li className="text-xs text-gray-700">• Worked with local and international clients on branding and marketing projects</li>
            <li className="text-xs text-gray-700">• Designed logos, business cards, social media assets, and promotional materials</li>
          </ul>
        </div>
      </div>

      {/* Portfolio */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Portfolio Projects
        </h2>
        <div className="space-y-2">
          <div>
            <p className="text-xs font-bold text-gray-900">Brand Identity Design – Coffee Shop</p>
            <p className="text-xs text-gray-600">Created logo, packaging, and social media assets. Developed complete visual identity guidelines.</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900">Social Media Campaign Design</p>
            <p className="text-xs text-gray-600">Designed 30+ promotional posts. Improved engagement through visually consistent branding.</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Education
        </h2>
        <p className="text-xs font-bold text-gray-900">Diploma in Computer Science</p>
        <p className="text-xs text-gray-600">NACTAR / Polytechnic Institute — Expected Graduation: 2027</p>
      </div>

      {/* Certifications */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Certifications
        </h2>
        <p className="text-xs text-gray-700">
          Google UX Design Certificate • Adobe Certified Professional • Graphic Design Masterclass • Figma UI Design Course
        </p>
      </div>
    </div>
  );
}

function DeveloperResume() {
  return (
    <div className="resume-paper rounded-2xl p-8 sm:p-10 leading-relaxed">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-4">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide font-heading">
          HASNAT FAHMID KHAN
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
          <p className="text-xs text-gray-500">
            Email • GitHub • LinkedIn • Portfolio
          </p>
          <p className="text-xs text-gray-500 font-mono">+88 01709-076240</p>
        </div>
        <p className="text-sm text-gray-700 font-semibold mt-2 font-heading tracking-widest">
          FRONTEND DEVELOPER
        </p>
      </div>

      {/* Career Objective */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Career Objective
        </h2>
        <p className="text-xs text-gray-700 leading-relaxed">
          Seeking a Frontend Developer position to apply my skills in React, Next.js, Node.js, TypeScript, 
          PostgreSQL, MongoDB, and API development. Eager to work in a collaborative environment, learn 
          from experienced professionals, and contribute to building user-friendly and efficient web applications.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Technical Skills
        </h2>
        <div className="space-y-1.5">
          <div className="flex">
            <span className="text-xs font-bold text-gray-800 w-48 shrink-0">Frontend:</span>
            <span className="text-xs text-gray-600">Next.js, React, TypeScript, JavaScript, Tailwind, Bootstrap 5</span>
          </div>
          <div className="flex">
            <span className="text-xs font-bold text-gray-800 w-48 shrink-0">Backend:</span>
            <span className="text-xs text-gray-600">TypeScript, Express.js, Node.js, Firebase (Auth, Hosting), MongoDB, NeonDB</span>
          </div>
          <div className="flex">
            <span className="text-xs font-bold text-gray-800 w-48 shrink-0">Version Control & Deploy:</span>
            <span className="text-xs text-gray-600">Git, GitHub, Vercel, Netlify</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
          Projects
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="text-xs font-bold text-gray-900">Tastio — Multi-Vendor Food Review & Discovery Platform</p>
              <p className="text-xs text-primary-600">Live Link | GitHub Link</p>
            </div>
            <ul className="mt-1 space-y-0.5">
              <li className="text-xs text-gray-700">• Built multi-role dashboard for customers, restaurant owners, and admins</li>
              <li className="text-xs text-gray-700">• Created smart search and filters for food discovery by category, price, and rating</li>
              <li className="text-xs text-gray-700">• Designed community space with food reviews and contributor leaderboard</li>
            </ul>
            <p className="text-xs text-gray-500 mt-1">
              Tech Stack: React 19, TanStack Query, MongoDB (Aggregations), Express.js, Firebase Auth
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="text-xs font-bold text-gray-900">ScholarStream — Global Scholarship Discovery & Application Portal</p>
              <p className="text-xs text-primary-600">Live Link | GitHub Link</p>
            </div>
            <ul className="mt-1 space-y-0.5">
              <li className="text-xs text-gray-700">• Built platform connecting students with global scholarships with Stripe payment</li>
              <li className="text-xs text-gray-700">• Designed separate dashboards for Students, Moderators, and Admins</li>
              <li className="text-xs text-gray-700">• Added Dark Mode, advanced filters, and visual analytics charts</li>
            </ul>
            <p className="text-xs text-gray-500 mt-1">
              Tech Stack: React 19, MongoDB, Express.js, Firebase Auth, Stripe
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="text-xs font-bold text-gray-900">Green Fabric — T-shirt E-commerce Web App</p>
              <p className="text-xs text-primary-600">Live Link | GitHub Link</p>
            </div>
            <ul className="mt-1 space-y-0.5">
              <li className="text-xs text-gray-700">• Users can browse, search, and view detailed product pages</li>
              <li className="text-xs text-gray-700">• Added secure login and product management for users</li>
              <li className="text-xs text-gray-700">• Enabled smooth image uploads and clean product management</li>
            </ul>
            <p className="text-xs text-gray-500 mt-1">
              Tech Stack: Next.js 16, Firebase, Express.js, MongoDB, React Hook Form, React Query
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Education
        </h2>
        <p className="text-xs text-gray-700">
          Diploma in Computer Science & Technology — Bogura Polytechnic Institute
        </p>
      </div>

      {/* Language */}
      <div>
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Language
        </h2>
        <p className="text-xs text-gray-700">Bangla (Native) • English (Intermediate)</p>
      </div>
    </div>
  );
}
