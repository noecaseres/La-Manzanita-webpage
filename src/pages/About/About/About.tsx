
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { AboutButton, AboutContainer, Image } from './About.styles';
import { defaultTheme } from '@/styles/muiTheme';



export interface AboutProps {}

const About: React.FC<AboutProps>  = () => {

	const isMobileScreen = useMediaQuery("(max-width:600px)");

	return (
		<Box sx={AboutContainer} id='anfitriones'>
			<Box>
				<Image src= "/src/assets/img/anfitriones.png" alt="anfitriones"/>
			</Box>
			<Box sx={{px: "2.5rem"}}>
				<Typography variant={isMobileScreen ? 'h3':'h2'} sx={{color: defaultTheme.palette.black.main}}>Estás en buenas manos</Typography>
				<Typography variant='body1' sx={{color: defaultTheme.palette.black.main, my: "1rem"}}>
					Somos Carlos y Cristina, desde corazón de la Comarca Andina.
					La generosidad y el servicio son dos valores fundamentales que nos han guiado desde el principio.
					Creemos que la hospitalidad es más que ofrecer un techo; se trata de compartir historias, tradiciones y la belleza de nuestra tierra.
					Queremos que te sientas como parte de nuestra comunidad, que descubras los secretos mejor guardados de la región y que te vayas con recuerdos imborrables.
				</Typography>
				<Button href="ubicacion" sx={AboutButton}>Contactanos</Button>
			</Box>
		</Box>
	)
};

export default About;
