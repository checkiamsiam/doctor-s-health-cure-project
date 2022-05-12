module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'forBanner': "url('/src/assets/images/bg.png')",
        'forAppointment': "url('/src/assets/images/appointment.png')",
        'forTestimonial': "url('/src/assets/icons/quote.svg')",
        'forFooter': "url('/src/assets/images/footer.png')",
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
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}