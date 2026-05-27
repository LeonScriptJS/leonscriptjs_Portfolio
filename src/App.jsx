import { useFadeUp } from './hooks/useFadeUp'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import Projects from './components/Projects'
import About   from './components/About'
import Skills  from './components/Skills'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  // FIX: Now uses the useFadeUp hook instead of duplicating the
  // IntersectionObserver logic inline. The hook in hooks/useFadeUp.js
  // was dead code — this activates it and removes the duplication.
  useFadeUp()

  return (
    <div className="bg-base text-primary font-body overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
