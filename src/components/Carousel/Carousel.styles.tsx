import { styled } from "@mui/material";

export const CarouselImg = styled("img")(()=>({
    maxWidth: "500px",
    width: "100%",
    height: "auto",
    opacity: 0,
    transition: "1s",
    "&.loaded": {
        opacity: 1,
      },
}))
    
export const CarouselButtonContainer = styled("div")(()=>({
    display: "flex",
    alignContent: "center",
    flexDirection: "row",
    mt: "15px",
}))
  

export const CarouselButton = styled("button")(()=>({
    color: "white",
    backgroundColor: "#eb118a",
    padding: "8px",
    margin: "0 5px",
}))

