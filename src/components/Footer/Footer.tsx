import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, SxProps, Typography } from '@mui/material';
import { defaultTheme } from '@/styles/muiTheme';

export interface FooterProps {
	sx: SxProps;
}

const Footer: React.FC<FooterProps>  = () => {
	return (
		<Box 
			sx={{
				background: defaultTheme.palette.black.main,
				color: defaultTheme.palette.bg.main,
				minHeight: "186px",
				position: "fixed",
				bottom: "0",
				display: "flex",
				flexDirection: "column",
				alignItems: "center", 
				justifyContent: "center",
				width: "100vw", }}>	
			<Box>
				<FacebookIcon/>
				<InstagramIcon/>
			</Box>
			<Box>
				<Typography variant='h6'>
					Cabañas La Manzanita 2021 • Todos los derechos reservados.
				</Typography>
			</Box>

		</Box>
	)
};

export default Footer;
