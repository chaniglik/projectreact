// import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from './Contexts'
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
// import MoneyOffIcon from '@mui/icons-material/MoneyOff';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

// const CurrencyProvider = () => {
//     let theme = useContext(ThemeContext);
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//         if (theme.dollarIls == 1) {
//             theme.setDollarIls(theme.dollarValue);
//             document.getElementById("alert-dialog-slide-description").textContent = 'המטבע מוצג כדולר';
//         }
//         else if (theme.dollarIls === theme.dollarValue) {
//             theme.setDollarIls(1);
//             document.getElementById("alert-dialog-slide-description").textContent = 'המטבע מוצג כשקל';

//         }
//         setTimeout(() => {
//             document.getElementById("alert-dialog-slide-description").textContent = '';
//             handleClose();
//         }, 3000);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (<>
      
//         <React.Fragment>
            
//             {theme.dollarIls === 1 ? <AttachMoneyIcon onClick={handleClickOpen} /> : <MoneyOffIcon onClick={handleClickOpen} />}
//             <Dialog
//                 open={open}
//                 TransitionComponent={Transition}
//                 keepMounted
//                 onClose={handleClose}
//                 aria-describedby="alert-dialog-slide-description"
//             >
//                 <DialogTitle>{"שים לב"}</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-slide-description">
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Agree</Button>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>

//     </>);
// }

// export default CurrencyProvider;




// import { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const CurrencyContext = createContext();

// export function CurrencyProvider({ children }) {
//   const [currencyRate, setCurrencyRate] = useState(1);

//   useEffect(() => {
//     // Fetch the currency rate from the API
//     axios
//       .get('https://v6.exchangerate-api.com/v6/ef8e1a4bf250d9aadabcf604/latest/USD')
//       .then(response => {
//         setCurrencyRate(response.data.conversion_rates.ILS);
//       })
//       .catch(error => {
//         console.error('Error fetching currency rate:', error);
//       });
//   }, []);

//   function convertShekelsToDollars(amount) {
//     return amount / currencyRate;
//   }

//   function convertDollarsToShekels(amount) {
//     return amount * currencyRate;
//   }

//   return (
//     <CurrencyContext.Provider value={{ currencyRate, convertShekelsToDollars, convertDollarsToShekels }}>
//       {children}
//     </CurrencyContext.Provider>
//   );
// }

// export function useCurrency() {
//   return useContext(CurrencyContext);
// }
