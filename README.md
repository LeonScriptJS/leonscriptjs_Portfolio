# LeonScriptJS — Dev Workspace Portfolio

A frontend developer portfolio built with **React 18**, **Tailwind CSS**, and **Vite**.
3
## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project structure

```
src/
├── App.jsx              # Root component + scroll animation setup
├── main.jsx             # React entry point
├── index.css            # Tailwind directives + custom CSS
├── data/
│   ├── projects.js      # All project content — edit this to add projects
│   └── skills.js        # Skill groups and proficiency levels
└── components/
    ├── Navbar.jsx        # Fixed nav with mobile hamburger
    ├── Hero.jsx          # Full-screen hero section
    ├── Projects.jsx      # Project grid + modal trigger
    ├── ProjectModal.jsx  # Slide-in project detail panel
    ├── About.jsx         # Two-column developer profile
    ├── Skills.jsx        # Skill groups with dot indicators
    ├── Contact.jsx       # Terminal-style contact section
    └── Footer.jsx        # Simple footer
```

## Customising content

- **Add a project**: Edit `src/data/projects.js` — add a new object following the existing structure
- **Update skills**: Edit `src/data/skills.js`
- **Change links**: Update `src/components/Contact.jsx` and `src/components/About.jsx`
- **CV download**: Replace `href="#"` in `Hero.jsx` with the path to your PDF

## Deploying to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — click Deploy

## Tech stack

- React 18
- Tailwind CSS v3
- Vite v5
- Google Fonts (Syne, Plus Jakarta Sans, DM Mono)
