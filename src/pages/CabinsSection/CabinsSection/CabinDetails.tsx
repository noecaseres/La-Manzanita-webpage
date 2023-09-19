import React from 'react';
import { cabins } from '@/data/data';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { CabinDetailsStyles, Image, SpecificationsContainer, SpecificationsDetails } from './CabinDetails.styles';
import { defaultTheme } from '@/styles/muiTheme';
import { BedIcon, Bedding, Heater, Kitchen, Parking, ShowerIcon, TvIcon, WifiIcon } from '@/assets/icons';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';
import { EmailForm } from '@/components/EmailForm/EmailForm/EmailForm';

export interface CabinOneProps {
}

const CabinDetails: React.FC<CabinOneProps>  = () => {
	const { cabinIndex } = useParams();
	const cabinParsed = cabinIndex ? parseInt(cabinIndex) : 0;
	const cabin = cabins.filter(cab => cab.number === cabinParsed);

	return (
		<>
		<ScrollToTop/>
			{
				cabin.map((c, index) => (
					<Box key={index} sx={{p: "2rem"}}>
						
						<Button sx={{ width: "100%", backgroundColor: "transparent" }}>
							<Link to="/" style={{bottom: "0", textDecoration: "none", color: defaultTheme.palette.primary.main}}>
								&larr; Volver al inicio
							</Link>
						</Button>	
						<Grid container columns={{xs: 4, sm: 8, md: 12}}
						sx={{ width: "100%", justifyContent: "center"}}  spacing={2}>
							{c.image.map((img, index)=>(
								<Grid item key={index} xs= {2} sm= {3} md= {3}>
									<Image src={`/src/assets/img/lamanzanita${c.number}/${img}`} alt="cabaña"></Image>
								</Grid>
							))}					
						</Grid>
						<Box sx={CabinDetailsStyles}>
							<Typography variant='h3' sx={{color: defaultTheme.palette.black.main}}>{`La Manzanita ${c.number}`}</Typography>
							<Typography variant='body2' sx={{color: defaultTheme.palette.black.main, mb: "3rem"}}>{c.description}</Typography>
							<Divider/>
							<Box sx={{my: "2rem"}}>
								<SpecificationsContainer>
									<BedIcon/>
									<SpecificationsDetails>
										<Typography variant='button'>{`${c.beds} camas`}</Typography>
										<Typography variant='caption'>{c.bedsDetails}</Typography>
									</SpecificationsDetails>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<TvIcon/>
									<SpecificationsDetails>
										<Typography variant='button'>Televisión</Typography>
										<Typography variant='caption'>Con cable.</Typography>
									</SpecificationsDetails>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<ShowerIcon/>
									<SpecificationsDetails>
										<Typography variant='button'>1 baño</Typography>
										<Typography variant='caption'>Con ducha y bidet.</Typography>
									</SpecificationsDetails>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<WifiIcon/>
									<SpecificationsDetails>
										<Typography variant='button'>Internet</Typography>
										<Typography variant='caption'>Conexión Wifi.</Typography>
									</SpecificationsDetails>
								</SpecificationsContainer>
							</Box>
							<Divider/>
							<Typography variant='body2' sx={{py: "2rem"}}>
								{`Cabaña para ${c.guest} personas, con cocina comedor, baño y una habitación matrimonial.
								Cuenta con servicio de TV por cable, WIFI, microondas, calefacción, cocina a gas y parrilla interna.
								Todas las cabañas cuentan con cochera con media-sombra y patio compartido con parrilla.`}
							</Typography>
							<Divider/>
							<Box sx={{my: "2rem"}}>
								<Typography variant='h4' sx={{mb: "2rem"}}>Amenities</Typography>
								<SpecificationsContainer>
									<TvIcon/>
									<Typography variant='button'>TV</Typography>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<Parking/>
									<Typography variant='button'>Estacionamiento gratuito</Typography>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<WifiIcon/>
									<Typography variant='button'>Wi-Fi</Typography>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<Kitchen/>
									<Typography variant='button'>Cocina y vajilla</Typography>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<Heater/>
									<Typography variant='button'>Calefacción a gas</Typography>
								</SpecificationsContainer>
								<SpecificationsContainer>
									<Bedding/>
									<Typography variant='button'>Calefacción</Typography>
								</SpecificationsContainer>
							</Box>
							<Divider/>
							<Box sx={{py: "2rem"}} >
								<Typography variant='h4' sx={{mb: "1rem"}}>Información importante</Typography>
								<Typography variant='button'>Reglas generales</Typography>
								<Typography variant='body2' sx={{mt: "1rem", }}>
								El horario de ingreso a las cabañas es a partir de las 12 del mediodía.<br/>
								El horario de egreso de las cabañas es antes de las 10 de la mañana.<br/>
								Cada cabaña cuenta con 1 llave.<br/>
								No esta permitido fumar dentro de las cabañas.<br/>
								No se permite cocinar frituras (por cuestiones de seguridad).<br/>
								No se permiten fiestas ni ruidos molestos.<br/>
								No se permiten invitados no registrados.<br/>
								Consultar por mascotas.
								</Typography>	
							</Box>
							<Divider/>
						</Box>	
						<EmailForm/>
					</Box>
				))
			}
		</>

	)
};

export default CabinDetails;
