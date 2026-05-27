import { useState } from "react";

const links = ["Projects", "About", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-[60px] flex items-center justify-between px-6"
      style={{
        background: "rgba(13,17,23,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #30363d",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="#"
        className="font-heading font-bold text-[1.1rem] text-primary no-underline tracking-tight"
      >
        Leon<span className="text-accent">Script</span>JS
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-secondary text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary no-underline"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: status + hamburger */}
      <div className="flex items-center gap-4">
        <div
          className="hidden sm:flex items-center gap-2 text-xs text-secondary bg-surface border border-border-col rounded-full px-3 py-1"
          aria-label="Availability status"
        >
          <div className="w-[6px] h-[6px] rounded-full bg-green-500 anim-pulse" />
          Available for internships
        </div>


        <button
          className={`nav-hamburger flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1 ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        className={`nav-links-mobile ${open ? "open" : ""} list-none`}
        onClick={() => setOpen(false)}
      >
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-secondary text-sm font-medium no-underline hover:text-primary transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
