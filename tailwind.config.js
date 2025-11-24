/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/auth/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "rgb(31,31,31)",
        secondary: "rgb(40,41,42)",
        blue: "rgb(168,199,250)",
        orange: "rgb(80,66,43)",
        darkBlue: "rgb(58,63,80)",
        green: "rgb(0,255,0)",
        icon: "rgb(156,156,156)",
        search: "rgb(51,52,56)",
        button: "#21292b",
        background: "#f8f8f8"
      }
    },
    fontFamily: {
      Poppins: "Poppins-regular",
      PoppinsBold: "Poppins-bold",
      PoppinsMedium: "Poppins-medium",
      PoppinsLight: "Poppins-light",
      PoppinsBlack: "Poppins-black",
      PoppinsSemiBold: "Poppins-semibold"
    
    },
  },
  plugins: [],
}