/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        10: "clamp(7px,0.7vw,10px)",
        20: "clamp(14px,1.4vw,20px)",
        12: "clamp(8px,0.8vw,12px)",
        48: "clamp(28px,3vw,48px)",
        24: "clamp(18px,1.3vw,24px)",
        16: "clamp(12px,1vw,16px)",
        7.5: "clamp(5rem,7vw,7.5rem)",
        68: "clamp(56px,3.2vw,68px)",
        65: "clamp(42px,4.1vw,65px)",
        28: "clamp(20px,1.7vw,28px)",
        31: "clamp(28px,2vw,31px)",
        76: "clamp(56px,4.8vw,76px)",
        69: "clamp(48px,4.3vw,69px)",
        18: "clamp(12px,1.2vw,18px)",
        178: "clamp(150px,11vw,178px)",
        200: "clamp(150px,12.5vw,200px)",
        34: "clamp(28px,2vw,34px)",
        56: "clamp(46px,3.5vw,56px)",
        150: "clamp(90px,9.4vw,150px)",
        40: "clamp(28px,2.5vw,40px)",
        125: "clamp(100px,7.8vw,125px)",
        38: "clamp(28px,2.1vw,38px)",
        26: "clamp(20px,1.4vw,26px)",
        23: "clamp(17px,1.4vw,23px)",
        100: "clamp(78px,6.3vw,100px)",
        310: "clamp(240px,19vw,310px)",
        300: "clamp(220px,18.8vw,300px)",
        80: "clamp(58px,5vw,80px)",
        90: "clamp(68px,5.6vw,90px)",
      },

      fontSize: {
        16: "clamp(12px,1vw,16px)",
        32: "clamp(24px,2vw,32px)",
        48: "clamp(32px,3vw,48px)",
        20: "clamp(16px,1.3vw,20px)",
        12: "clamp(8px,0.8vw,12px)",
        31: "clamp(28px,1.7vw,31px)",
        150: "clamp(90px,9.4vw,150px)",
        14: "clamp(10px,0.9vw,14px)",
        24: "clamp(18px,1.3vw,24px)",
        40: "clamp(32px,2.2vw,40px)",
        8: "clamp(6px,0.5vw,8px)",
        28: "clamp(20px,1.8vw,28px)",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
