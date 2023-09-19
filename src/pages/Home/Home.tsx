import React from 'react';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { HomeParagraph, HomeStyles } from './Home.styles';
import { defaultTheme } from '@/styles/muiTheme';
import Disclaimer from './Disclaimer';

export interface HomeProps {}

const Home: React.FC<HomeProps>  = () => {

	const isMobileScreen = useMediaQuery("(max-width:600px)"); 
	
	return (
			<Box sx={HomeStyles} id='home'>
				<Box sx={HomeParagraph}>
					<Box sx={{maxWidth: "714px", color: defaultTheme.palette.bg.main}}>
						<Typography variant={isMobileScreen ? "h2" : "h1"}>	
							Cabañas 
							<br/>
							La Manzanita
						</Typography>
						<Typography variant='body1' sx={{mb: "3rem"}}>	
						¡Descubre la belleza de la Patagonia Argentina en nuestra encantadora ciudad de El Bolsón!
						Ofrecemos cabañas acogedoras y confortables para que disfrutes de unas vacaciones inolvidables.
						</Typography>
					</Box>
					{isMobileScreen ?
					<>
						<Disclaimer/>
						<Button 
							href="#cabanas"
							sx={{
								mt: "3rem",
								padding: "1rem 1.5rem",
								width: "100%",
								background: defaultTheme.palette.primary.main,
								color: defaultTheme.palette.black.main}}
						>
							<Typography variant='button'>Ver cabañas</Typography>
							
						</Button>
					</> : 
					<>
						<Button 
							href="#cabanas"
							sx={{ justifyContent: "start" }}
						>
							Ver cabañas
						</Button>
					<Box sx={{display: "flex", alignItems: "end", justifyContent: "end"}}>
						<Disclaimer/>
					</Box>
					</>
					}
				</Box>
			</Box>

	)
};

export default Home;
