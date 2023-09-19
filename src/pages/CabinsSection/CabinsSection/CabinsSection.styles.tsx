import { defaultTheme } from "@/styles/muiTheme"
import { Theme, styled } from "@mui/material";

export const CabinsContainer = (theme: Theme) => ({
    background: defaultTheme.palette.bg.light,
    p: "5rem 4rem",
    [theme.breakpoints.down("sm")]:{
        p:"5rem 0"
    }
})

export const CabinsStyles = (theme: Theme) => ({
    color: defaultTheme.palette.black.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        mx: "1rem",
    }
})

export const CabinsGrid = () =>({
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
    gap: "1.25rem",
    mt: "3rem"
})

export const CabinsCard = (theme: Theme) =>({
    background: defaultTheme.palette.white.main,
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        mx: "1rem",
        alignItems: "center",
    }   
})

export const ImageContainer = () => ({
    height: "305px",
    position: "relative",
    minWidth: "164px",
    flexGrow: "1"
})

export const Image = styled("img")(() => ({
    height: "305px",
    objectFit: "cover",
    width: "100%",
}));

export const Overlay = styled("div")(()=>({
    position:"absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "305px",
    background: "linear-gradient(0deg, rgba(36, 36, 36, 0.70) 0%, rgba(36, 36, 36, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
    transition: ".5s ease",
    opacity: 0,
    "&:hover": {
        opacity: .7,
},
}));

export const OverlayContent = styled("div")(()=>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position:"absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "305px",
    background: "linear-gradient(0deg, rgba(36, 36, 36, 0.70) 0%, rgba(36, 36, 36, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
    transition: ".5s ease",
    opacity: 0,
    color: defaultTheme.palette.white.main,
    textAlign: "center",
    "&:hover": {
        opacity: .7,
},
}));


export const ParagraphContainer = (theme: Theme) =>({
    p: "1rem 1.25rem",
    [theme.breakpoints.down("sm")]: {
        p: "1rem",
    }   
})

export const DescriptionStyles = () => ({
    my: ".5rem",
})
