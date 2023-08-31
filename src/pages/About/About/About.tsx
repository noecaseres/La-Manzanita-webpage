
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { AboutButton, AboutContainer, Image } from './About.styles';
import { defaultTheme } from '@/styles/muiTheme';



export interface AboutProps {
}

const About: React.FC<AboutProps>  = () => {
	return (
		<Box sx={AboutContainer}>
			<Box>
				<Image src= "/src/assets/img/anfitriones.png" alt="anfitriones"/>
			</Box>
			<Box sx={{px: "2.5rem"}}>
				<Typography variant='h2' sx={{color: defaultTheme.palette.black.main}}>Estás en buenas manos</Typography>
				<Typography variant='body1' sx={{color: defaultTheme.palette.black.main, my: "1rem"}}>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</Typography>
				<Button sx={AboutButton}>Contactanos</Button>
			</Box>
		</Box>
	)
};

export default About;
