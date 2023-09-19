import React, { useEffect, useState } from 'react';
import { CarouselButton, CarouselButtonContainer, CarouselContainer, CarouselImg } from './Carousel.styles';
import { Box, Typography } from '@mui/material';
import { CommentsLine } from '@/assets/icons';


export interface Comment {
	comment: string;
	img: string;
	name: string;
}
export interface CarouselProps {
	data: Comment[];
	autoPlay?: boolean;
	showButtons?: boolean;
}

const Carousel: React.FC<CarouselProps>  = (props: CarouselProps) => {
	
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedComment, setSelectedComment] = useState(props.data[0]);
	const [loaded, setLoaded] = useState(false);
	

	useEffect(() => {
		if (props.autoPlay || !props.showButtons) {
		const interval = setInterval(() => {
			selectNewComment(selectedIndex, props.data);
		}, 2500);
		return () => clearInterval(interval);
		}
	});


	const selectNewComment = (index: number, data: Comment[], next = true) => {
		setLoaded(false);
		setTimeout(() => {
			const condition = next ? selectedIndex < data.length - 1 : selectedIndex > 0;
			const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : data.length - 1;
			setSelectedComment(props.data[nextIndex]);
			setSelectedIndex(nextIndex);
		}, 500);
	};
	
	const previous = () => {
		selectNewComment(selectedIndex, props.data, false);
	};
	
	const next = () => {
		selectNewComment(selectedIndex, props.data);
	};


	return (
		<>

			<CarouselContainer className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)}>
				<Typography variant='body2'>{selectedComment.comment}</Typography>	
				<Box>
					<CommentsLine/>
					<Box sx={{display: "flex", alignItems: "end", gap: "0.5rem"	}}>
						<CarouselImg
							src={selectedComment.img}
							alt="comment"
							
						/>
						<Typography variant='button'>{selectedComment.name}</Typography>	
					</Box>
				</Box>			
			</CarouselContainer>
			
			<CarouselButtonContainer>
				{props.showButtons ? (
				<>
					<CarouselButton onClick={previous}>{"<"}</CarouselButton>
					<CarouselButton onClick={next}>{">"}</CarouselButton>
				</>
				) : (
				<></>
				)}
			</CarouselButtonContainer>
    </>
	)
};

export default Carousel;
