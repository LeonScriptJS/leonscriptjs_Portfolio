/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base:    '#0d1117',
        surface: '#161b22',
        raised:  '#21262d',
        accent:  '#3b82f6',
        primary:   '#e6edf3',
        secondary: '#8b949e',
        muted:     '#484f58',
        'border-col':   '#30363d',
        'border-hover': 'rgba(59,130,246,0.38)',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}
