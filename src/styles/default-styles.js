const colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  defaultStyles: {
    theme: {
      colors: {
        ...colors,
        "twitch-purple": "#612DFF",
        "twitch-purple-hover": "#b8a1ff",
      },
      textColor: {
        ...colors,
        "twitch-purple": "#612DFF",
        "twitch-purple-hover": "#b8a1ff",
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        126: "26rem",
        128: "28rem",
        130: "30rem",
        132: "32rem",
        134: "34rem",
        136: "36rem",
        138: "38rem",
        "50vh": "50vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "50vw": "50vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "headerless-screen": "calc(100vh - 5rem)",
        header: "5rem",
        "90vw": "90vw",
        "90vh": "90vh",
      },
      extend: {
        maxWidth: {
          "1/2": "50%",
          "3/4": "75%",
          screenW: "100vw",
          "90vw": "90vw",
        },
        maxHeight: {
          "1/2": "50%",
          "3/4": "75%",
          screenH: "100vh",
          "80%": "70%",
          "90vh": "90vh",
        },
      },
    },
  },
};
