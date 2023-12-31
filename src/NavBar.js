import { blue } from "@mui/material/colors";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { CoinContext, ThemeContext } from "./Contexts";
import { Box, Tabs, Tab, TextField, MenuItem, Alert, Stack } from '@mui/material';
import './navBar.css';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createContext, useContext, useState,useEffect } from 'react';
import React from 'react';

const NavBar = (props) => {
  const navigate = useNavigate();
  function toDonate() {
    navigate("ToDonate");
  }
  function donations() {
    navigate("/");
  }
  const [showMessage, setShowMessage] = useState(false);
  let typeCoin = useContext(CoinContext);
  const changeCoin = (e) => {
    typeCoin.changeCurrencyType(e.target.value);
    messageByCangeCoin();
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  function messageByCangeCoin() {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

  };
  return (
    <>

      <div className="link">

        
        <div>
          <Box
            sx={{ '& .MuiTextField-root': { m: 1, width: '15ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField sx={{color:'white'}} id="outlined-select-currency" select label="בחר סוג מטבע" defaultValue="shekel"
              onChange={changeCoin}>
              <MenuItem  value="dollar">$</MenuItem>
              <MenuItem value="shekel" >₪</MenuItem>
            </TextField>
          </Box>
          {showMessage == true &&
            <Stack sx={{ width: '20ch', marginLeft: 2 }} spacing={4}>
              <Alert sx={{ color: "black" }} variant="outlined" severity="success">
                {`שינוי המטבע ל- ${typeCoin.coin.currencyType == "shekel" ? "₪" : "$"}בוצע בהצלחה  `}
              </Alert>
            </Stack>
          }
        </div>
        <div >
          <IconButton  onClick={props.changeColor} >
            {props.styleMode === "day" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
        <div className="linkim">
          <Link style={{ fontSize: "25px", textDecoration: "none", margin: "3%", color: " black" }} to="Donation">תרומות</Link>
          <Link style={{ fontSize: "25px", textDecoration: "none", margin: "3%", color: "black" }} to="ToDonate">לתרום</Link>
        </div>
      </div>
    </>


  );
}

export default NavBar;

