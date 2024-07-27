/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {},
      // colors: {
      //   : ""
      // }
    },
  },
  plugins: [],
};
