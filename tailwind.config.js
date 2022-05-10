module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'forBanner': "url('/src/assets/images/bg.png')",
        'forAppointment': "url('/src/assets/images/appointment.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008000",
          secondary: "#0000FF",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dracula",
      "garden",
    ],
  },
  plugins: [require("daisyui")],
}