import { defaultTheme } from "@/styles/muiTheme";
import { styled } from "@mui/material";


export const GridContainer = () => ({
    
})

export const Image = styled("img") (()=>({
    objectFit: "cover",
    height: "225px",
    width: "100%",
}))

export const Overlay = styled("div")(()=>({
    position:"absolute",
    right: 0,
    top: 0,
    marginTop: "1rem",
    width: "calc(100% - 1rem)",
    height: "225px",
    background: "linear-gradient(0deg, rgba(36, 36, 36, 0.70) 0%, rgba(36, 36, 36, 0.70) 100%)",
    transition: ".5s ease",
    opacity: 0,
    "&:hover": {
        opacity: .7,
},
}))

export const OverlayContent = styled ("div") (()=>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position:"absolute",
    right: 0,
    top: 0,
    marginTop: "1rem",
    width: "calc(100% - 1rem)",
    height: "225px",
    background: "linear-gradient(0deg, rgba(36, 36, 36, 0.70) 0%, rgba(36, 36, 36, 0.70) 100%)",
    transition: ".5s ease",
    opacity: 0,
    color: defaultTheme.palette.white.main,
    textAlign: "end",
    "&:hover": {
        opacity: 1,
},
    
}))
