/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F2F3F5',
        ink: '#1C2127',
        steel: '#5A6472',
        line: '#D8DCE2',
        card: '#FBFCFD',
        accent: '#C7741A', // signal amber
        verified: '#137A6B', // teal
        caution: '#A23A2E', // clay
      },
      fontFamily: {
        display: ['"Wanted Sans Variable"', '"Pretendard Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      screens: {
        '4k': '1980px',
      },
    },
  },
  plugins: [],
}
