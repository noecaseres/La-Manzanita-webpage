import { styled } from "@mui/material";


export const CarouselContainer = styled("div")(()=>({
    display: "flex",
    flexDirection: "column",
    opacity: 0,
    transition: "1s",
    "&.loaded": {
    opacity: 1,
    }
}))

export const CarouselImg = styled("img")(()=>({
    objectFit: "cover",
    width: "3rem",
    height: "3rem",
    borderRadius: "80px",
    
}))


export const CarouselButtonContainer = styled("div")(()=>({
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: "15px",
    width: "100%"
}))


export const CarouselButton = styled("button")(()=>({
    color: "black",
    border: "none",
}))
