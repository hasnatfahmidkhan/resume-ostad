<div align="center">

# 📄 Resume Ostad

### Beat the ATS. Get the Interview.

A modern, animated landing page built to help Graphic Designers and Frontend Developers create ATS-friendly resumes that pass Applicant Tracking Systems AND impress human recruiters.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

[🌐 **Live Demo**](#) · [📖 **Documentation**](#-about) · [🚀 **Quick Start**](#-quick-start) · [🤝 **Contributing**](#-contributing)

</div>

---

## 🖼️ Preview

<div align="center">
  <img src="https://res.cloudinary.com/dye6u4hpt/image/upload/q_auto/f_auto/v1780889932/Screenshot_2026-06-08_093739_sfrt0w.png" alt="Preview coming soon" />
</div>

> A fully animated, responsive single-page application with dark theme, glassmorphism effects, scroll-spy navigation, and interactive resume previews.

---

## 📖 About

When you apply for jobs online, your resume goes through **two audiences**:

| Audience                               | What They Look For                                    |
| -------------------------------------- | ----------------------------------------------------- |
| 🤖 **ATS (Applicant Tracking System)** | Keywords, structure, formatting                       |
| 👁️ **Human Recruiter**                 | Visual appeal, readability, portfolio (5–20 sec scan) |

Many designers create visually stunning resumes that **ATS cannot read**. This project is a comprehensive, interactive guide that teaches you how to build a resume that satisfies both audiences.

### Key Facts

- **98.8%** of Fortune 500 companies use ATS
- **75%** of resumes are never seen by a human
- Recruiters spend **6–10 seconds** on initial scan
- **1 page** is ideal for junior roles (0–3 years)

---

## ✨ Features

### 🎨 Design & UX

- **Dark theme** with glassmorphism card effects
- **Smooth scroll-triggered animations** powered by Framer Motion
- **Scroll-spy navigation** — active section highlighted in real-time
- **Responsive design** — looks great on mobile, tablet, and desktop
- **Animated gradient backgrounds** with grid patterns
- **Custom scrollbar** styling

### 📋 Content Sections

| Section                 | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| 🏠 **Hero**             | Animated landing with dual-audience cards                |
| ⚠️ **Why ATS**          | Statistics + Do's vs Don'ts comparison                   |
| 🏗️ **Resume Structure** | 8 essential resume sections with live mini-examples      |
| ✅ **Formatting Rules** | ATS-approved formatting with length guide                |
| 🔤 **Typography Guide** | Font sizes, families, margins & spacing specs            |
| 📄 **Resume Preview**   | Interactive toggle between Designer & Developer examples |
| 🔑 **ATS Keywords**     | Animated keyword cloud with 26+ essential terms          |
| 👁️ **HR Tips**          | What recruiters check in the first 10 seconds            |

### 📄 Interactive Resume Preview

- Toggle between **Graphic Designer** and **Frontend Developer** resume examples
- Realistic paper-style rendering
- Both examples are **100% ATS-compliant**
- Smooth 3D flip animation on toggle

---

## 🛠️ Tech Stack

| Technology                                            | Purpose                              |
| ----------------------------------------------------- | ------------------------------------ |
| **[React 19](https://react.dev/)**                    | UI library                           |
| **[TypeScript 5.9](https://www.typescriptlang.org/)** | Type safety                          |
| **[Tailwind CSS 4](https://tailwindcss.com/)**        | Utility-first styling                |
| **[Vite 7](https://vitejs.dev/)**                     | Build tool & dev server              |
| **[Framer Motion 12](https://motion.dev/)**           | Scroll animations & transitions      |
| **[Lucide React](https://lucide.dev/)**               | Consistent icon system               |
| **Google Fonts**                                      | Space Grotesk, Inter, JetBrains Mono |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/hasnatfahmid/ats-resume-guide.git

# Navigate to project directory
cd resume-ostad

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at **`http://localhost:5173`**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
resume-ostad/
├── index.html                  # Entry HTML with Google Fonts
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
│
├── public/                     # Static assets
│
└── src/
    ├── main.tsx                # React DOM entry point
    ├── App.tsx                 # Root component (assembles all sections)
    ├── index.css               # Tailwind imports, custom theme, animations
    │
    ├── components/
    │   ├── Navbar.tsx          # Scroll-spy navigation with mobile menu
    │   ├── Hero.tsx            # Animated hero with gradient orbs
    │   ├── Sections.tsx        # All content sections (WhyATS, Structure, etc.)
    │   ├── ResumePreview.tsx   # Interactive designer/developer resume toggle
    │   ├── Footer.tsx          # Footer with scroll-to-top button
    │   └── AnimatedSection.tsx # Reusable scroll-triggered animation wrappers
    │
    └── utils/
        └── cn.ts               # Tailwind class merging utility
```

---

## 🎯 Resume Guidelines Covered

### ✅ What This Guide Teaches

- Single-column layout structure
- ATS-friendly formatting rules
- Proper font sizes and typography hierarchy
- Keyword optimization for ATS scanning
- Achievement-based bullet point writing
- How to format contact information (no icons!)
- Ideal resume length by experience level
- Section heading best practices

### ❌ What ATS Rejects

- Two-column layouts
- Icons/emoji for contact information
- Text boxes and tables
- Skill percentage graphics
- Complex infographics
- Non-standard fonts
- Images and decorative elements

### 💡 Pro Tips Included

- **For Designers**: Portfolio matters more than resume — 5–8 strong projects
- **For Developers**: Highlight tech stack with live links
- **For Everyone**: Your resume has two audiences — satisfy both

---

## 🎨 Typography

| Font               | Weight  | Usage                                 |
| ------------------ | ------- | ------------------------------------- |
| **Space Grotesk**  | 300–700 | Headings, badges, labels              |
| **Inter**          | 100–900 | Body text, descriptions               |
| **JetBrains Mono** | 100–800 | Code snippets, values, monospace data |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Ideas for Contributions

- [ ] Add more resume templates (Data Analyst, Product Manager, etc.)
- [ ] Dark/light theme toggle
- [ ] Interactive ATS score checker
- [ ] PDF resume builder
- [ ] Multi-language support
- [ ] Add unit tests

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Hasnat Fahmid Khan**

[![Email](https://img.shields.io/badge/Email-hasnat@email.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:hasnat@email.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/hasnatfahmid)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/hasnatfahmid)
[![Portfolio](https://img.shields.io/badge/Portfolio-Website-FF6B6B?style=flat-square&logo=about.me&logoColor=white)](#)

</div>

---

<div align="center">

### ⭐ If this helped you, give it a star!

**Made with ❤️ for job seekers in 2026**

_These guidelines align with common ATS parsing practices and current hiring workflows._

</div>
