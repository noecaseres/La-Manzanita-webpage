import { defaultTheme } from "@/styles/muiTheme";
import { Theme, styled } from "@mui/material";


export const LocationStyles = (theme: Theme) => ({
    p: "4rem 10rem",
    [theme.breakpoints.down("sm")]: {
        p:0,
    }
});

export const DescStyles = (theme: Theme) => ({
    height: "100vh", 
	display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
	color: defaultTheme.palette.black.main,
    [theme.breakpoints.down("sm")]: {
        
    }
});

export const ContactDetailContainer = styled("div") (()=>({
    display: "flex",
    justifyContent: "space-between"
}))

