Dev Workspace — LeonScriptJS Portfolio

// what this is
This isn't a template. It's not a blog. It's not a resume printed on a webpage.
It's a frontend developer identity system — built to feel like a real SaaS product dashboard, designed to communicate craft before a recruiter reads a single word.
Originally built in vanilla HTML, CSS, and JavaScript. Then converted to React + Vite + Tailwind CSS as a deliberate architectural decision — to prove the system could scale, not just ship.

Live at → portfolio.vercel.app (deploying soon)

// built with
LayerTechnologyFrameworkReact 18 + ViteStylingTailwind CSS + Custom CSSDesignFigma (designed before a single line of code)FontsSyne · Plus Jakarta Sans · DM MonoAnimationsIntersectionObserver API (custom useFadeUp hook)DeploymentVercel

// sections
Navbar          — Glassmorphism nav, fixed top, mobile hamburger → X animation
Hero            — CSS grid background, radial glow, centered layout, stats row
Projects        — Data-driven grid, featured 2-col span, slide-in project modal
About           — Two-column profile layout, info panels, social links
Skills          — Three-column grouped skill cards with proficiency dot indicators
Contact         — Terminal-style interface (leon@devworkspace — zsh)
Footer          — Minimal, monospaced, year-aware

// getting started
Clone it. Run it. It just works.
bashgit clone https://github.com/LeonScriptJS/dev-workspace-portfolio.git
cd dev-workspace-portfolio
npm install
npm run dev
Then open http://localhost:5173.
Build for production
bashnpm run build
npm run preview

// project structure
leon-portfolio/
├── index.html                  # Root HTML shell — OG tags, fonts, SEO
├── vite.config.js
├── tailwind.config.js          # Custom design tokens — colors, fonts, radius
├── postcss.config.js
└── src/
    ├── main.jsx                # React 18 createRoot entry
    ├── App.jsx                 # Root composition — runs useFadeUp globally
    ├── index.css               # Global CSS — animations, modal, nav, skill dots
    ├── components/
    │   ├── Navbar.jsx          # Fixed nav — hamburger, mobile menu, status badge
    │   ├── Hero.jsx            # Full-viewport hero section
    │   ├── Projects.jsx        # Project grid + ProjectCard component
    │   ├── ProjectModal.jsx    # Slide-in drawer modal with focus management
    │   ├── About.jsx           # Profile + info panels
    │   ├── Skills.jsx          # Skill group cards + proficiency dots
    │   ├── Contact.jsx         # Terminal UI contact block
    │   └── Footer.jsx          # Footer — font-mono, dynamic year
    ├── data/
    │   ├── projects.js         # All project content — update here, not in JSX
    │   └── skills.js           # Skill groups and proficiency levels
    └── hooks/
        └── useFadeUp.js        # Global IntersectionObserver scroll animation hook

// design system
The entire colour palette lives in tailwind.config.js as custom tokens. Nothing is hardcoded in components.
jscolors: {
  base:       '#0d1117',   // page background
  surface:    '#161b22',   // cards, sections
  raised:     '#21262d',   // elevated elements, panels
  accent:     '#3b82f6',   // electric blue — primary brand colour
  primary:    '#e6edf3',   // main text
  secondary:  '#8b949e',   // body text, descriptions
  muted:      '#484f58',   // labels, metadata
  'border-col': '#30363d', // all borders
}
If you're forking this — change accent and the fonts. Everything else cascades.

// adding a project
Open src/data/projects.js. Add an object to the projects array:
js{
  id: 4,
  number: 'P — 05',
  title: 'Your Project Name',
  desc: 'One or two sentences. Be direct.',
  stack: ['React', 'Vite'],
  status: 'Live',           // 'Live' | 'In Progress'
  featured: false,          // true = spans 2 columns on desktop
  links: {
    demo: 'https://your-demo.vercel.app',
    github: 'https://github.com/LeonScriptJS/your-repo',
  },
  role: 'Solo Developer',
  problem: 'What was the actual problem?',
  solution: 'How did you solve it?',
  challenges: ['Challenge 1', 'Challenge 2'],
  stackBreakdown: {
    Framework: ['React 18', 'Vite'],
    Styling: ['CSS3'],
    Deploy: ['Vercel'],
  },
}
That's it. The card, modal, and everything else renders automatically.

// animation system
Scroll animations run off a single useFadeUp hook in App.jsx. Any element with the class fade-up gets observed. Add stagger delays with delay-1 through delay-4.
jsx<div className="fade-up delay-2">
  This fades up when it enters the viewport.
</div>
The observer is one-shot — elements animate in once, then disconnect. No performance drag on scroll.


// connect
bash❯ connect --leon
Email: leonard.c.udegbulem@gmail.com
LinkedIn: https://linkedin.com/in/leonard-c-udegbulem
GitHub: https://github.com/LeonScriptJS

Open to frontend internship and entry-level opportunities — remote (preferred)

Built with intention. Not filled with content.
