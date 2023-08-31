import { Theme, styled } from "@mui/material";

export const AboutContainer = (theme: Theme) => ({
    height: "100vh", 
    width: "100vw",
    display: "flex", 
    alignItems:"center",
    pt: "4rem",
    [theme.breakpoints.down("md")]: {
        pt: "8rem",
        flexDirection: "column",
        gap: "2rem",
        textAlign: "center",
    }

})

export const Image = styled("img")(() => ({
    objectFit: "cover",
    minWidth: "653px",
    maxWidth: "100%"
}));

export const AboutButton = (theme: Theme) =>({
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "1rem"
    }
})