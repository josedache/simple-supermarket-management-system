const tailwindcss = require("tailwindcss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss("./src/tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
  },
};
