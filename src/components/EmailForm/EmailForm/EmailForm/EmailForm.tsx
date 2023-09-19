import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ButtonSubmit, FieldContainer, FormGroupStyles } from './EmailForm.styles';
import { Box, Button, FormGroup, Snackbar, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


export interface EmailFormProps {
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
  ) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const EmailForm: React.FC<EmailFormProps>  = (

) => {
	const [open, setOpen] = useState(false);


	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
		return;
		}
	
		setOpen(false);
	};
	
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: { preventDefault: () => void; }) => {
	e.preventDefault();

	if(form.current){
		emailjs.sendForm('service_m15gsae', 'template_qv83d8b', form.current, 'dI33eXa9kvg8bzHd7')
		.then((result) => {
			setOpen(true);
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	}
	};
	

	return (
		<Box sx={FormGroupStyles}>
			<Typography variant='caption' sx={{color: "black"}}>Desde</Typography>
			<Box sx={{display: "flex", alignItems: "center", mb: "1rem"}}>
				<Typography variant="button">$19990</Typography>
				<Typography variant='body2'>/Noche</Typography>
			</Box>
			<FormGroup ref={form} onSubmit={sendEmail} sx={{gap: "1rem"}}>
				<FieldContainer>
					<label>Nombre</label>
					<input type="text" name="user_name" placeholder='Ingrese su nombre'/>
				</FieldContainer>
				<FieldContainer>
					<label>Contacto</label>
					<input type="email" name="user_email" placeholder='Ingrese su email'/>
				</FieldContainer>
				<FieldContainer>
					<label>Indique fecha de ingreso y egreso y cantidad de huéspedes.</label>
					<textarea name="message"/>			
				</FieldContainer>
				<Button sx={ButtonSubmit}>
					<input type="submit" value="Consultar disponibilidad" 
					style={{border: "none", background:"transparent", fontFamily: "Graphik-Semibold", fontWeight: 500, fontSize: "16px"}}/>		
				</Button>
				<Typography variant='caption'>Al presionar “Consultar disponibilidad” estás enviando un email a los anfitriones para consultar la disponibilidad de la cabaña en la fecha deseada. Esto no es una respuesta automática.</Typography>
			</FormGroup>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					Su mensaje a sido enviado!
				</Alert>
			</Snackbar>
		</Box>

	)
};

export default EmailForm;
