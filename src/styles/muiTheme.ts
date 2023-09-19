import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
    white: Palette["primary"];
    whiteWarm: Palette["primary"];
    taupe: Palette["primary"];
    granite: Palette["primary"];
    mint: Palette["primary"];
    sand: Palette["primary"];
    bg: Palette["primary"];
    black: Palette["primary"];
    }
    interface PaletteOptions {
    white: PaletteOptions["primary"];
    whiteWarm: PaletteOptions["primary"];
    taupe: PaletteOptions["primary"];
    granite: PaletteOptions["primary"];
    mint: PaletteOptions["primary"];
    sand: PaletteOptions["primary"];
    bg: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
    }
}

const paletteColors = {
        primary: {
        main: "#FFC700",
        light: "#F9EED5",
    },
        secondary: {
        main: "#FAF6F4",
    },
        info: {
        main: "#7588DF",
        light: "#E6E5F1",
    },
        error: {
        main: "#ED7857",
        light: "#F7E3DC",
    },
        warning: {
        main: "#262626",
        light: "#F9EED5",
    },
        success: {
        main: "#459796",
        light: "#DBE7E7",
    },
        white: {
        main: "#ffffff",
    },
        whiteWarm: {
        main: "#FFF7EA",
    },
        taupe: {
        main: "#D9C7B8",
        light: "#D6C7BA",
    },
        granite: {
        main: "#6F6661",
    },
        mint: {
        main: "#9AD9B7",
    },
        sand: {
        main: "#F4EFEB",
    },
        bg: {
        main: "#FAFAFA",
        light: "#f2ede7"
    },
        black: {
        main: "#242424"
    },
};

export const defaultTheme = createTheme({
    typography: {
        fontFamily: [
        "geograph-regular",
        "-apple-system",
        "BlinkMacSystemFont",
        "Arial",
        "sans-serif",
        ].join(","),
    },
    palette: {
        ...paletteColors,
    },
    components:{
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
            disableElevation: true,
            variant: "contained",
        },
        styleOverrides: {
        root: {
            width: "fit-content",
            padding: "1rem 1.5rem",
            fontFamily: "Graphik-Regular",
            },
        },
        variants: [
        {
            props: {
              color: "error",
            },         
            style: {
              color: "white",
            },
        },
          {
            props: {
              variant: "contained",
              color: "primary",
            },
            style: {
              ":hover": {
                background: "white",
                color: "#242424",
              },
              ":disabled": {
                background: paletteColors.primary.light,
              },
            },
          },
          {
            props: {
              variant: "text",
              color: "primary",
            },
            style: {
              background: "transparent",
              ":hover": {
                color: paletteColors.primary.main,
                background: "transparent",
              },
              ":disabled": {
                color: "#908E8D",
              },
            },
          },
        ],
      },
      MuiLink:{
        styleOverrides: {
          root: {
              color: "#FFC700",
              textDecoration: "none"
            },
        },
      },
    }

});


/**
 * Typography
 */
defaultTheme.typography.h1 = {
    fontFamily: "Gilroy-SemiBold",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "72px",
  };
  
  defaultTheme.typography.h2 = {
    fontFamily: "Gilroy-SemiBold",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "48px",
    letterSpacing: "-0.96px",
  };
  
  defaultTheme.typography.h3 = {
    fontFamily: "Gilroy-SemiBold",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "40px",
    letterSpacing: "-0.64px",
    
  };
  
  defaultTheme.typography.h4 = {
    fontFamily: "Gilroy-SemiBold",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "-0.48px",
  };

  defaultTheme.typography.h5 = {
    fontFamily: "Gilroy-SemiBold",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.4px",
  };
  
  defaultTheme.typography.body1 = {
    fontFamily: "Graphik-Regular",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
  };

  defaultTheme.typography.body2 = {
    fontFamily: "Graphik-Regular",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
  };

  defaultTheme.typography.button = {
    fontFamily: "Graphik-Semibold",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0,5px"
  };

  defaultTheme.typography.caption = {
    fontFamily: "Graphik-Regular",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "-0,5px"
  };