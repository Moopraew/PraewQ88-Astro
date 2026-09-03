/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'Inter', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        pttBlue: '#005CA9',
        pttBlueHover: '#004B8A',
        pttCyan: '#00A3E0',
        pttDark: '#0B1B2B',
        pinkAccent: '#E91E63',
        orangeInput: '#FF7A00',
        status: {
          pass: '#10B981',
          warn: '#F59E0B',
          fail: '#EF4444',
          manual: '#64748B',
          override: '#3B82F6',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
