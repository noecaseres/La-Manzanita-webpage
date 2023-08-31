import { defaultTheme } from '@/styles/muiTheme';
import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { GridContainer, Image, Overlay, OverlayContent } from './Activities.styles';


export interface ActivitiesProps {
	title?: string,
	description?: string,
	image?: string | undefined
}

const activities = [
	{
		title: "El bosque tallado",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/bosquetallado.png",
		link: "https://www.turismoelbolson.gob.ar/bosque-tallado"
	},
	{
		title: "Mirador del azul",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/mirador.png",
		link: "https://www.turismoelbolson.gob.ar/rio-azul"
	},
	{
		title: "Feria de artesanos",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/feria.png",
		link: "https://www.turismoelbolson.gob.ar/feria-regional-artesanos-plaza-paga"
	},
	{
		title: "Cerro Perito Moreno",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/cerro.png",
		link: "https://www.turismoelbolson.gob.ar/cerro-perito-moreno"
	},
	{
		title: "Cajón del azul",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/cajon.png",
		link: "https://www.turismoelbolson.gob.ar/refugios-de-montana"
	},
	{
		title: "Cabeza del indio",
		description: "Esculturas de madera en el camino a la cumbre del cerro Piltriquitrón, creadas por artistas locales a partir de troncos que sobrevivieron a un incendio forestal de 1978.",
		image: "/src/assets/img/cabezadelindio.png",
		link: ""
	}
	]

const Activities: React.FC<ActivitiesProps>  = () => {
	return (
		<Box sx={{mx:"4rem", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pt: "6rem"}}>
			<Typography variant='h2' sx={{ color:defaultTheme.palette.black.main}}>Puntos de interés</Typography>
			<Typography variant='body1' sx={{ color:defaultTheme.palette.black.main, m: "1rem 0 3rem 0"}}>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal.</Typography>
			<Grid container columns={{xs: 4, sm: 8, md: 12}} spacing={2} sx={GridContainer}>
				{activities.map((act,index) => (
					<Grid item key={index} xs= {12} sm= {6} md= {4} spacing={3} sx={{}}>
						<Image src={act.image}></Image>
						<Overlay />
						<OverlayContent>
							<Typography variant='body1' sx={{textAlign: "start", px: "1rem", fontWeight: "bold", zIndex: "3"}}>{act.title}</Typography>	
							<Typography variant='body2' sx={{textAlign: "start", px: "1rem", mb: "3rem"}}>{act.description}</Typography>	
							<Link variant='button' href= {act.link} target= "blank" sx={{mr: "2rem"}}>
								Entrar a ver más info
							</Link>
						</OverlayContent>
					</Grid>
					
				))
				}
			</Grid>
		</Box>
	)
};

export default Activities;
