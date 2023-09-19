import { defaultTheme } from '@/styles/muiTheme';
import bgImage from '../../assets/img/bg-lamanzanita.png';
import { Theme } from "@mui/material/styles";


export const HomeStyles = (theme: Theme) => ({
    background: `linear-gradient(0deg, rgba(36, 36, 36, 0.70) 0%, rgba(36, 36, 36, 0.70) 100%), url(${bgImage}), lightgray 50%`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    width: "100vw",
    backgroundAttachment: "fixed",
    overflow: "hidden",
    pb: "2rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
          overflow: "auto",
    },
  });  

export const HomeParagraph = (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "auto",
    p: "12rem 4rem 2rem 4rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
})


// Disclaimer styles
export const YellowBand = () => ({
    background: defaultTheme.palette.primary.main,
    width: "1rem",
}); 



