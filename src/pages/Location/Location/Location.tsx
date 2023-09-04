import {  Box, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import React, { useMemo } from 'react';
import { ContactDetailContainer, DescStyles, LocationStyles } from './Location.styles';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api';
import { WhatsApp } from '@mui/icons-material';
import { defaultTheme } from '@/styles/muiTheme';

export interface LocationProps {}

const Location: React.FC<LocationProps>  = () => {

	const isMobileScreen = useMediaQuery("(max-width:600px)");

	const {isLoaded} = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
	})

	const center = useMemo(() => ({lat:-41.96, lng:-71.54}), [])

	return (
		<Grid container columns={{xs: 1, md: 12}} sx={LocationStyles} spacing={2}>
			<Grid item xs= {12} md= {6} sx={DescStyles}>
				<Typography variant={isMobileScreen ? 'h3' : 'h2'}>
					¿Cómo contactarnos?
				</Typography>
				<Typography variant='body1' sx={{my: "2rem"}}>
					Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
				</Typography>	
				<Box>
					<ContactDetailContainer>
						<Typography variant='body2'>Teléfono</Typography>
						<Typography variant='button'>(0294) 4492-052</Typography>
					</ContactDetailContainer>
					<ContactDetailContainer sx={{}}>
						<Typography variant='body2'>Celular</Typography>
						<Link href="https://wa.me/2944354179" target="_blank">
							<Typography variant='button' sx={{color: defaultTheme.palette.black.main, display: "flex", justifyContent: "space-between", alignItems: "center"}}><WhatsApp sx={{color:'green'}}/>(0294) 4354179</Typography>
						</Link>
					</ContactDetailContainer>
					<ContactDetailContainer>
						<Typography variant='body2'>Dirección</Typography>
						<Typography variant='button' >Rivadavia 2672, El Bolsón, Río Negro (8430). Argentina.</Typography>
					</ContactDetailContainer>
					<ContactDetailContainer>
						<Typography variant='body2'>e-mail</Typography>
						<Typography variant='button'>alojamientolamanzanita@gmail.com</Typography>
					</ContactDetailContainer>
					<ContactDetailContainer>
						<Typography variant='body2'>Facebook</Typography>
						<Typography variant='button'>facebook.com/alojamientolamanzanita</Typography>
					</ContactDetailContainer>
				</Box>		
			</Grid>
			<Grid item xs= {12} md= {6} sx={{height: "100%", width: "100%", alignSelf: "center",
			}}>
			{isLoaded ? (
			<GoogleMap
				center={center}
				zoom={13}
				mapContainerStyle={{width: "503px", maxWidth: "100%", height: "503px"}}
			>
				<MarkerF position={center}/>
			</GoogleMap>
				): null
			}
			</Grid>
		</Grid>
	)
};

export default Location;
