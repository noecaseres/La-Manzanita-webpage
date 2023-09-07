import React from 'react';
import { cabins } from '@/data/data';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { CabinDetailsStyles, Image, SpecificationsContainer, SpecificationsDetails } from './CabinDetails.styles';
import { defaultTheme } from '@/styles/muiTheme';
import { BedIcon, Bedding, Heater, Kitchen, Parking, ShowerIcon, TvIcon, WifiIcon } from '@/components/icons';

export interface CabinOneProps {
}

const CabinOne: React.FC<CabinOneProps>  = () => {
	const { cabinIndex } = useParams();
	const cabinParsed = cabinIndex ? parseInt(cabinIndex) : 0;
	const cabin = cabins.filter(cab => cab.number === cabinParsed);

	return (
		<>
			{
				cabin.map((c, index) => (
					<Box sx={{ mt: "8rem", height: "100vh", width: "100vw"}} key={index}>
						<Grid container columns={{xs: 4, sm: 8, md: 12}}
						sx={{ width: "100%", justifyContent: "center"}}>
							{c.image.map((img, index)=>(
								<Grid item key={index} xs= {2} sm= {3} md= {3}>
									<Image src={`/src/assets/img/${img}`} alt="cabaña"></Image>
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
							<Typography variant='body2' sx={{my: "2rem"}}>
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
							<Box sx={{my: "2rem"}} >
								<Typography variant='h4' sx={{mb: "1rem"}}>Información importante</Typography>
								<Typography variant='button'>Reglas generales</Typography>
								<Typography variant='body2' sx={{mt: "1rem"}}>
								El horario de ingreso a las cabañas es a partir de las 12 del mediodia.<br/>
								El horario de egreso de las cabañas es antes de las 10 de la mañana.<br/>
								Cada cabaña cuenta con 1 llaves.<br/>
								No esta permitido fumar dentro de las cabañas.<br/>
								No se permite cocinar frituras (por cuestiones de seguridad).<br/>
								No se permiten fiestas ni ruidos molestos.<br/>
								No se permiten invitados no registrados.<br/>
								Consultar por mascotas.
								</Typography>	
							</Box>
							<Divider/>
						</Box>					
					</Box>
				))
			}
		</>

	)
};

export default CabinOne;
