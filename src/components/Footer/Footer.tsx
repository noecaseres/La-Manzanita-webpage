import React from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import { FooterStyles } from './Footer.styles';

export interface FooterProps {
	sx?: SxProps;
}

const Footer: React.FC<FooterProps>  = () => {
	return (
		<Box sx={FooterStyles}>	
			<Box sx={{px: "1.25rem"}}>	
				<Typography variant='body1' sx={{textAlign: "center"}}>
					Cabañas La Manzanita 2023 • Todos los derechos reservados.
				</Typography>
			</Box>

		</Box>
	)
};

export default Footer;
