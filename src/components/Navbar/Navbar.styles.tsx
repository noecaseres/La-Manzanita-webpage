import { defaultTheme } from "@/styles/muiTheme";

export const AppBarStyles = () =>({
    color: defaultTheme.palette.white.main,
    px: "4rem",
    background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
    boxShadow: "none",
    minHeight:"120px",
    justifyContent: "center",
});

export const HideAppBar = () =>({
    display: "none",
});


