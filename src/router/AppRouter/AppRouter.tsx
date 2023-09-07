import React from 'react';
import { Footer, Navbar } from '@/components';
import { About, Activities, Home, Location } from '@/pages';
import { CabinDetails, CabinsSection } from '@/pages/CabinsSection/CabinsSection';
import { SxProps } from '@mui/material';
import {Routes, Route, Navigate} from "react-router-dom";
import { Wrapper } from './AppRouter.styles';
import {FloatingWhatsApp} from "react-floating-whatsapp";
import ReactWhatsapp from "react-whatsapp";
import Anfitriones from '../../assets/img/anfitriones.png'


export interface AppRouterProps {
	sx?: SxProps;
}

const AppRouter: React.FC<AppRouterProps>  = () => {
	return (
		<Wrapper>
			<Navbar/>
			<ReactWhatsapp number="+542944354179" message="Hello World!!!" element="webview"/>
			<FloatingWhatsApp
				accountName="La Manzanita"
				phoneNumber="+542944354179"
				statusMessage="Normalmente responde en 2 horas"
				chatMessage= "Hola! En que podemos ayudarte?"
				avatar={Anfitriones}
				className="FloatingWhatsAppClass"
			/>
			<Routes>
				<Route path="/" element={<Navigate to="/home"/>}/>
				<Route path="home" element={<Home/>}/>
				<Route path="cabanas" element={<CabinsSection/>}/>
				<Route path="anfitriones" element={<About/>}/>
				<Route path="actividades" element={<Activities/>}/>
				<Route path="ubicacion" element={<Location/>}/>
				<Route path="/:cabinIndex" element={<CabinDetails/>}/>
			</Routes>
			<Footer/>
		</Wrapper>
	)
};

export default AppRouter;
