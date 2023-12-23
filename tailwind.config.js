/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
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
      netflixRed: "#E50914",
      grey: "grey",
    },
  },
  plugins: [],
}
