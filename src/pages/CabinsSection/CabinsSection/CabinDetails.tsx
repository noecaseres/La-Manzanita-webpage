import React from 'react';
import { cabins } from '@/data/data';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Carousel } from '@/components/Carousel';

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
					<Box sx={{mt: "20rem", height: "100vh"}} key={index}>
						<Carousel 
							cabinNumber={cabinParsed}
							autoPlay
							showButtons
							images = {c.image}
							/>
						<Box sx={{background: "red"}}>{c.description}</Box>
					</Box>
				))
			}
		</>

	)
};

export default CabinOne;
