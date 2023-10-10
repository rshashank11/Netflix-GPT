/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        headerTwo: "url('../src/images/netflix-bg-large.jpg')",
      },
    },
    colors: {
      white: "white",
      black: "#000",
      red: "#e50914",
      inputBg: "rgb(51, 51, 51)",
      inputText: "#8c8c8c",
      error: "#e87c03",
    },
  },
  plugins: [],
}
