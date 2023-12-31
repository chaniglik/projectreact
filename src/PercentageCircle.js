import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { makeStyle } from '@mui/material/styles';


 const  PercentageCircle=({percentage,color,size})=>(
 <CircularProgress variant='determinate' value={percentage > 100 ? 100 : percentage} style={{color:color}}/>
 ); 
   
  export default PercentageCircle;