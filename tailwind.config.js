/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mBackgroundColor: "#222831",
        mPrimaryColor: "#393E46",
        mSecondaryColor: "#FFD369",
        mThirdColor: "#eeeeee",
        mContainerColor: "#EAE2CE",
        mHeaderColor: "#141414",
        mFooterColor: "#141414",
      },
    },
  },
  plugins: [],
};