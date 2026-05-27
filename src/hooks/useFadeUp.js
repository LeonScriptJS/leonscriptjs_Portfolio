import { useEffect } from 'react'

export function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.fade-up')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
