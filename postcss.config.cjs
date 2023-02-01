module.exports = {
  purge: ["./src/frontend/index.html", "./src/frontend/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
