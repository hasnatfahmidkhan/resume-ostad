import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyATS, ResumeStructure, FormattingRules, TypographyGuide, ATSKeywords, HRChecklist } from "./components/Sections";
import { ResumePreview } from "./components/ResumePreview";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyATS />
      <ResumeStructure />
      <FormattingRules />
      <TypographyGuide />
      <ResumePreview />
      <ATSKeywords />
      <HRChecklist />
      <Footer />
    </div>
  );
}
