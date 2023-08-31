
import { defaultTheme } from '@/styles/muiTheme';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { YellowBand } from '.';

export interface DisclaimerProps {}


const Disclaimer: React.FC<DisclaimerProps> = () => {
  return (
    <Box sx={{display: "flex"}}>
    <Box sx={YellowBand}></Box>
      <Box>
        <Box
          sx={{
            color: defaultTheme.palette.black.main,
            background: defaultTheme.palette.white.main,
            maxWidth: "20rem",
            padding: "1rem",
          }}>
            <Typography variant='caption'>
            Por su seguridad, reserve y alójese sólo en establecimientos registrados. Verifique ingresando a <b>www.turismoelbolson.com.ar</b> o llamando al <b>+54 (294) 449 2604</b>.
            </Typography>
        </Box>  
      </Box>
      
    </Box>
  )
}

export default Disclaimer;
