<a name="readme-top"></a>

# 🌌 Elite Folio — Modern 3D Space Portfolio & Digital Showcase

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Canvas-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Elite Folio** is an elite-tier, interactive 3D space-themed developer portfolio and digital experience platform. Engineered with **Next.js 16**, **React 19**, **Three.js / React Three Fiber**, **Framer Motion**, and **Tailwind CSS**, it delivers celestial visual aesthetics, fluid physics-based particle stars, glassmorphic UI elements, and a structured dual-tier contact communication system.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Contact Matrix (Primary & Alternative)](#-contact-matrix)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Production Build](#production-build)
- [Configuration & Customization](#-configuration--customization)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🚀 Overview

**Elite Folio** transforms the standard portfolio format into a cosmic voyage. Built for engineers, digital artisans, and tech visionaries, the website merges high-performance web engineering with celestial visuals.

- **Brand Name**: Elite Folio
- **Domain / Base**: `https://elitefolio.dev`
- **Design Philosophy**: Deep space dark mode (`#030014`), ultraviolet neon glow (`#7042f8`), frosted glassmorphism, and smooth scroll animations.

---

## ✨ Key Features

1. **🌌 Interactive 3D Starfield Canvas**
   - Immersive 3D particle universe built with Three.js and `@react-three/fiber`.
   - Real-time rotation and celestial drift physics using custom `Float32Array` point clouds.

2. **⚡ Fluid Micro-Animations & Motion Design**
   - Coordinated slide-ins, fade transitions, and hover-triggered dynamic illumination powered by Framer Motion.
   - Smooth viewport reveal triggers powered by `react-intersection-observer`.

3. **🛡️ Encryption & Cyber Security Showcase**
   - High-tech interactive lock animation displaying data integrity, fast performance, and robust architecture.

4. **💼 Dynamic Project & Technical Skill Matrix**
   - Multi-category skill badges covering Frontend, Backend, Full-Stack, and DevOps technologies.
   - Project cards with direct preview links and technology tags.

5. **📬 Dual-Tier Contact Hub (Primary & Alternative Desk)**
   - Complete contact ecosystem with Primary Studio details and Alternative / Priority Dispatch channels.
   - Interactive transmission form featuring channel routing preferences, form validation, and feedback notifications.

6. **📱 Fully Responsive & Cross-Device Compatible**
   - Mobile-first adaptive layout with hamburger drawer navigation and touch-optimized controls.

---

## 📞 Contact Matrix

Elite Folio provides two distinct communication channels to ensure rapid and dependable assistance:

| Communication Channel | 🥇 Primary Studio Desk | 🥈 Alternative / Priority Dispatch | Purpose & Routing |
| :--- | :--- | :--- | :--- |
| **🏢 Headquarters / Studio** | **San Francisco Innovation Lab**<br>450 Mission Street, Suite 800<br>San Francisco, CA 94105, USA | **London Creative Hub**<br>Level 4, 10 Finsbury Square<br>London, EC2A 1AF, United Kingdom | Client consultations, on-site briefings & international coordination |
| **✉️ Direct Email** | **[contact@elitefolio.dev](mailto:contact@elitefolio.dev)** | **[support@elitefolio.dev](mailto:support@elitefolio.dev)** | Primary consultations vs. urgent retainers & escalations |
| **📞 Telephone Line** | **[+1 (555) 789-2040](tel:+15557892040)**<br>*(Studio Direct)* | **[+1 (555) 345-6789](tel:+15553456789)**<br>*(Priority / Urgent Line)* | Scheduled intake sessions vs. emergency hotline |
| **⏰ Operating Hours** | **Mon – Fri:** 9:00 AM – 6:00 PM PST | **Sat – Sun:** 10:00 AM – 4:00 PM GMT | Business operations vs. weekend priority support |
| **⚡ Response Target (SLA)** | Under 24 Business Hours | Within 2–4 Hours (Priority Retainers) | Guaranteed turnaround time for inquiries |
| **🎯 Primary Function** | Project briefs, custom builds & proposals | Critical bug triage & SLA maintenance | Purpose-routed communication |

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [Next.js](https://nextjs.org/) (v16.4.2 App Router)
- **UI Library**: [React](https://react.dev/) (v19.3.1)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v6)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS & Autoprefixer

### 3D Graphics & Animations
- **3D Canvas**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Three Helpers**: [@react-three/drei](https://github.com/pmndrs/drei) + [maath](https://github.com/pmndrs/maath)
- **Motion Engine**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/) & [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Project Structure

```bash
Elite-Folio/
├── app/
│   ├── globals.css              # Global styles, variables & keyframe animations
│   ├── layout.tsx               # Root layout, metadata & persistent canvas/navbar/footer
│   └── page.tsx                 # Main application page (Hero, Skills, Encryption, Projects, Contact)
├── components/
│   ├── main/
│   │   ├── contact.tsx          # Dual-tier Primary & Alternative contact hub & interactive form
│   │   ├── encryption.tsx       # Cyber-security encryption demonstration component
│   │   ├── footer.tsx           # Footer with Elite Folio branding, community links & contact
│   │   ├── hero.tsx             # Hero section container
│   │   ├── navbar.tsx           # Sticky blurred header with brand emblem and navigation
│   │   ├── projects.tsx         # Portfolio showcase cards grid
│   │   ├── skills.tsx           # Interactive categorized skill clouds
│   │   └── star-background.tsx  # Three.js 3D rotating starfield particle system
│   └── sub/
│       ├── hero-content.tsx     # Typography, badges, and CTA action buttons
│       ├── project-card.tsx     # Reusable project card with dynamic image and preview links
│       ├── skill-data-provider.tsx # Animated individual skill icon with viewport triggers
│       └── skill-text.tsx       # Section headings and banner text for skills
├── config/
│   └── index.ts                 # Site SEO metadata, title, authors, and keywords
├── constants/
│   └── index.ts                 # Application constants, skill lists, projects, and contact details
├── public/                      # Static assets, skill icons, project mockups, and logos
├── package.json                 # Project manifest, dependencies, and scripts
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 🏁 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher (tested with `v24.x`)
- **Package Manager**: `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/elite-folio/portfolio.git
   cd Elite-Folio
   ```

2. **Install project dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

### Running Locally

Launch the local Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### Production Build

To compile and validate the optimized production build:
```bash
npm run build
```

To run the compiled production server locally:
```bash
npm run start
```

---

## ⚙️ Configuration & Customization

### 1. Brand & Metadata
Update [`config/index.ts`](file:///c:/Users/QBS%20Accounting/Documents/websites/Elite-Folio/config/index.ts) to adjust SEO meta titles, page descriptions, OpenGraph information, or author links:
```typescript
export const siteConfig: Metadata = {
  title: "Elite Folio | Modern 3D Space Portfolio",
  description: "Welcome to Elite Folio – a cutting-edge 3D space-themed portfolio...",
  authors: {
    name: "Elite Folio",
    url: "https://elitefolio.dev",
  },
};
```

### 2. Contact Information (Primary & Alternative)
Update [`constants/index.ts`](file:///c:/Users/QBS%20Accounting/Documents/websites/Elite-Folio/constants/index.ts) under `CONTACT_DETAILS` to modify addresses, phone numbers, or email addresses:
```typescript
export const CONTACT_DETAILS = {
  primary: {
    channel: "Primary Studio Desk",
    email: "contact@elitefolio.dev",
    phone: "+1 (555) 789-2040",
    location: "450 Mission Street, Suite 800, San Francisco, CA 94105, USA",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM PST",
    sla: "Response within 24 hours",
    note: "Client consultations, new project briefs & core collaborations",
  },
  alternative: {
    channel: "Alternative / Priority Dispatch",
    email: "support@elitefolio.dev",
    phone: "+1 (555) 345-6789",
    location: "Level 4, 10 Finsbury Square, London, EC2A 1AF, United Kingdom",
    hours: "Saturday – Sunday: 10:00 AM – 4:00 PM GMT",
    sla: "Priority response within 2–4 hours",
    note: "Emergency escalations, SLA retainers & technical support",
  },
};
```

### 3. Projects & Skills
Customize the showcase items in `PROJECTS`, `SKILL_DATA`, `FRONTEND_SKILL`, `BACKEND_SKILL`, and `FULLSTACK_SKILL` located in [`constants/index.ts`](file:///c:/Users/QBS%20Accounting/Documents/websites/Elite-Folio/constants/index.ts).

---

## 🌐 Deployment

### Deploy on Vercel
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import your repository into the [Vercel Dashboard](https://vercel.com/new).
3. Set the Framework Preset to **Next.js**.
4. Click **Deploy**.

### Deploy on Netlify
The repository includes a ready-to-use [`netlify.toml`](file:///c:/Users/QBS%20Accounting/Documents/websites/Elite-Folio/netlify.toml) configuration. Connect your git repository to Netlify, and builds will automatically run `npm run build`.

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use and adapt it for your personal or commercial portfolio needs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
