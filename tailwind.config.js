export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: "#0B8228",
        yellow: "#FF7200",
      },
      animation: {
        bounce200: "bounce 0.75s infinite 0.2s", // Delay for second dot
        bounce400: "bounce 0.75s infinite 0.4s", // Delay for third dot
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1280px",
      },
    },
  },

  plugins: [],
};
