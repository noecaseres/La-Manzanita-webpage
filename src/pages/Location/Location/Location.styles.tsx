import { defaultTheme } from "@/styles/muiTheme";
import { Theme, styled } from "@mui/material";


export const LocationStyles = (theme: Theme) => ({
    p: "4rem 10rem",
    mt: "4rem",
    [theme.breakpoints.down("sm")]: {
        p:"0 3rem",
        overflow: "hidden"
    }
});


export const DescStyles = () => ({
    height: "100%", 
    maxWidth: "504px",
	display: "flex",
    flexDirection: "column",
    justifyContent: "center",
	color: defaultTheme.palette.black.main,
});

export const ContactDetailContainer = styled("div")(()=>({
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(auto-fill, minmax(8rem, 1fr))",
    gap: "1.25rem",
    flexWrap: "wrap",

}));

