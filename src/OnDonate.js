import React,{ useContext } from "react";

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { CoinContext } from "./Contexts";
import { fromShekelToX } from "./dollarUtils";
import {Card,CardHeader,CardContent,Avatar,Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
const OnDonate = (props) => {
  let coinType = useContext(CoinContext);
    let today = () => {
      let temp;
      let currentTime = new Date();
    let timeDifference = currentTime.getTime() - props.myPeople.dateDonate.getTime(); // Calculate the time difference in milliseconds
      // Calculate the number of minutes if more than a minute has passed
      if (timeDifference > (8640000)) {
        temp = Math.floor(timeDifference / 86400000); // Divide by 86400000 to convert milliseconds to days
        return temp + " ימים";
      }
      if (timeDifference >(3600000)) {
          const hours = Math.floor(timeDifference / 3600000); // Divide by 3600000 to convert milliseconds to hours
          return hours + " שעות";
        } 

      // if (timeDifference > 60000) {
        temp = Math.floor(timeDifference / 60000); // Divide by 60000 to convert milliseconds to minutes
        return temp + " דקות";
      // }
    //   temp = Math.floor(timeDifference / 1000); // Divide by 1000 to convert milliseconds to seconds
    //   return temp + " שניות";
    }
    setInterval(today, 1000);
    return ( 
      <>
      <Card sx={{ margin:1,width:350}}>
       <CardActionArea>
        <CardContent>
        <CardHeader color="black"
          avatar={ <Avatar sx={{bgcolor:'#303F9F'}} alt={props.myPeople.name} src=" " /> }
          action={<IconButton aria-label="settings" color="black">
           <div style={{color:'#303F9F'}}>{coinType.coin.currencyType === "shekel" && "₪" } {Math.round(fromShekelToX(props.myPeople.amount, coinType.coin.dollarAmount, coinType.coin.currencyType))}  {coinType.coin.currencyType != "shekel" && "$" }</div>
          </IconButton>}
        />
       
          <Typography gutterBottom variant="h5" component="div">
          {props.myPeople.name &&` ${props.myPeople.name}`}
          </Typography>
          
          <Typography variant="body2" >
          {props.myPeople.dedication &&` ${props.myPeople.dedication}`}
          </Typography>
          
          
          <Typography variant="body2">
          {props.myPeople.dateDonate &&`לפני ${today() }`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </>
     );
}
 
export default OnDonate;