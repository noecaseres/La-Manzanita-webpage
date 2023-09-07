import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { CabinsCard, CabinsContainer, CabinsGrid, CabinsStyles, DescriptionStyles, Image, ImageContainer, Overlay, OverlayContent, ParagraphContainer } from './CabinsSection.styles';
import { BedIcon, ShowerIcon, TvIcon, WifiIcon } from '@/components/icons';
import { Link } from 'react-router-dom';
import { defaultTheme } from '@/styles/muiTheme';

export interface CabinsSectionProps {
	title?: string;
	description?: string;
	beds?: string;
	image?: string | undefined;
}

const cabins = [
{
	title: "La Manzanita 1",
	description: "Cabaña de dos plantas para 5 personas, con cocina comedor, baño y dos habitaciones.",
	beds: "5",
	image: "/src/assets/img/lamanzanita_1.png"
},
{
	title: "La Manzanita 2",
	description: "Cabaña de dos plantas para 4 personas, con cocina comedor, baño y dos habitaciones.",
	beds: "4",
	image: "/src/assets/img/lamanzanita_2.jpeg"
},
{
	title: "La Manzanita 4",
	description: "Cabaña de dos plantas para 4 personas, con cocina comedor, baño y dos habitaciones.",
	beds: "4",
	image: "/src/assets/img/lamanzanita_3.png"
},
{
	title: "La Manzanita 5",
	description: "Cabaña de dos plantas para 5 personas, con cocina comedor, baño y dos habitaciones.",
	beds: "5",
	image: "/src/assets/img/lamanzanita_4.png"
},

]


const CabinsSection: React.FC<CabinsSectionProps>  = () => {

const isMobileScreen = useMediaQuery("(max-width:600px)");


	return (
		<Box sx={CabinsContainer}>
			<Box sx={CabinsStyles}>
				<Typography variant="h3" sx={{color: "black"}}>
					Nuestras cabañas
				</Typography>
				<Typography variant='body1' sx={{my: "1rem", textAlign: "center"}}>
					Todas las cabañas cuentan con cochera con media-sombra y patio compartido con parrilla.
				</Typography>
			
				<Box sx={CabinsGrid}>
					{cabins.map((cabin,index) => (
						<Box key={index} sx={CabinsCard}>
							<Box sx={ImageContainer}>
								<Image src={cabin.image} alt="cabin image"/>
								<Overlay />
								<OverlayContent>
								<Link
									to={`/${index + 1}`}
									style={{bottom: "0", textDecoration: "none", color: defaultTheme.palette.bg.main}}>
									<Typography variant='button'>Ampliar</Typography>
								</Link>
								</OverlayContent>
								
							</Box>				
							<Box sx={ParagraphContainer}>
								<Typography variant={isMobileScreen ? 'h5' : 'h4'}>{cabin.title}</Typography>
								<Typography sx={DescriptionStyles} variant='body2'>{cabin.description}</Typography>
								<Box sx={{display: "flex", gap: "1rem", mt: ".5rem"}}>
									<Box sx={{display: "flex", alignItems: "center", gap: ".25rem"}}>
										<BedIcon/>
										<Typography variant='body2'>{cabin.beds}</Typography>
									</Box>
									<ShowerIcon/>
									<TvIcon/>
									<WifiIcon/>
								</Box>
							</Box> 
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	)
};

export default CabinsSection;
