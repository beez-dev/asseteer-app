// Color references: https://www.figma.com/design/Mg9DQMYN9EyKpLwlFyhWF6/Foundation---General?node-id=8-1194&t=BWApogTkXBxqm7ah-0

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
