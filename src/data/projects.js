import cerebra from "../Images/cerebra.png";
import Modern_LoginPage from "../Images/Modern_LoginPage.png";
import previewImg from "../Images/previewImg.png";

export const projects = [
  {
    id: 0,

    title: "Cerebra Quiz App",
    image: cerebra,
    desc: "IQ assessment platform with adaptive scoring, real-time feedback, and a mobile-first UI. Built end-to-end from Figma design to live deployment on Vercel.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    status: "Live",
    featured: true, // spans 2 columns + shows preview image area
    links: {
      demo: "https://cerebra-quiz-app.vercel.app/",
      github: "https://github.com/LeonScriptJS/Cerebra-Quiz-App",
    },
    role: "Solo Developer",
    problem:
      "Most quiz apps feel cluttered and are not optimised for mobile. There was no clean, distraction-free IQ assessment tool with real-time feedback and a polished modern UI.",
    solution:
      "Built a full end-to-end IQ quiz application in React and Vite. Designed the complete UI/UX in Figma first, then developed and deployed it on Vercel. The result is a clean, minimal interface with smooth interactions that stay out of the user's way.",
    challenges: [
      "Managing quiz state across multiple question types required carefully lifting state to the top level and designing a predictable data flow.",
      "Making the layout fully responsive across all screen sizes without a CSS framework required custom media query planning and flexible component design.",
      "Building the real-time scoring logic that updates correctly on every answer selection without causing unnecessary re-renders.",
    ],
    stackBreakdown: {
      Framework: ["React 18", "Vite"],
      Styling: ["CSS3", "CSS Variables"],
      Logic: ["JavaScript ES6+"],
      Deploy: ["Vercel"],
    },
  },

  {
    id: 1,

    title: "LeonScriptJS Profile Card",

    desc: "Minimal personal profile card built with semantic HTML and modern CSS. Focused on clean typography, responsive layout, and strong visual hierarchy.",

    stack: ["HTML5", "CSS3", "Responsive Design"],

    status: "Live",

    featured: false,

    links: {
      demo: "#",
      github: "https://github.com/LeonScriptJS/Profile-Picture-Card",
    },

    role: "Solo Developer",

    problem:
      "Needed a clean and professional personal card component that presents identity, frontend focus, and personal branding in a simple but visually polished format.",

    solution:
      "Built a responsive profile card using semantic HTML and modern CSS styling techniques. Focused heavily on spacing, typography pairing, image presentation, and layout simplicity to create a premium-looking UI component.",

    challenges: [
      "Creating strong visual balance with minimal content required careful spacing and typography decisions.",

      "Making the profile image integrate naturally into the card design without overpowering the text content.",

      "Achieving a clean premium aesthetic using only HTML and CSS without relying on frameworks or external UI libraries.",
    ],

    stackBreakdown: {
      Structure: ["HTML5"],

      Styling: ["CSS3", "Flexbox", "Google Fonts", "Responsive Design"],

      UI: ["Typography Hierarchy", "Component Layout", "Visual Spacing"],

      Deploy: ["Vercel"],
    },
  },
  {
    id: 2,

    title: "Login Page UI",
    image: Modern_LoginPage,
    desc: "Responsive, accessible login interface built with clean UI structure and consistent cross-device compatibility, no framework.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "Live",
    featured: false,
    links: {
      demo: "https://modern-login-ui-weld.vercel.app/",
      github: "https://github.com/LeonScriptJS/Login_Page_Dev",
    },
    role: "Solo Developer",
    problem:
      "A focused project to demonstrate solid HTML/CSS fundamentals and responsive design without relying on any framework or library.",
    solution:
      "Built a polished login interface using only HTML, CSS, and vanilla JavaScript. Prioritised accessibility (proper labels, focus states, keyboard navigation) and full responsiveness across all screen sizes.",
    challenges: [
      "Achieving a pixel-perfect responsive layout without any CSS framework required a solid command of flexbox and custom media queries.",
      "Implementing proper keyboard navigation and visible, accessible focus states entirely from scratch.",
    ],
    stackBreakdown: {
      Core: ["HTML5", "CSS3", "JavaScript"],
      Tools: ["Git", "GitHub", "VS Code"],
    },
  },
  {
    id: 3,

    title: "Dev Workspace Portfolio",
    image: previewImg,
    desc: "This portfolio is a frontend developer identity system designed to feel like a real SaaS product dashboard, not a generic template.",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    status: "Live",
    featured: true, // FIX #8: matches HTML where project 4 is also featured (2-col span + preview)
    links: {
      demo: "#Hero",
      github: "https://github.com/LeonScriptJS",
    },
    role: "Solo Developer",
    problem:
      "Generic portfolio templates don't communicate developer identity or craft. The goal was something that felt like a real product — not a blog, not a resume printed online.",
    solution:
      "Designed and built a custom portfolio with a SaaS dashboard aesthetic: glassmorphism nav, CSS grid hero, project modal, skills panel, and a terminal-style contact section. Originally built in HTML/CSS/JS, then converted to React + Vite + Tailwind.",
    challenges: [
      "Creating the hero grid background and radial glow using only CSS pseudo-elements and gradients.",
      "Building the project modal with slide-in animation, Escape key handling, and focus management for accessibility.",
      "Architecting the component structure so each section is fully independent and easy to update.",
    ],
    stackBreakdown: {
      Framework: ["React 18", "Vite"],
      Styling: ["Tailwind CSS", "Custom CSS"],
      Tools: ["Git", "GitHub", "Figma"],
      Deploy: ["Vercel"],
    },
  },
];
