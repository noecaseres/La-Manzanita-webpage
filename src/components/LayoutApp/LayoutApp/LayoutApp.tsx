import { Navbar } from '@/components';
import { About, Activities, Home, Location } from '@/pages';
import { CabinsSection } from '@/pages/CabinsSection/CabinsSection';
import { Comments } from '@/pages/Comments/Comments';
import React from 'react';

export interface LayoutAppProps {}

const LayoutApp: React.FC<LayoutAppProps>  = () => {
	return (
		<>
			<Navbar/>
			<Home/>
			<CabinsSection/>
			<About/>
			<Activities/>
			<Location/>
			<Comments/>
			
		</>
	)
};

export default LayoutApp;
