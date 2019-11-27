export const fonts = {
  greatVibes: `'Great Vibes', cursive`,
  montserrat: `'Montserrat', sans-serif`,
  raleway: `'Raleway', sans-serif`,
  aBeeZee: `'ABeeZee', sans-serif;`,
  dancingScript: `'Dancing Script', cursive`
};

export const colours = {
  background: "#FCF7F9",
  backgroundDarker: "#EBE4E6",
  primaryText: "#4A3838",
  secondaryText: "#FFAAAD",
  pink: "#D12148",
  boxShadow: "1px 5px 1em rgba(136, 136, 136, 0.5)",
  smallShadow: "1px 1px 0.4em rgba(136, 136, 136, 0.5)",
  darkerBoxShadow: "1px 5px 1em rgba(0, 0, 0, 0.5)",
  scroll: `::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }`
};

//MEDIA QUERIES
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileTablet: "576px",
  tablet: "768px",
  desktop: "992px",
  desktopL: "1200px"
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`
};
