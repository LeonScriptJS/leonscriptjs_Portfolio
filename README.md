# Dev Workspace — LeonScriptJS Portfolio

![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=flat&logo=tailwindcss&logoColor=38BDF8)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000?style=flat&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/status-live-4ade80?style=flat)

---

## // overview

Dev Workspace is my personal frontend developer portfolio engineered as a product, not a page.

The goal wasn't to create another scrolling resume with random sections stacked together.  
The goal was to build something that feels intentional from the very first interaction.

Every layout decision, animation, spacing system, and component structure was designed to communicate how I think as a frontend developer before a recruiter reads a single sentence.

Originally built with vanilla HTML, CSS, and JavaScript, then later rebuilt with **React + Vite + Tailwind CSS** to improve scalability, maintainability, and component architecture.

Live → **[leonscriptjs.vercel.app](https://leonscriptjs.vercel.app)**

---

## // architecture stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + Custom CSS |
| Design | Figma |
| Language | JavaScript (ES6+) |
| Deployment | Vercel |
| Animation System | IntersectionObserver API |
| Typography | Syne · Plus Jakarta Sans · DM Mono |

---

## // core philosophy

This portfolio was designed with a few principles:

- clean hierarchy over visual noise
- strong spacing system over crowded layouts
- reusable architecture over one-off components
- subtle motion over excessive animation
- clarity over decoration

The interface takes inspiration from modern SaaS dashboards, developer tools, and technical documentation systems.

---

## // sections

```txt
Navbar
├── Glassmorphism navigation
├── Responsive mobile menu
└── Animated hamburger transition

Hero
├── CSS grid background
├── Radial glow effects
├── Live status indicators
└── CTA actions

Projects
├── Dynamic project rendering
├── Featured project layout
├── Slide-in modal system
└── Data-driven architecture

About
├── Profile overview
├── Structured information panels
└── Social links

Skills
├── Grouped stack categories
├── Skill indicators
└── Responsive card system

Contact
├── Terminal-inspired UI
├── Monospaced command styling
└── Quick-access contact actions

Footer
└── Minimal dynamic footer
```

---

## // getting started

Clone the repository:

```bash
git clone https://github.com/LeonScriptJS/dev-workspace-portfolio.git
```

Move into the project:

```bash
cd dev-workspace-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

---

## // production build

```bash
npm run build
npm run preview
```

---

## // project structure

```txt
leon-portfolio/
├── public/
│   └── Leonard_Udegbulem_CV.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── hooks/
│   │   └── useFadeUp.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## // design system

The design system is centralized through Tailwind custom tokens.

Nothing important is hardcoded inside components.

```js
colors: {
  base: '#0d1117',
  surface: '#161b22',
  raised: '#21262d',
  accent: '#3b82f6',
  primary: '#e6edf3',
  secondary: '#8b949e',
  muted: '#484f58',
  'border-col': '#30363d',
}
```

The entire UI cascades from this configuration.

Change the accent colour and typography and the entire identity shifts with it.

---

## // animation system

Animations are powered by a reusable custom hook:

```js
useFadeUp()
```

Elements with the `fade-up` class are automatically observed using the IntersectionObserver API.

```jsx
<div className="fade-up delay-2">
  Content
</div>
```

### Features

- one-time animation trigger
- stagger support
- lightweight observer cleanup
- minimal scroll performance impact

---

## // adding projects

Projects are fully data-driven.

Open:

```txt
src/data/projects.js
```

Add a new object to the array:

```js
{
  id: 5,
  title: 'Project Name',
  desc: 'Short project description',
  stack: ['React', 'Tailwind'],
  status: 'Live',
  featured: false,
}
```

The grid, modal, and rendering logic update automatically.

---

## // current roadmap

- [ ] Add project preview images
- [ ] Improve modal transition system
- [ ] Add dark/light theme switching
- [ ] Add GitHub contribution activity section
- [ ] Improve accessibility audit score
- [ ] Add case-study pages for major projects
- [ ] Add analytics dashboard
- [ ] Optimize Lighthouse performance score further

---

## // connect

```bash
❯ connect --leon
```

| Platform | Link |
|---|---|
| Portfolio | https://leonscriptjs.vercel.app |
| GitHub | https://github.com/LeonScriptJS |
| LinkedIn | https://linkedin.com/in/leonard-c-udegbulem |
| Email | leonard.c.udegbulem@gmail.com |

Open to frontend internships, junior frontend engineering roles, and collaborative product opportunities.

---

## // final note

Built intentionally.
Just structured frontend architecture, thoughtful UI decisions, and steady iteration over time.
