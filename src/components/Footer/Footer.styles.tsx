import { defaultTheme } from "@/styles/muiTheme";
import { Theme } from "@mui/material";

export const FooterStyles = (theme: Theme) => ({
    background: defaultTheme.palette.black.main,
    color: defaultTheme.palette.bg.main,
    minHeight: "186px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center",
    [theme.breakpoints.down("sm")]:{
    }
})