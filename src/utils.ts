export const fonts = {
  aBeeZee: `'ABeeZee', sans-serif;`,
  MontserratAlternates: `'Montserrat Alternates',sans-serif`
};

export const colours = {
  background: "#FCF7F9",
  backgroundDarker: "#EBE4E6",
  primaryText: "#4A3838",
  secondaryText: "#FFAAAD",
  pink: "#D12148",
  boxShadow: "1px 5px 0.5em rgba(136, 136, 136, 0.5)",
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
  mobileS: "20em",
  mobileM: "23.5em",
  mobileL: "26.6em",
  mobileTablet: "36em",
  tablet: "48em",
  desktop: "62em",
  desktopL: "75em",
  widescreen: "90.07em"
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
  widescreen: `(min-width:${size.widescreen})`
};
