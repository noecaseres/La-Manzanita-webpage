import { defaultTheme } from '@/styles/muiTheme';
import { Box, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { ActivitiesStyles, GridContainer, Image, Overlay, OverlayContent } from './Activities.styles';


export interface ActivitiesProps {
	title?: string,
	description?: string,
	image?: string | undefined
}

const activities = [
	{
		title: "El bosque tallado",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/activities/bosquetallado.png",
		link: "https://www.turismoelbolson.gob.ar/bosque-tallado"
	},
	{
		title: "Mirador del azul",
		description: "Ofrece vistas espectaculares del río Azul y la majestuosa comarca, con el imponente cerro Piltriquitrón como telón de fondo.",
		image: "/src/assets/img/activities/mirador.png",
		link: "https://www.turismoelbolson.gob.ar/rio-azul"
	},
	{
		title: "Feria de artesanos",
		description: "Mercado donde artesanos locales exhiben joyería, textiles y más. Es un lugar perfecto para explorar la artesanía local y disfrutar de la música y la comida regional.",
		image: "/src/assets/img/activities/feria.png",
		link: "https://www.turismoelbolson.gob.ar/feria-regional-artesanos-plaza-paga"
	},
	{
		title: "Cerro Perito Moreno",
		description: "El Cerro Perito Moreno es un centro de esquí impresionante en El Bolson, perfecto para disfrutar de emocionantes descensos y vistas panorámicas de la Patagonia. ¡Vive la emoción del esquí aquí!",
		image: "/src/assets/img/activities/cerro.png",
		link: "https://www.turismoelbolson.gob.ar/cerro-perito-moreno"
	},
	{
		title: "Cajón del azul",
		description: "El Cajón del Azul es un impresionante desfiladero donde el río Azul serpentea entre altas paredes de piedra. Un paraíso natural para explorar y maravillarse. ¡Descubre la belleza de la Patagonia aquí!",
		image: "/src/assets/img/activities/cajon.png",
		link: "https://www.turismoelbolson.gob.ar/refugios-de-montana"
	},
	{
		title: "Cabeza del indio",
		description: "El Mirador Cabeza del Indio ofrece vistas panorámicas espectaculares de El Bolsón. ¡Descubre la belleza de la región desde aquí!",
		image: "/src/assets/img/activities/cabezadelindio.png",
		link: ""
	}
	]

const Activities: React.FC<ActivitiesProps>  = () => {

	const isMobileScreen = useMediaQuery("(max-width:600px)");

	return (
		<Box sx={ActivitiesStyles} id='actividades'>
			<Typography variant={isMobileScreen ? 'h3':'h2'} sx={{ color:defaultTheme.palette.black.main}}>Puntos de interés</Typography>
			<Typography variant='body1' sx={{ color:defaultTheme.palette.black.main, m: "1rem 0 3rem 0", textAlign: "center"}}>
			Explora los tesoros naturales de la Patagonia Argentina con emocionantes paseos, senderos panorámicos y actividades al aire libre que te esperan en El Bolsón.
			</Typography>
			<Grid container columns={{xs: 4, sm: 8, md: 12}} spacing={2} sx={GridContainer}>
				{activities.map((act,index) => (
					<Grid item key={index} xs= {12} sm= {6} md= {4} spacing={3} sx={{position: "relative"}}>
						<Image src={act.image}></Image>
						<Overlay/>
						<OverlayContent>
							<Typography variant='body1' sx={{textAlign: "start", px: "1rem", fontWeight: "bold"}}>{act.title}</Typography>	
							<Typography variant='body2' sx={{textAlign: "start", px: "1rem", mb: "3rem"}}>{act.description}</Typography>	
							<Link variant='button' href= {act.link} target= "blank" sx={{mr: "2rem"}}>
								Entrar a ver más info
							</Link>
						</OverlayContent>
					</Grid>
					
				))
				}
			</Grid>
			<Typography variant='caption' sx={{mt: "3rem"}}>(*) Cabañas La Manzanita no vende ni gestiona paquetes turísticos.</Typography>
		</Box>
	)
};

export default Activities;
