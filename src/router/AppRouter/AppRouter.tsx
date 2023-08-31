import React from 'react';
import { Navbar } from '@/components';
import { About, Activities, Home, Location } from '@/pages';
import { CabinDetails, CabinsSection } from '@/pages/CabinsSection/CabinsSection';
import { SxProps } from '@mui/material';
import {Routes, Route, Navigate} from "react-router-dom";
import { Wrapper } from './AppRouter.styles';


export interface AppRouterProps {
	sx?: SxProps;
}

const AppRouter: React.FC<AppRouterProps>  = () => {
	return (
		<Wrapper>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Navigate to="/home"/>}/>
				<Route path="home" element={<Home/>}/>
				<Route path="cabanas" element={<CabinsSection/>}/>
				<Route path="anfitriones" element={<About/>}/>
				<Route path="actividades" element={<Activities/>}/>
				<Route path="ubicacion" element={<Location/>}/>
				<Route path="/:cabinIndex" element={<CabinDetails/>}/>
			</Routes>
			{/* <Footer sx={null}/> */}
		</Wrapper>
	)
};

export default AppRouter;
