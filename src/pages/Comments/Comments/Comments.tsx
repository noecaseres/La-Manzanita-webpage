import { Footer } from '@/components';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Image } from '../Comments/Comments.styles';
import { CommentsLine } from '@/assets/icons';
import { defaultTheme } from '@/styles/muiTheme';
import { Carousel } from '@/components/Carousel/Carousel';

export interface CommentsProps{}

const comments = [
	{
		comment: "Excelencia en la atención, pulcro y confortable. Cerca del centro plaza Pagano.",
		img: "/src//assets/img/comments/comment_1.png",
		name: "Rodrigo Atay"
	},
	{
		comment: "Espectacularrrrrr!!!!! Muy buen lugar y muy cómodo!!! La atención muy buena, aparte queda todo cerca.",
		img: "/src//assets/img/comments/comment_2.png",
		name: "Rodrigo Atay"
	},
	{
		comment: "Excelente atención, cabañas super cómodas, muy buena ubicación.",
		img: "/src//assets/img/comments/comment_3.png",
		name: "Cintia Quezada"
	},
	{
		comment: "Excelente lugar lo super recomiendo mi segunda vez por acá y lo sigo recomendando. Gracias",
		img: "/src//assets/img/comments/comment_4.png",
		name: "Lidia Susana Guevara"
	},
]

const Comments: React.FC<CommentsProps>  = () => {

	const isMobileScreen = useMediaQuery("(max-width:600px)");

	return (
		<>
			<Box sx={{p: { xs: "2.5rem 4rem", md: "6rem 4rem" },  background: defaultTheme.palette.bg.light,}}>
				<Typography variant='h3' sx={{textAlign: isMobileScreen ? "start" : "center" , mb: "3.75rem"}}>¿Qué dicen nuestros clientes?</Typography>
				{isMobileScreen ? 
				<Carousel data={comments} autoPlay/>:
				<Grid container columns={{xs: 4, sm: 8, md: 12}} spacing={2}>
					{comments.map((com,index) => (
						<Grid item key={index} xs= {12} sm= {6} md= {3} spacing={3} sx={{display:"flex", flexDirection: "column", justifyContent: "space-between"}}>
							<Typography variant='body2'>{com.comment}</Typography>	
							<Box>
							<CommentsLine/>
							<Box sx={{display: "flex", alignItems: "end", gap: "0.5rem"	}}>
								<Image src={com.img}></Image>
								<Typography variant='button'>{com.name}</Typography>	
							</Box>
							</Box>
						</Grid>
		
					))
					}
				</Grid>
				}
			</Box>
			<Footer/>
		</>
	)
};

export default Comments;
