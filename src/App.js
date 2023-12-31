
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './App.css';
import { createContext, useContext, useState, useEffect } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Donation from './Donation';
import ToDonate from './ToDonate';
import Main from './Main';
import NavBar from "./NavBar";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Down from './Down'
import { ThemeContext, CoinContext } from "./Contexts";
import axios from "axios";

const myStyleDay = createTheme({
  palette:
  {
    primary: {
      main: "#212121",
      dark: "#fff",
      light: "#555",
      contrastText: "#fff"

    }
    
  }
  , shape: {
    borderRadius: 10
  }
  , background: {
    default: "#fff"
  }
});

const myStyleNight = createTheme({
  palette:
  {
    primary: {
      main: "#fff",
      dark: "#fff",
      light: "#555",
      contrastText: "#212121"

    }
  }
  , shape: {
    borderRadius: 10
  },
  background: {
    default: '#212121',
  },

});
function App(props) {
  let [listPeople, setListPeople] = useState([
    {
      name: "שרה",
      amount: 20000,
      dedication: "לרפואת הילד",
      dateDonate: new Date(2023, 11, 25, 15, 42)
    },
    {
      name: "משה כהן",
      amount: 250000,
      dedication: "לחזרה הביתה בשלום",
      dateDonate: new Date(2023, 11, 25, 16, 0)
    },
    {
      name: "אנונימי",
      amount: 10000,
      dedication: "להצלחה במבחן",
      dateDonate: new Date(2023, 11, 25, 14, 1)
    },
    {
      name: "מסעודה",
      amount: 500,
      dedication: "להצלחה בכל העניינים ",
      dateDonate: new Date(2023, 11, 22, 20, 69)
    },
    {
      name: "חיים מאיר",
      amount: 200,
      dedication: "לברכה והצלחה ",
      dateDonate: new Date(2023, 11,25, 15, 0)
    },
    {
      name: "משה לוי",
      amount: 100,
      dedication: "בריאות ונחת ",
      dateDonate: new Date(2023, 11, 0, 6, 42)
    },
    {
      name: "שפרה",
      amount: 500000,
      dedication: "להצלחה בכל העניינים ",
      dateDonate: new Date(2023, 11, 0, 6, 42)
    },
    {
      name: "ליבי גולד",
      amount: 20000,
      dedication: "לברכה והצלחה ",
      dateDonate: new Date(2023, 11, 20, 6, 42)
    },
    {
      name: "משה לוי",
      amount: 100,
      dedication: "בריאות ונחת ",
      dateDonate: new Date(2023, 11, 20, 6, 42)
    }
  ]);
  const addPeopleToList = (newPeople) => {
    let copy = [...listPeople];
    copy.push(newPeople);
    setListPeople(copy);
    console.log(listPeople);
  }
  const changArr = (arr) => {
    let copy = [...arr];
    setListPeople(copy);
  }

  let [styleMode, setStyleMode] = useState("day");
  const changeColor = () => {
    if (styleMode === "day")
      setStyleMode("dark");
    else setStyleMode("day");
  }
  // const fetchExchangeRate = async () => {
  //   const apiKey = '99b97b9a916f4d16a5a0778bf6190ef1';
  //   try {
  //     const response = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=99b97b9a916f4d16a5a0778bf6190ef1');
  //     const exchangeRate = response.data.conversion_rate;
  //     changeDollarRate(exchangeRate);
  //   } catch (error) {
  //     changeDollarRate(7)
  //     console.error('Error fetching exchange rate:', error.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchExchangeRate();//בעת טעינת הדף ילך לעדכן את הפרשי השערים
  // }, []);

  useEffect(() => {
    axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=99b97b9a916f4d16a5a0778bf6190ef1')
      .then(res => {
        changeDollarRate(res.data.rates.ILS)
        // return changeDollarRate(res.data.rates.ILS);
      }).catch(err => {
        changeDollarRate(1)
      })
  }
    , []);
  let [coin, setCoin] = useState({ dollarAmount: undefined, currencyType: "shekel" });
  const changeCurrencyType = (cur) => {
    setCoin({ ...coin, currencyType: cur })
  }
  const changeDollarRate = (rate) => {
    setCoin({ ...coin, dollarAmount: rate })
  }
  return (
  <>
    <Box
      sx={{

        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: styleMode === "day" ? "#fff" :  "rgb(16, 15, 15)",
        color: '#fff',
        p: 0,
        margin: '0'

      }}
    >
      {/* <div>{coin.dollarAmount}</div> */}
      <CoinContext.Provider  value={{ coin: coin, changeCurrencyType: changeCurrencyType }}>
        <NavBar styleMode={styleMode} changeColor={changeColor} />

        <div className="app-container" dir='rtl'>
          <ThemeProvider  theme={styleMode === "day" ? myStyleDay : myStyleNight}>
            <Main listPeople={listPeople} />
            <Routes>
              <Route path="Donation" element={<Donation listPeople={listPeople} setListPeople={changArr} />}></Route>
              <Route path="ToDonate" element={<ToDonate addPeopleToList={addPeopleToList} />}></Route>
            </Routes>
          </ThemeProvider>
          <Down />
        </div>
      </CoinContext.Provider>
    </Box>
  </>
  );
}

export default App;
