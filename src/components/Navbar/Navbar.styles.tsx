import { defaultTheme } from "@/styles/muiTheme";
import { Theme, styled } from "@mui/material";

export const AppBarStyles = (theme: Theme) =>({
    color: defaultTheme.palette.white.main,
    px: "4rem",
    background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
    boxShadow: "none",
    height:"120px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]:{

    }
});

export const HideAppBar = () =>({
    display: "none",
});


export const LogoContainer = styled("div")(() => ({
    minWidth: "10px",
}))
