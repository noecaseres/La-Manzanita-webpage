import { Theme, styled, useTheme } from "@mui/material";


export const AboutContainer = (theme: Theme) => ({
    width: "100vw",
    display: "flex", 
    alignItems:"center",
    pt: "4rem",
    [theme.breakpoints.down("md")]: {
        pt: "2.5rem",
        flexDirection: "column",
        gap: "2rem",
        textAlign: "center",
    }
})

export const Image = styled('img')(() => {
    const theme = useTheme();
    return {
        objectFit: 'cover',
        minWidth: '653px',
        maxWidth: '100%',
        [theme.breakpoints.down('md')]: {
        minWidth: '100%',
    },
    };
});

export const AboutButton = (theme: Theme) =>({
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginBottom: "1rem"
    }
})