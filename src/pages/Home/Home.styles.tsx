import { defaultTheme } from '@/styles/muiTheme';
import bgImage from '../../assets/img/bg-lamanzanita.png';
import { Theme } from "@mui/material/styles";


export const HomeStyles = (theme: Theme) => ({
    background: `linear-gradient(0deg, rgba(36, 36, 36, 0.70) 0%, rgba(36, 36, 36, 0.70) 100%), url(${bgImage}), lightgray 50%`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100%",
    width: "100vw",
    backgroundAttachment: "fixed",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
          overflow: "auto",
      // pt: "4rem",
    },
  });  

export const HomeParagraph = (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    overflow: "auto",
    px: "4rem",
    pt: "6rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      // pt: "4rem",
    },
})


// Disclaimer styles
export const YellowBand = () => ({
    background: defaultTheme.palette.primary.main,
    width: "1rem",
}); 



