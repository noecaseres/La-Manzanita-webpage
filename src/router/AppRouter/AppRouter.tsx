import React from 'react';
import { SxProps } from '@mui/material';
import { Wrapper } from './AppRouter.styles';
import { CabinDetails } from '@/pages/CabinsSection/CabinsSection';
import { Route, Routes } from 'react-router-dom';
import { LayoutApp } from '@/components/LayoutApp/LayoutApp';
import {FloatingWhatsApp} from "react-floating-whatsapp";
import ReactWhatsapp from "react-whatsapp";
import Anfitriones from '../../assets/img/anfitriones.png'
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';


export interface AppRouterProps {
	sx?: SxProps;
}

const AppRouter: React.FC<AppRouterProps>  = () => {
	return (
		<Wrapper>
			<ScrollToTop/>
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
				<Route path="/" element={<LayoutApp/>}/>
				<Route path="/cabanas/:cabinIndex" element={<CabinDetails/>}/>	
			</Routes>
		</Wrapper>
	)
};

export default AppRouter;
