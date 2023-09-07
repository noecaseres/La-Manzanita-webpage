import { Theme, styled } from "@mui/material";

export const Image = styled("img") (()=>({
    objectFit: "cover",
    height: "100%",
}))


export const CabinDetailsStyles = (theme : Theme)=>({
    width: "60%",
    m: "2rem 0 0 10rem",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        mx: "1rem",
    }
})


export const SpecificationsContainer = styled("div") (()=>({
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    marginBottom: "1rem"
}))


export const SpecificationsDetails = styled("div") (()=>({
    display: "flex",
    flexDirection: "column",

}))