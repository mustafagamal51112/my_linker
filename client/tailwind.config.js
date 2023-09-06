/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#29c8be",
        secondary: "#091c2c",
      }
    },
    
  },
  plugins: [],
}

