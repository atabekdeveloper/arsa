/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors() {
        return {
          primary: {
            DEFAULT: '#1B75BC',
          },
        };
      },
    },
  },
  plugins: [],
};
