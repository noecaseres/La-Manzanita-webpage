import { defaultTheme } from "@/styles/muiTheme";
import { Theme, styled } from "@mui/material";



export const FormGroupStyles = (theme: Theme) => ({
    width: "246px",
    position: "absolute",
    top: "476px",
    right: "100px",
    padding: "30px 24px",
    boxShadow: "0px 32px 34px 0px rgba(36, 36, 36, 0.13)",
    background: defaultTheme.palette.white.main,
    [theme.breakpoints.down("md")]:{
        position: "static",
        top: "0",
        right: "0",
        padding: "0 32px",
        boxShadow: "none",
        m: "2rem auto",
        width: "100%"
    }
})

export const FieldContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    "label": {
        fontFamily: "Graphik-Semibold",
        fontSize: "16px",
        fontWeight: 500,
        mb: "0.5rem"
    },
    "input": {
        border: "none",
        background: defaultTheme.palette.bg.main,
        padding:"0.75rem 1rem"
    },
    "textarea": {
        border: "none",
        background: defaultTheme.palette.bg.main,
        resize: "none"
    }
}))

export const ButtonSubmit = () => ({
    "&:hover": {
        background: defaultTheme.palette.primary.light
},
})