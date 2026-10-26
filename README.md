
# Morroway Travel Co.

**Every Journey, Made Simpler.**

A modern, responsive travel agency landing page designed to present essential travel services through a clean UI, immersive destination imagery, and smooth scroll-based animations.

## 🔗 Links

- **Live Demo:** [View Website](https://travel-project-assessment.vercel.app/)
- **GitHub Repository:** [View Source Code](https://github.com/sajid-ahmed2816/travel-project-assessment)

## ✨ Features

- Responsive layout for mobile, tablet, and desktop
- Hero section with animated text and destination imagery
- Four travel service cards:
  - Visa Assistance
  - Flight Tickets
  - Hotel Booking
  - Car Rental
- Why Choose Us section
- Destination call-to-action banner
- Interactive FAQ accordion
- Masonry-style travel inspiration gallery
- Responsive navigation and branded footer
- Smooth anchor navigation
- GSAP entrance animations and ScrollTrigger effects
- Reduced-motion support for GSAP animations
- SEO metadata using the Next.js Metadata API

## 🛠️ Tech Stack

- Next.js — App Router
- React
- TypeScript
- Tailwind CSS v4
- GSAP
- @gsap/react
- GSAP ScrollTrigger

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/sajid-ahmed2816/travel-project-assessment.git
```

Navigate to the project directory:

```bash
cd assessment_project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🎬 Animations

GSAP and ScrollTrigger are used for section reveals, staggered card animations, image reveals, and background parallax effects.

The design combines GSAP animations with CSS hover transitions while respecting the user's reduced-motion preference for GSAP effects.

## 📱 Responsive Design

The layout adapts to different screen sizes using Tailwind CSS responsive utilities. Navigation, service cards, content sections, and the destination gallery are designed to work across mobile and desktop viewports.

## 🖼️ Images

Destination imagery is loaded from Unsplash URLs. Replace image URLs with appropriate licensed assets when adapting the project for production.

## 🚀 Deployment

The project is deployed on Vercel and can be updated by pushing changes to the connected GitHub repository.

---

Built as a frontend development assessment project.
