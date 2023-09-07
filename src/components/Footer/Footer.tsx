import React from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import { defaultTheme } from '@/styles/muiTheme';

export interface FooterProps {
	sx?: SxProps;
}

const Footer: React.FC<FooterProps>  = () => {
	return (
		<Box 
			sx={{
				background: defaultTheme.palette.black.main,
				color: defaultTheme.palette.bg.main,
				minHeight: "60px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center", 
				justifyContent: "center",
				width: "100vw",
				}}>	
			<Box>	
				<Typography variant='body1'>
					Cabañas La Manzanita 2023 • Todos los derechos reservados.
				</Typography>
			</Box>

		</Box>
	)
};

export default Footer;
