import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Link} from '@mui/material';

import Logo  from '../../assets/logo/Logo'
import { defaultTheme } from '@/styles/muiTheme';
import { AppBarStyles, HideAppBar, LogoContainer } from './Navbar.styles';
export interface NavbarProps {}

const pagina = [
	{
	title: "Home",
	ref: "home"
	},
	{
	title: "Nuestras Cabañas",
	ref: "cabanas"
	},
	{
	title: "Anfitriones",
	ref: "anfitriones"
	},
	{
	title: "El Bolsón",
	ref: "actividades"
	},
	{
	title: "Ubicación",
	ref: "ubicacion"
	}

]
const facebookUrl = 'https://www.facebook.com/lamanzanitaelbolson';
const instagramUrl = 'https://www.instagram.com';

const Navbar: React.FC<NavbarProps>  = () => {

const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
const [show, setShow] = useState(true);

const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const controlNavbar = () =>{
	if(window.scrollY > 50) {
		setShow(false)
	}else{
		setShow(true)
	}
}

useEffect(() => {
	window.addEventListener('scroll',
	controlNavbar)
	return () => {
		window.removeEventListener('scroll', 
		controlNavbar)
	}
}, [])


	return (
		<AppBar position="fixed"
		sx={ !show ? HideAppBar : AppBarStyles }>
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/home"
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
					}}
					>
					<LogoContainer>
						<Logo/>
					</LogoContainer>
				</Typography>
				<Typography
					variant="h5"
					noWrap
					component="a"
					href="/home"
					sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
					}}
					>
					<Logo/>
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
						edge="end"
						sx={{padding: "0"}}
					>
					<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
						display: { xs: 'block', md: 'none' },
						}}
					>
						{pagina.map((page) => (
						<MenuItem
							key={page.ref}
							onClick={handleCloseNavMenu}
							>
							<Link href={page.ref} color="inherit" underline="none">
								<Typography textAlign="center">{page.title}</Typography>
							</Link>
						</MenuItem>
						))}
					</Menu>
				</Box>
				<Box sx={{ gap: "2.5rem", mr: "2.5rem", flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
					{pagina.map((page) => (
						<Button
						variant='text'
						key={page.ref}
						onClick={handleCloseNavMenu}
						href={page.ref}
						sx={{
							my: 2,
							display: 'block',
							color: defaultTheme.palette.white.main
						}}
						>
						{page.title}
						</Button>
					))}
				</Box>
				<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
					<a href={facebookUrl} target="_blank" rel="noopener noreferrer">
						<FacebookIcon sx={{fill: defaultTheme.palette.white.main, mr: "1rem", borderRadius: "50"}}/>
					</a>
					<a href={instagramUrl} target="_blank" rel="noopener noreferrer">
						<InstagramIcon sx={{fill: defaultTheme.palette.white.main}}/>
					</a>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
	)
};

export default Navbar;
