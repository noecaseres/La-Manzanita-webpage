import { useEffect, useState } from "react";
import { CarouselButton, CarouselButtonContainer, CarouselImg } from "./Carousel.styles";
// import imagen from "./../../assets/img/lamanzanita1/lamanzanita_2.jpeg";

interface CarouselProps {
	images: string[];
	autoPlay?: boolean;
	showButtons?: boolean;
	cabinNumber: number;
}

const Carousel: React.FC<CarouselProps>  = ({images, autoPlay, showButtons, cabinNumber}) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(images[0]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
    if (autoPlay || !showButtons) {
		const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
		}, 1000);
		return () => clearInterval(interval);
    }
	});

	const selectNewImage = (index: number, images: string[], next = true) => {
		setLoaded(false);
		setTimeout(() => {
			const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
			const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
			setSelectedImage(images[nextIndex]);
			setSelectedIndex(nextIndex);
		}, 500);
	};

	const previous = () => {
		selectNewImage(selectedIndex, images, false);
	};

	const next = () => {
		selectNewImage(selectedIndex, images);
	};
	console.log(cabinNumber)
	console.log(selectedImage)

	useEffect(() => {
		// Utilizar import() para cargar la imagen de manera dinámica
		import( `./../../assets/img/lamanzanita${cabinNumber}/${selectedImage}`)

		.then(image => {
			// Establecer el estado de la imagen cargada
			setImgSrc(image.default);
		})
		.catch(error => {
			console.error('Error loading image:', error);
		});
	}, [cabinNumber, selectedImage]);
	
	const [imgSrc, setImgSrc] = useState('');
	
	return (
		<>
			<CarouselImg
				src={imgSrc}
				srcSet={imgSrc}
				alt="images"
				className={loaded ? "loaded" : ""}
				onLoad={() => setLoaded(true)}
			/>
			<CarouselButtonContainer>
				{showButtons ? (
					<>
						<CarouselButton onClick={previous}>{"<"}</CarouselButton>
						<CarouselButton onClick={next}>{">"}</CarouselButton>
					</>
					) : (
					<></>
				)}
			</CarouselButtonContainer>
		</>
	);
}

export default Carousel;